import React from "react";
import { theme } from "../../../services/common/theme";
import PlayButton from "../../../components/PlayButton";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";

const BackgroundImg = require("../../../../assets/images/BackgroundImg1.png");
const ModalGradient = require("../../../../assets/images/ModalGradient.png");

const SlotMachineGame = require("../../../../assets/images/SlotMachineGame.png");
const Sound = require("../../../../assets/icons/Sound.png");

const SlotMachine = ({ navigation }) => {
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

          <View style={styles.modalInnerContainer}>
            <Text style={styles.headerText}>Are you ready to play?</Text>
            <Text style={styles.headerTitle}>SLOT MACHINE</Text>
            <Image
              resizeMode="stretch"
              source={SlotMachineGame}
              style={styles.slotMachineImage}
            />
          </View>
          <PlayButton onPress={() => navigation.navigate("PrizeWon")} />
        </View>
      </View>
    </View>
  );
};

export default SlotMachine;

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
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
  },
  headerTitle: {
    fontSize: 36,
    lineHeight: 38,
    marginVertical: 15,
    textAlign: "center",
    textShadowRadius: 2,
    fontFamily: "Digitalt500",
    color: theme.COLORS.WHITE,
    textShadowColor: theme.COLORS.OCHRE,
    textShadowOffset: { width: 3, height: 3 },
  },
  slotMachineImage: {
    width: "100%",
    height: "78%",
    borderRadius: 30,
  },
});
