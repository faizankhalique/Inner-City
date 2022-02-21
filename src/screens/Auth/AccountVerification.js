import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { theme } from "../../services/common/theme";
import Button from "../../components/Button";
import { LinearGradient } from "expo-linear-gradient";

const GraffitiArt = require("../../../assets/images/GraffitiArt.png");

const AccountVerification = () => {
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
        <Text style={styles.verificationTitle}>Verification</Text>
        <Text style={styles.verificationText}>
          {`Please open the verification link that we sent to `}
          <Text style={styles.verificationSubText}>jhondoe@gmail.com</Text>
          {` in order to activate your account.`}
        </Text>
        <Button
          height={40}
          onPress={() => {}}
          title="Resend Link"
          color={theme.COLORS.TANGO}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};

export default AccountVerification;

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
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  verificationTitle: {
    fontSize: 24,
    lineHeight: 66,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
  },
  verificationText: {
    fontSize: 16,
    lineHeight: 28,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterRegular400",
  },
  verificationSubText: {
    fontSize: 16,
    lineHeight: 28,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
  },
  button: {
    width: "70%",
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
