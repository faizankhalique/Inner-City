import React, { useState } from "react";
import { theme } from "../../services/common/theme";
import {
  Text,
  View,
  Image,
  Modal,
  FlatList,
  StatusBar,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import Ripple from "../../components/Ripple";
import EntypoIcon from "react-native-vector-icons/Entypo";

const Soul = require("../../../assets/images/Soul.png");
const ReadyPlayerOne = require("../../../assets/images/ReadyPlayerOne.png");
const EnolaHolmes = require("../../../assets/images/EnolaHolmes.png");
const NowYouSeeMe2 = require("../../../assets/images/NowYouSeeMe2.png");
const BirdsOfPrey = require("../../../assets/images/BirdsOfPrey.png");
const Mulan = require("../../../assets/images/Mulan.png");
const Onward = require("../../../assets/images/Onward.png");
const KnivesOut = require("../../../assets/images/KnivesOut.png");

const movies = [
  {
    name: "Soul",
    year: "2020",
    image: Soul,
    type: "Drama",
    director: "Kimo Stamboel",
    writer: "Joko Anwar",
    duration: "1 hour 39 minute(s)",
    rating: "D (17+)",
  },
  {
    name: "Knives Out",
    year: "2019",
    image: KnivesOut,
    type: "Drama",
    director: "Kimo Stamboel",
    writer: "Joko Anwar",
    duration: "1 hour 39 minute(s)",
    rating: "D (17+)",
  },
  {
    name: "Onward",
    year: "2020",
    image: Onward,
    type: "Drama",
    director: "Kimo Stamboel",
    writer: "Joko Anwar",
    duration: "1 hour 39 minute(s)",
    rating: "D (17+)",
  },
  {
    name: "Mulan",
    year: "2020",
    image: Mulan,
    type: "Drama",
    director: "Kimo Stamboel",
    writer: "Joko Anwar",
    duration: "1 hour 39 minute(s)",
    rating: "D (17+)",
  },
  {
    name: "Birds of Prey",
    year: "2020",
    image: BirdsOfPrey,
    type: "Drama",
    director: "Kimo Stamboel",
    writer: "Joko Anwar",
    duration: "1 hour 39 minute(s)",
    rating: "D (17+)",
  },
  {
    name: "Now You See Me 2",
    year: "2016",
    image: NowYouSeeMe2,
    type: "Drama",
    director: "Kimo Stamboel",
    writer: "Joko Anwar",
    duration: "1 hour 39 minute(s)",
    rating: "D (17+)",
  },
  {
    name: "Enola Holmes",
    year: "2020",
    image: EnolaHolmes,
    type: "Drama",
    director: "Kimo Stamboel",
    writer: "Joko Anwar",
    duration: "1 hour 39 minute(s)",
    rating: "D (17+)",
  },
  {
    name: "Ready Player One",
    year: "2018",
    image: ReadyPlayerOne,
    type: "Drama",
    director: "Kimo Stamboel",
    writer: "Joko Anwar",
    duration: "1 hour 39 minute(s)",
    rating: "D (17+)",
  },
];

const MovieInfoModal = ({ open = false, movie = {}, onClose = () => {} }) => {
  return (
    movie && (
      <Modal
        transparent
        visible={open}
        statusBarTranslucent
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContentContainer}>
            <View style={styles.backButtonContainer}>
              <Ripple onPress={onClose} style={styles.backButton}>
                <EntypoIcon
                  size={25}
                  name="chevron-left"
                  color={theme.COLORS.WHITE}
                />
              </Ripple>
            </View>
            <Image
              resizeMode="stretch"
              source={movie.image}
              style={styles.modalMovieImage}
            />
            <ScrollView
              style={styles.modalInfoContainer}
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.modalMovieName}>{movie.name}</Text>
              <Text style={styles.modalMovieType}>{movie.type}</Text>

              <View style={styles.modalFieldValueContainer}>
                <Text style={styles.modalFieldLabel}>Director: </Text>
                <Text style={styles.modalFieldValue}>{movie.director}</Text>
              </View>

              <View style={styles.modalFieldValueContainer}>
                <Text style={styles.modalFieldLabel}>Writer: </Text>
                <Text style={styles.modalFieldValue}>{movie.writer}</Text>
              </View>

              <View style={styles.modalFieldValueContainer}>
                <Text style={styles.modalFieldLabel}>Duration: </Text>
                <Text style={styles.modalFieldValue}>{movie.duration}</Text>
              </View>

              <View style={styles.modalFieldValueContainer}>
                <Text style={styles.modalFieldLabel}>Rating: </Text>
                <Text style={styles.modalFieldValue}>{movie.rating}</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    )
  );
};

