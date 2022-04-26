import { Audio } from "expo-av";
import firebase from "firebase";
import Ripple from "../../components/Ripple";
import React, { useState, useEffect } from "react";
import { theme } from "../../services/common/theme";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { useStateValue } from "../../services/state/State";
import { actions } from "../../services/state/Reducer";

// import CarParkLife from "../../../assets/icons/CarParkLife.png";
// import GeorgeFloydsLife from "../../../assets/icons/GeorgeFloydsLife.png";
// import Mbd from "../../../assets/icons/Mbd.png";
// import Mm from "../../../assets/icons/Mm.png";
// import Eminem from "../../../assets/icons/Eminem.png";
// import Miami from "../../../assets/icons/Miami.png";
import SongPlaying from "../../../assets/icons/SongPlaying.png";
import Artist from "../../../assets/icons/Artist.png";

const MySongs1 = require("../../../assets/images/MySongs1.png");
const MySongs2 = require("../../../assets/images/MySongs2.png");
const BackgroundGradient = require("../../../assets/images/MySongsGradient.png");

// const songs = [
//   {
//     thumbnail: CarParkLife,
//     name: "CAR PARK LIFE",
//     artist: "XXXXXExtention01",
//     song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//   },
//   {
//     thumbnail: GeorgeFloydsLife,
//     artist: "Legacy in the Houston",
//     name: "George Floyd’s Life",
//     song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
//   },
//   {
//     thumbnail: Mbd,
//     name: "MBD",
//     artist: "MY BROTHER’S DREAM",
//     song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
//   },
//   {
//     thumbnail: Mm,
//     name: "MM",
//     artist: "MM MACRONI !",
//     song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
//   },
//   {
//     thumbnail: Eminem,
//     name: "Eminem",
//     artist: "RAP GOD",
//     song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
//   },
//   {
//     thumbnail: Miami,
//     name: "#MIAMI",
//     artist: "MIAMI BASS",
//     song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
//   },
// ];

const Songs = () => {
  const [, dispatch] = useStateValue();
  const { uid } = firebase.auth()?.currentUser || {};

  const [user, setUser] = useState();
  const [songs, setSongs] = useState([]);
  const [song, setSong] = useState(null);
  const [sound, setSound] = useState(null);

  const fetchUser = async () => {
    try {
      dispatch({ type: actions.SET_SHOW_LOADER, showLoader: true });
      await firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .onSnapshot((querySnapshot) => {
          setUser(querySnapshot.data());
          dispatch({ type: actions.SET_SHOW_LOADER, showLoader: false });
        });
    } catch (err) {
      console.log("fetchUser Error:", err);
    }
  };

  useEffect(() => {
    if (uid) {
      fetchUser();
    }
  }, [uid]);

  const fetchSongs = async () => {
    try {
      dispatch({ type: actions.SET_SHOW_LOADER, showLoader: true });
      await firebase
        .firestore()
        .collection("songs")
        .where(firebase.firestore.FieldPath.documentId(), "in", user.rewards)
        .onSnapshot((querySnapshot) => {
          const songs = [];
          querySnapshot.forEach((s) => {
            const song = s.data();
            songs.push(song);
          });
          setSongs(songs);
          dispatch({ type: actions.SET_SHOW_LOADER, showLoader: false });
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user && user.rewards && user.rewards.length > 0) {
      fetchSongs();
    }
  }, [user]);

  const handleSelectSong = async (index) => {
    if (sound) {
      await sound.stopAsync();
    }
    setSong(index);
    const song = songs[index];
    const { sound } = await Audio.Sound.createAsync({ uri: song.song });
    setSound(sound);
    await sound.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Image
        source={MySongs1}
        resizeMode="stretch"
        style={styles.backgroundImage1}
      />
      <Image
        source={MySongs2}
        resizeMode="stretch"
        style={styles.backgroundImage2}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.infoText1}>Cas park</Text>
        <Text style={styles.infoText2}>Take out Caspark</Text>
        <Text style={styles.infoText3}>This New Weekend</Text>
        <Text style={styles.infoText4}>
          This hip hop giant Kendrick Lamus teamed up with R&T Take out Caspark
          king
        </Text>
      </View>
      <Image
        resizeMode="stretch"
        source={BackgroundGradient}
        style={styles.gradientContainer}
      />
      <View style={styles.artistContainer}>
        <Image source={Artist} resizeMode="stretch" style={styles.artistIcon} />
        <View style={styles.artistOnlineIndicator} />
      </View>
      <FlatList
        data={songs}
        keyExtractor={(_, index) => index}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Ripple
            onPress={() => handleSelectSong(index)}
            style={index === song ? styles.listItemActive : styles.listItem}
          >
            <View style={styles.statusContainer}>
              {index !== song ? (
                <Text style={styles.serialNumberText}>{`${
                  index < 9 ? "0" : ""
                }${index + 1}`}</Text>
              ) : (
                <Image
                  resizeMode="stretch"
                  source={SongPlaying}
                  style={styles.songPlayingIcon}
                />
              )}
            </View>
            <Image
              style={styles.icon}
              resizeMode="stretch"
              source={{ uri: item.thumbnail }}
            />
            <View style={styles.listItemRightContainer}>
              <Text numberOfLines={1} style={styles.songName}>
                {item.name}
              </Text>
              <Text numberOfLines={1} style={styles.songArtist}>
                {item.artist}
              </Text>
            </View>
          </Ripple>
        )}
      />
    </View>
  );
};

