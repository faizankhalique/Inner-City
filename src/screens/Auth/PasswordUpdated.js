import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { theme } from "../../services/common/theme";
import Button from "../../components/Button";
import { LinearGradient } from "expo-linear-gradient";

const GraffitiArt = require("../../../assets/images/GraffitiArt.png");

const PasswordUpdated = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradientContainer}
        start={{ x: 0, y: 0.25 }}
        end={{ x: 0, y: 1 }}
        colors={[theme.COLORS.GULF_BLUE, theme.COLORS.HORIZON]}
      />
      <Image
        resizeMode="stretch"
        source={GraffitiArt}
        style={styles.graffitiArt}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.passwordUpdatedText}>
          {`Your Password\nhas been updated`}
        </Text>
        <Button
          height={40}
          title="Get Started"
          color={theme.COLORS.TANGO}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          onPress={() =>
            navigation.reset({
              routes: [{ name: "Home" }],
            })
          }
        />
      </View>
    </View>
  );
};

export default PasswordUpdated;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientContainer: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
  },
  graffitiArt: {
    left: 0,
    right: 0,
    top: "8%",
    opacity: 0.3,
    width: "100%",
    height: "80%",
    position: "absolute",
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  passwordUpdatedText: {
    fontSize: 36,
    lineHeight: 46,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterRegular400",
  },
  button: {
    width: "65%",
    marginTop: 40,
    borderRadius: 15,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterMedium500",
  },
});
