import React from "react";
import Button from "../../components/Button";
import { theme } from "../../services/common/theme";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";

const ResetPasswordEmailSentImg1 = require("../../../assets/images/ResetPasswordEmailSentImg1.png");
const ResetPasswordEmailSentImg2 = require("../../../assets/images/ResetPasswordEmailSentImg2.png");
const InnerCityLogo = require("../../../assets/images/InnerCityLogo.png");
const ResetPasswordEmailSentGradient = require("../../../assets/images/ResetPasswordEmailSentGradient.png");

const ResetPasswordEmailSent = ({ navigation, route }) => {
  // navigation.navigate("UpdatePassword")

  const { params = {} } = route || {};
  const { email = "" } = params || {};

  const handleBackToLogin = () => {
    navigation.goBack();
    navigation.goBack();
  };

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
        source={ResetPasswordEmailSentImg1}
        style={styles.resetPasswordEmailSentImg1}
      />
      <Image
        resizeMode="stretch"
        source={ResetPasswordEmailSentImg2}
        style={styles.resetPasswordEmailSentImg2}
      />
      <View style={styles.innerContainer}>
        <Image
          resizeMode="stretch"
          source={InnerCityLogo}
          style={styles.innerCityLogo}
        />
        <View>
          <Image
            resizeMode="stretch"
            style={styles.gradientModal}
            source={ResetPasswordEmailSentGradient}
          />
          <View style={styles.gradientModelContainer}>
            <Text style={styles.checkEmailText}>Check Your Email</Text>
            <Text style={styles.emailedYouText}>
              {`We have emailed you password\nreset link at\n`}
              <Text style={styles.email}>{email || ""}</Text>
            </Text>
            <Button
              height={40}
              title="Back to login"
              onPress={handleBackToLogin}
              color={theme.COLORS.TANGO}
              buttonStyle={styles.button}
              textStyle={styles.buttonText}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ResetPasswordEmailSent;

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
  resetPasswordEmailSentImg1: {
    left: 0,
    right: 0,
    bottom: 0,
    top: "10%",
    opacity: 0.3,
    width: "100%",
    height: "80%",
    position: "absolute",
  },
  resetPasswordEmailSentImg2: {
    left: 0,
    right: 0,
    bottom: 0,
    top: "15%",
    opacity: 0.3,
    width: "100%",
    height: "75%",
    position: "absolute",
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 43,
    justifyContent: "center",
  },
  innerCityLogo: {
    width: 234,
    height: 86,
    alignSelf: "center",
  },
  gradientModal: {
    borderRadius: 25,
    width: Dimensions.get("window").width * 0.85,
    height: Dimensions.get("window").height * 0.4,
  },
  gradientModelContainer: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
  },
  checkEmailText: {
    fontSize: 24,
    lineHeight: 66,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
  },
  emailedYouText: {
    fontSize: 16,
    marginTop: 33,
    lineHeight: 28,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterRegular400",
  },
  email: {
    fontFamily: "InterBold700",
  },
  button: {
    marginTop: 20,
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
