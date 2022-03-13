import React, { useState, useEffect } from "react";
import { theme } from "../../../../services/common/theme";
import PlayButton from "../../../../components/PlayButton";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from "react-native-reanimated";

const DiceFace1 = require("../../../../../assets/icons/DiceFace1.png");
const DiceFace2 = require("../../../../../assets/icons/DiceFace2.png");
const DiceFace3 = require("../../../../../assets/icons/DiceFace3.png");
const DiceFace4 = require("../../../../../assets/icons/DiceFace4.png");
const DiceFace5 = require("../../../../../assets/icons/DiceFace5.png");
const DiceFace6 = require("../../../../../assets/icons/DiceFace6.png");

const BackgroundImg = require("../../../../../assets/images/BackgroundImg1.png");
const ModalGradient = require("../../../../../assets/images/ModalGradient.png");

const RollTheDiceGame = require("../../../../../assets/images/RollTheDiceGame.png");
const RollTheDiceBackground = require("../../../../../assets/images/RollTheDiceBackground.jpeg");
const Sound = require("../../../../../assets/icons/Sound.png");

const RollTheDice = ({ navigation }) => {
  const [showDiceRolling, setShowDiceRolling] = useState(false);

  const [diceValue1, setDiceValue1] = useState(1);
  const [diceValue2, setDiceValue2] = useState(1);

  const rotation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

  let interval = null;

  const handlePlayRollTheDice = () => {
    setShowDiceRolling(true);
    setTimeout(() => {
      interval = setInterval(() => {
        const dice1Value = Math.round(Math.random() * 6 + 1);
        setDiceValue1(dice1Value);
        const dice2Value = Math.round(Math.random() * 6 + 1);
        setDiceValue2(dice2Value);
      }, 200);
      rotation.value = withSequence(
        withTiming(-10, { duration: 50 }),
        withRepeat(withTiming(360, { duration: 100 }), 10, true),
        withTiming(0, { duration: 50 })
      );
      setTimeout(() => {
        clearInterval(interval);
      }, 1200);
    }, 500);
  };

  const handleShowPrize = () => {
    navigation.navigate("PrizeWon");
  };

  const getFace = (diceValue) => {
    switch (diceValue) {
      case 1:
        return DiceFace1;
      case 2:
        return DiceFace2;
      case 3:
        return DiceFace3;
      case 4:
        return DiceFace4;
      case 5:
        return DiceFace5;
      case 6:
        return DiceFace6;
      default:
        return DiceFace1;
    }
  };

  useEffect(() => {
    clearInterval(interval);
  }, []);

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

          {!showDiceRolling ? (
            <>
              <View style={styles.modalInnerContainer}>
                <Text style={styles.headerText}>Are you ready to play?</Text>
                <Text style={styles.headerTitle}>Roll The Dice</Text>
                <Image
                  resizeMode="stretch"
                  source={RollTheDiceGame}
                  style={styles.rollTheDiceImage}
                />
              </View>
              <PlayButton onPress={handlePlayRollTheDice} />
            </>
          ) : (
            <>
              <>
                <View style={styles.modalInnerContainer}>
                  <Text style={styles.headerTitle}>Rolling The Dice</Text>
                  <ImageBackground
                    resizeMode="cover"
                    source={RollTheDiceBackground}
                    style={styles.rollingTheDiceImage}
                  >
                    <Animated.View
                      style={[animatedStyle, styles.animatingDice1]}
                    >
                      <Image
                        resizeMode="stretch"
                        source={getFace(diceValue1)}
                        style={styles.rollingDiceFace1}
                      />
                    </Animated.View>
                    <Animated.View
                      style={[animatedStyle, styles.animatingDice2]}
                    >
                      <Image
                        resizeMode="stretch"
                        source={getFace(diceValue2)}
                        style={styles.rollingDiceFace2}
                      />
                    </Animated.View>
                  </ImageBackground>
                </View>
                <PlayButton title="View Prize" onPress={handleShowPrize} />
              </>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default RollTheDice;

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
    fontSize: 24,
    lineHeight: 24,
    marginVertical: 15,
    textAlign: "center",
    textShadowRadius: 2,
    color: theme.COLORS.WHITE,
    fontFamily: "InterRegular400",
    textShadowColor: theme.COLORS.OCHRE,
    textShadowOffset: { width: 3, height: 3 },
  },
  rollTheDiceImage: {
    width: "100%",
    height: "78%",
    borderRadius: 30,
  },
  rollingTheDiceImage: {
    flex: 1,
    borderRadius: 30,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  animatingDice1: {
    width: 70,
    height: 70,
    margin: 10,
    left: "15%",
    bottom: "18%",
    borderRadius: 10,
    position: "absolute",
    backgroundColor: theme.COLORS.ERROR_COLOR,
  },
  rollingDiceFace1: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },

  animatingDice2: {
    width: 70,
    height: 70,
    margin: 10,
    right: "15%",
    bottom: "12%",
    borderRadius: 10,
    position: "absolute",
    backgroundColor: theme.COLORS.ERROR_COLOR,
  },
  rollingDiceFace2: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
