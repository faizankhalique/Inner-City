import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { theme } from "../services/common/theme";
import Button from "../components/Button";
import SimpleTextField from "../components/SimpleTextField";
import { LinearGradient } from "expo-linear-gradient";

const UpdatePasswordImg1 = require("../../assets/images/UpdatePasswordImg1.png");
const UpdatePasswordImg2 = require("../../assets/images/UpdatePasswordImg2.png");
const InnerCityLogo = require("../../assets/images/InnerCityLogo.png");

const UpdatePassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        source={UpdatePasswordImg1}
        style={styles.updatePasswordImg1}
      />
      <Image
        resizeMode="stretch"
        source={UpdatePasswordImg2}
        style={styles.updatePasswordImg2}
      />
      <Image
        resizeMode="stretch"
        source={InnerCityLogo}
        style={styles.innerCityLogo}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.passwordResetText}>Password Reset</Text>
        <Text style={styles.dontWorryText}>Please enter your new password</Text>
        <View style={styles.fieldContainer}>
          <SimpleTextField
            secureTextEntry
            value={password}
            label="Enter new password"
            placeholder="Enter new Password"
            onChangeText={(val) => setPassword(val)}
          />
          <SimpleTextField
            secureTextEntry
            value={password}
            label="Confirm Password"
            placeholder="Confirm new Password"
            onChangeText={(val) => setPassword(val)}
          />
        </View>
        <Button
          height={40}
          title="Update Password"
          color={theme.COLORS.TANGO}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          onPress={() => navigation.navigate("PasswordUpdated")}
        />
      </View>
    </View>
  );
};

export default UpdatePassword;

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
  updatePasswordImg1: {
    left: 0,
    right: 0,
    bottom: 0,
    top: "20%",
    opacity: 0.3,
    width: "100%",
    height: "80%",
    position: "absolute",
  },
  updatePasswordImg2: {
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
  passwordResetText: {
    fontSize: 24,
    lineHeight: 24,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
  },
  dontWorryText: {
    fontSize: 16,
    marginTop: 8,
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
