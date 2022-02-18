import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { theme } from "../services/common/theme";
import Button from "../components/Button";
import SimpleTextField from "../components/SimpleTextField";
import { LinearGradient } from "expo-linear-gradient";

const ForgotPasswordImg1 = require("../../assets/images/ForgotPasswordImg1.png");
const ForgotPasswordImg2 = require("../../assets/images/ForgotPasswordImg2.png");
const InnerCityLogo = require("../../assets/images/InnerCityLogo.png");

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

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
        source={ForgotPasswordImg1}
        style={styles.forgotPasswordImg1}
      />
      <Image
        resizeMode="stretch"
        source={ForgotPasswordImg2}
        style={styles.forgotPasswordImg2}
      />
      <Image
        resizeMode="stretch"
        source={InnerCityLogo}
        style={styles.innerCityLogo}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.forgotPasswordText}>Forgot Your Password?</Text>
        <Text style={styles.dontWorryText}>
          {`Don’t Worry!\nJust fill in your email and we’ll send you a link to reset your Password.`}
        </Text>
        <View style={styles.fieldContainer}>
          <SimpleTextField
            value={email}
            label="Email"
            placeholder="Your Email"
            onChangeText={(val) => setEmail(val)}
          />
        </View>
        <Button
          height={40}
          title="Confirm"
          color={theme.COLORS.TANGO}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          onPress={() => navigation.navigate("ResetPasswordEmailSent")}
        />
      </View>
    </View>
  );
};

export default ForgotPassword;

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
  forgotPasswordImg1: {
    left: 0,
    right: 0,
    bottom: 0,
    top: "20%",
    opacity: 0.3,
    width: "100%",
    height: "80%",
    position: "absolute",
  },
  forgotPasswordImg2: {
    left: 0,
    right: 0,
    bottom: 0,
    top: "25%",
    opacity: 0.3,
    width: "100%",
    height: "75%",
    position: "absolute",
  },
  innerCityLogo: {
    top: "9%",
    width: 234,
    height: 86,
    alignSelf: "center",
    position: "absolute",
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 43,
    justifyContent: "center",
  },
  forgotPasswordText: {
    fontSize: 24,
    lineHeight: 24,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
  },
  dontWorryText: {
    fontSize: 16,
    marginTop: 28,
    lineHeight: 28,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterRegular400",
  },
  fieldContainer: {
    marginVertical: 30,
  },
  button: {
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterMedium500",
  },
});
