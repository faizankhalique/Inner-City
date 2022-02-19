import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
import Ripple from "../components/Ripple";
import { theme } from "../services/common/theme";

const GamesImg1 = require("../../assets/images/DashboardImg1.png");
const InnerCityLogo = require("../../assets/images/InnerCityLogo.png");
const ModalGradient = require("../../assets/images/ModalGradient.png");

const PaperFortune = require("../../assets/images/PaperFortune.png");
const ScratchLottery = require("../../assets/images/ScratchLottery.png");
const RollDice = require("../../assets/images/RollDice.png");
const SlotMachine = require("../../assets/images/SlotMachine.png");

const games = [
  {
    title: "Paper Fortune Teller",
    screen: "PaperFortuneTeller",
    image: PaperFortune,
  },
  {
    title: "Slot Machine",
    screen: "SlotMachine",
    image: SlotMachine,
  },
  {
    title: "Scratch the Lottery",
    screen: "ScratchTheLottery",
    image: ScratchLottery,
  },
  {
    title: "Roll the Dice",
    screen: "RollTheDice",
    image: RollDice,
  },
];

const ImageButton = ({
  title = "",
  selected = false,
  onSelect = () => {},
  image = InnerCityLogo,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <Ripple onPress={onSelect} style={styles.button}>
        <Image source={image} resizeMode="stretch" style={styles.buttonImage} />
        {!selected && (
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}>{title}</Text>
          </View>
        )}
      </Ripple>
    </View>
  );
};

const Games = () => {
  const [selectedGame, setSelectedGame] = useState(games[1].screen);

  return (
    <View style={styles.container}>
      <Image resizeMode="stretch" source={GamesImg1} style={styles.gamesImg1} />
      <View style={styles.innerContainer}>
        <Image
          resizeMode="stretch"
          source={InnerCityLogo}
          style={styles.innerCityLogo}
        />
        <View style={styles.modalContainer}>
          <ImageBackground
            resizeMode="stretch"
            source={ModalGradient}
            style={styles.gradientModal}
          />

          <View style={styles.modalInnerContainer}>
            <Text style={styles.headerText}>
              PICK YOUR FAVOURITE GAME FOR TODAY !!
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              {games.map((game, index) => (
                <ImageButton
                  key={index}
                  image={game.image}
                  title={game.title}
                  selected={selectedGame === game.screen}
                  onSelect={() => setSelectedGame(game.screen)}
                />
              ))}
            </ScrollView>
          </View>
          <View style={styles.playButtonContainer}>
            <Ripple style={styles.playButton} onPress={() => {}}>
              <Text style={styles.playButtonText}>Play</Text>
            </Ripple>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Games;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gamesImg1: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  innerCityLogo: {
    width: 234,
    height: 86,
    marginTop: "15%",
    alignSelf: "center",
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: theme.COLORS.MADISON_OPACITY_71P,
  },
  modalContainer: {
    height: "66%",
    width: "100%",
    borderRadius: 25,
  },
  gradientModal: {
    height: "100%",
    width: "100%",
    borderRadius: 25,
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
    fontSize: 24,
    lineHeight: 34,
    marginBottom: 10,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
  },
  buttonContainer: {
    marginVertical: 15,
  },
  button: {
    height: 135,
    width: "100%",
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonImage: {
    width: "100%",
    height: "100%",
  },
  buttonTextContainer: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.COLORS.BAY_OF_MANY_OPACITY_90P,
  },
  buttonText: {
    fontSize: 24,
    lineHeight: 34,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
  },
  playButtonContainer: {
    bottom: "-3%",
    alignSelf: "center",
    position: "absolute",
  },
  playButton: {
    height: 43,
    width: 150,
    borderWidth: 3,
    borderRadius: 33,
    alignItems: "center",
    justifyContent: "center",
    borderColor: theme.COLORS.WHITE,
    backgroundColor: theme.COLORS.TANGO,
  },
  playButtonText: {
    fontSize: 24,
    lineHeight: 26,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "Digitalt500",
  },
});
