import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { theme } from "../services/common/theme";
import Button from "../components/Button";
const WelcomeImage = require("../../assets/images/Welcome.png");
const GoogleIcon = require("../../assets/icons/Google.png");
const FacebookIcon = require("../../assets/icons/Facebook.png");

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="stretch"
        source={WelcomeImage}
        style={styles.welcomeImage}
      />
      <View style={styles.bottomContainer}>
        <Text style={styles.welcomeText}>Welcome to Inner City</Text>
        <Text style={styles.welcomeSubText}>
          We are here to listen to you, Come & Win new Prizes on every game
        </Text>

        <View style={styles.buttonsContainer}>
          <Button
            height={50}
            onPress={() => {}}
            title="Continue with Google"
            color={theme.COLORS.WHITE}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
            icon={
              <Image
                resizeMode="stretch"
                source={GoogleIcon}
                style={styles.buttonIcon}
              />
            }
          />
          <Button
            height={50}
            onPress={() => {}}
            title="Continue with Facebook"
            color={theme.COLORS.WHITE}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
            icon={
              <Image
                resizeMode="stretch"
                source={FacebookIcon}
                style={styles.buttonIcon}
              />
            }
          />
        </View>

        <Text style={styles.agreeText}>
          By continuing, you agree to the inner city
          <Text style={styles.termsNConditionsText}> Terms & Conditions</Text>
        </Text>
      </View>
    </View>
  );
};

export default Welcome;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeImage: {
    width: "100%",
    height: "50%",
  },
  bottomContainer: {
    paddingTop: 3,
    paddingHorizontal: 28,
  },
  welcomeText: {
    fontSize: 40,
    lineHeight: 48,
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
  },
  welcomeSubText: {
    fontSize: 16,
    marginTop: 16,
    lineHeight: 24,
    color: theme.COLORS.WHITE,
    fontFamily: "InterMedium500",
  },
  buttonsContainer: {
    marginVertical: 26,
  },
  button: {
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: "center",
    color: theme.COLORS.BLACK,
    fontFamily: "InterBold700",
  },
  buttonIcon: {
    width: 23,
    height: 24,
  },
  agreeText: {
    fontSize: 14,
    lineHeight: 24,
    color: theme.COLORS.WHITE,
    fontFamily: "InterRegular400",
  },
  termsNConditionsText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
    color: theme.COLORS.WHITE,
    fontFamily: "InterMedium500",
  },
});
