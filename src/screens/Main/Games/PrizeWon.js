import React from "react";
import { theme } from "../../../services/common/theme";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";

const BackgroundImg = require("../../../../assets/images/BackgroundImg1.png");
const InnerCityLogo = require("../../../../assets/images/InnerCityLogo.png");
const ModalGradient = require("../../../../assets/images/ModalGradient.png");
const PrizeStars = require("../../../../assets/images/PrizeStars.png");
const TopPrizeTicket = require("../../../../assets/images/TopPrizeTicket.png");

const Sound = require("../../../../assets/icons/Sound.png");

const PrizeWon = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="stretch"
        source={BackgroundImg}
        style={styles.backgroundImage}
      />
      <View style={styles.innerContainer}>
        <View style={styles.soundContainer}>
          <Image source={Sound} resizeMode="stretch" style={styles.soundIcon} />
        </View>
        <View style={styles.modalContainer}>
          <ImageBackground
            resizeMode="stretch"
            source={ModalGradient}
            style={styles.gradientModal}
          />
          <Image
            source={PrizeStars}
            resizeMode="stretch"
            style={styles.prizeStars}
          />
          <View style={styles.modalInnerContainer}>
            <Text style={styles.headerText}>Prize You Get</Text>
            <View style={styles.topPrizeContainer}>
              <ImageBackground
                resizeMode="stretch"
                source={TopPrizeTicket}
                style={styles.topPrizeTicker}
              />
              <Text style={styles.topPrizeText}>Top Prize</Text>
            </View>
            <Text style={styles.hurrahText}>Hurrah!!</Text>
            <Text style={styles.wonSongOfDayText}>
              You have won a song of the day !!
            </Text>
            <Text style={styles.winByText}>Just Win By Jeezy</Text>
            <Text style={styles.singerNameText}>Name Of Singer</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PrizeWon;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  soundContainer: {
    height: 50,
    width: "100%",
    marginTop: "15%",
    justifyContent: "center",
  },
  soundIcon: {
    right: 0,
    width: 22,
    height: 22,
    position: "absolute",
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: theme.COLORS.MADISON_OPACITY_71P,
  },
  modalContainer: {
    height: "66%",
    width: "100%",
    marginTop: "10%",
    borderRadius: 25,
  },
  gradientModal: {
    height: "100%",
    width: "100%",
    borderRadius: 25,
  },
  prizeStars: {
    width: 125,
    height: 65,
    top: "-7%",
    alignSelf: "center",
    position: "absolute",
  },
  modalInnerContainer: {
    top: 0,
    left: 0,
    right: 0,
    padding: 25,
    bottom: "2%",
    position: "absolute",
  },
  headerText: {
    fontSize: 38,
    lineHeight: 46,
    marginTop: "5%",
    textAlign: "center",
    fontFamily: "InterBlack900",
    color: theme.COLORS.ATOMIC_TANGERINE,
  },
  topPrizeContainer: {
    height: 40,
    width: "50%",
    marginTop: 28,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  topPrizeTicker: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  topPrizeText: {
    fontSize: 24,
    lineHeight: 25,
    textAlign: "center",
    textShadowRadius: 1,
    color: theme.COLORS.WHITE,
    fontFamily: "Digitalt500",
    textShadowColor: theme.COLORS.BLACK,
    textShadowOffset: { width: 2, height: 2 },
  },
  hurrahText: {
    fontSize: 64,
    marginTop: 35,
    lineHeight: 75,
    textAlign: "center",
    textShadowRadius: 2,
    color: theme.COLORS.WHITE,
    fontFamily: "Digitalt500",
    textShadowColor: theme.COLORS.OCHRE,
    textShadowOffset: { width: 3, height: 3 },
  },
  wonSongOfDayText: {
    fontSize: 24,
    marginTop: 16,
    lineHeight: 28,
    textAlign: "center",
    fontFamily: "Digitalt500",
    color: theme.COLORS.WHITE,
  },
  winByText: {
    fontSize: 24,
    marginTop: 37,
    lineHeight: 34,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
  },
  singerNameText: {
    fontSize: 14,
    marginTop: 7,
    lineHeight: 20,
    textAlign: "center",
    fontStyle: "italic",
    color: theme.COLORS.WHITE,
    fontFamily: "InterSemiBold600Italic",
  },
});
