import React, { useState, useEffect } from "react";
import { Audio } from "expo-av";
import Ripple from "../../components/Ripple";
import { theme } from "../../services/common/theme";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";

import CarParkLife from "../../../assets/icons/CarParkLife.png";
import GeorgeFloydsLife from "../../../assets/icons/GeorgeFloydsLife.png";
import Mbd from "../../../assets/icons/Mbd.png";
import Mm from "../../../assets/icons/Mm.png";
import Eminem from "../../../assets/icons/Eminem.png";
import Miami from "../../../assets/icons/Miami.png";
import SongPlaying from "../../../assets/icons/SongPlaying.png";

const MySongs1 = require("../../../assets/images/MySongs1.png");
const MySongs2 = require("../../../assets/images/MySongs2.png");
const BackgroundGradient = require("../../../assets/images/MySongsGradient.png");

const songs = [
  {
    icon: CarParkLife,
    name: "CAR PARK LIFE",
    artist: "XXXXXExtention01",
    remoteUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    icon: GeorgeFloydsLife,
    artist: "Legacy in the Houston",
    name: "George Floyd’s Life George Floyd’s Life George Floyd’s Life ",
    remoteUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    icon: Mbd,
    name: "MBD",
    artist: "MY BROTHER’S DREAM",
    remoteUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    icon: Mm,
    name: "MM",
    artist: "MM MACRONI !",
    remoteUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    icon: Eminem,
    name: "eminem",
    artist: "RAP GOD",
    remoteUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
  {
    icon: Miami,
    name: "#MIAMI",
    artist: "MIAMI BASS",
    remoteUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
  },
];

const Songs = () => {
  const [song, setSong] = useState(null);
  const [sound, setSound] = useState(null);

  const handleSelectSong = async (index) => {
    if (sound) {
      await sound.stopAsync();
    }
    setSong(index);
    const song = songs[index];
    const { sound } = await Audio.Sound.createAsync({ uri: song.remoteUrl });
    setSound(sound);
    await sound.playAsync();
  };

  React.useEffect(() => {
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
              source={item.icon}
              style={styles.icon}
              resizeMode="stretch"
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