const Movies = () => {
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(false);

  const handleOpenMovieInfoModal = (movie) => {
    setSelectedMovie(movie);
    setOpenInfoModal(true);
  };

  const handleCloseMovieInfoModal = (index) => {
    setOpenInfoModal(false);
    setSelectedMovie(null);
  };

  return (
    <>
      <MovieInfoModal
        open={openInfoModal}
        movie={selectedMovie}
        onClose={handleCloseMovieInfoModal}
      />
      <View style={styles.container}>
        <FlatList
          data={movies}
          numColumns={2}
          keyExtractor={(_, index) => index}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContentContainer}
          renderItem={({ item }) => (
            <View style={styles.listItemContainer}>
              <Ripple
                style={styles.listItem}
                onPress={() => handleOpenMovieInfoModal(item)}
              >
                <Image
                  source={item.image}
                  resizeMode="stretch"
                  style={styles.movieThumbnail}
                />
                <Text style={styles.movieName}>
                  {item.name}
                  <Text style={styles.movieYear}> ({item.year})</Text>
                </Text>
              </Ripple>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default Movies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "30%",
    alignItems: "center",
  },
  listContentContainer: {
    paddingBottom: "10%",
  },
  listItemContainer: {
    marginBottom: 21,
    paddingHorizontal: 10,
    width: Dimensions.get("screen").width * 0.5,
  },
  listItem: {
    borderRadius: 15,
  },
  movieThumbnail: {
    height: 200,
    width: "100%",
    borderRadius: 15,
  },
  movieName: {
    fontSize: 17,
    marginTop: 8,
    marginLeft: 5,
    lineHeight: 21,
    color: theme.COLORS.WHITE,
    fontFamily: "InterRegular400",
  },
  movieYear: {
    fontFamily: "LatoRegular400",
    color: theme.COLORS.SILVER_1,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight || "10%",
    backgroundColor: theme.COLORS.MADISON_OPACITY_50P,
  },
  modalContentContainer: {
    padding: 7,
    height: "80%",
    marginTop: "8%",
    borderRadius: 30,
    marginBottom: "11.2%",
    marginHorizontal: "4.5%",
    backgroundColor: theme.COLORS.BISCAY,
  },
  backButtonContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  modalMovieImage: {
    height: 300,
    width: "100%",
    marginTop: 30,
    borderRadius: 21,
  },
  modalInfoContainer: {
    paddingHorizontal: 15,
  },
  modalMovieName: {
    fontSize: 25,
    marginTop: 29,
    lineHeight: 30,
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
  },
  modalMovieType: {
    fontSize: 12,
    marginVertical: 20,
    lineHeight: 15,
    color: theme.COLORS.SILVER_1,
    fontFamily: "InterSemiBold600Italic",
  },
  modalFieldValueContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  modalFieldLabel: {
    width: "25%",
    fontSize: 15,
    lineHeight: 32,
    color: theme.COLORS.WHITE,
    fontFamily: "InterRegular400",
  },
  modalFieldValue: {
    width: "75%",
    fontSize: 15,
    lineHeight: 34,
    color: theme.COLORS.WHITE,
    fontFamily: "InterSemiBold600",
  },
});