export default Songs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage1: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "45%",
    position: "absolute",
  },
  backgroundImage2: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.7,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  infoContainer: {
    height: "45%",
    paddingVertical: 30,
    paddingHorizontal: 19,
    justifyContent: "flex-end",
  },
  infoText1: {
    fontSize: 16,
    lineHeight: 20,
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
  },
  infoText2: {
    fontSize: 24,
    marginTop: 4,
    lineHeight: 29,
    color: theme.COLORS.WHITE,
    fontFamily: "InterMedium500",
  },
  infoText3: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 16,
    color: theme.COLORS.WHITE,
    fontFamily: "InterSemiBold600",
  },
  infoText4: {
    fontSize: 12,
    marginTop: 4,
    lineHeight: 16,
    fontFamily: "InterRegular400",
    color: theme.COLORS.WHITE_OPACITY_40P,
  },
  gradientContainer: {
    left: 0,
    right: 0,
    bottom: 0,
    height: "55%",
    width: "100%",
    position: "absolute",
  },
  artistContainer: {
    zIndex: 1,
    top: "42%",
    right: "4%",
    borderWidth: 1,
    borderRadius: 90,
    position: "absolute",
    borderColor: theme.COLORS.GRAY_1,
  },
  artistIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderTopRightRadius: 20,
  },
  artistOnlineIndicator: {
    right: 3,
    width: 8,
    height: 8,
    borderWidth: 0.5,
    borderRadius: 10,
    position: "absolute",
    borderColor: theme.COLORS.GRAY_1,
    backgroundColor: theme.COLORS.DE_YORK,
  },
  innerContainer: {
    flex: 1,
    paddingTop: "30%",
    paddingHorizontal: 20,
  },
  listItem: {
    paddingVertical: 12,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
  },
  listItemActive: {
    paddingVertical: 12,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
    backgroundColor: theme.COLORS.BISCAY,
  },
  statusContainer: {
    width: "8%",
    alignItems: "center",
    justifyContent: "center",
  },
  serialNumberText: {
    fontSize: 16,
    lineHeight: 20,
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
  },
  songPlayingIcon: {
    width: 24,
    height: 24,
  },
  icon: {
    width: 48,
    height: 48,
    marginHorizontal: 12,
  },
  listItemRightContainer: {
    flex: 1,
  },
  songName: {
    fontSize: 16,
    lineHeight: 20,
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
    textTransform: "uppercase",
  },
  songArtist: {
    fontSize: 12,
    marginTop: 3,
    lineHeight: 16,
    color: theme.COLORS.WHITE,
    fontFamily: "InterMedium500",
  },
});
