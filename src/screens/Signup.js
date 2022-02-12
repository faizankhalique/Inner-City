import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { theme } from "../services/common/theme";
import Button from "../components/Button";
const SignupImg1 = require("../../assets/SignupImg1.png");
const SignupImg2 = require("../../assets/SignupImg2.png");
const SignupImg3 = require("../../assets/SignupImg3.png");
const InnerCityLogo = require("../../assets/InnerCityLogo.png");

const Signup = () => {
  return (
    <View style={styles.container}>
      <Image
        source={SignupImg1}
        resizeMode="stretch"
        style={styles.signupImg1}
      />
      <Image
        source={SignupImg2}
        resizeMode="stretch"
        style={styles.signupImg2}
      />
      <Image
        source={SignupImg3}
        resizeMode="stretch"
        style={styles.signupImg3}
      />
      <Image
        source={InnerCityLogo}
        resizeMode="stretch"
        style={styles.innerCityLogo}
      />

      <Text style={styles.welcomeText}>Welcome!</Text>

      <Text style={styles.signupText}>
        Sign up to join
        <Text style={styles.innerCityText}> INNER CITY</Text>
      </Text>
    </View>
  );
};

export default Signup;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signupImg1: {
    left: 0,
    right: 0,
    bottom: 0,
    top: "15%",
    width: "95%",
    height: "82%",
    position: "absolute",
  },
  signupImg2: {
    left: 0,
    right: 0,
    bottom: 0,
    top: "15%",
    height: "90%",
    width: "100%",
    position: "absolute",
  },
  signupImg3: {
    bottom: 0,
    right: 0,
    top: "20%",
    height: "75%",
    width: "90%",
    position: "absolute",
  },
  innerCityLogo: {
    width: 234,
    height: 86,
    marginTop: 40,
    alignSelf: "center",
  },
  welcomeText: {
    fontSize: 24,
    marginTop: 11,
    lineHeight: 24,
    textAlign: "center",
    // fontFamily: "Moon-Bold",
    color: theme.COLORS.WHITE,
  },
  signupText: {
    marginTop: 11,
    fontSize: 16,
    lineHeight: 28,
    textAlign: "center",
    // fontFamily: "Moon-Bold",
    color: theme.COLORS.WHITE,
  },
  innerCityText: {
    fontWeight: "bold",
    color: theme.COLORS.TANGO,
  },

  welcomeImage: {
    width: "100%",
    height: "50%",
  },
  bottomContainer: {
    paddingTop: 3,
    paddingHorizontal: 31,
  },

  welcomeSubText: {
    fontSize: 16,
    marginTop: 16,
    lineHeight: 24,
    // fontFamily: "Moon-Bold",
    color: theme.COLORS.WHITE,
  },
  buttonsContainer: {
    marginVertical: 26,
  },
  button: {
    // margin: 10,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    // fontFamily: "Moon-Bold",
    // textTransform: "uppercase",
    color: theme.COLORS.WHITE,
  },
  buttonIcon: {
    height: 24,
    width: 23,
  },
  agreeText: {
    fontSize: 14, //14
    // marginTop: 16,
    lineHeight: 24,
    // fontFamily: "Moon-Bold",
    color: theme.COLORS.WHITE,
  },
  termsNConditionsText: {
    fontSize: 14, //14
    lineHeight: 24,
    fontWeight: "bold",
    color: theme.COLORS.WHITE,
    // fontFamily: "Moon-Bold",
  },
});
