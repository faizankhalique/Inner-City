import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { theme } from "../services/common/theme";
import Button from "../components/Button";
import ModernTextField from "../components/ModernTextField";
import { ScrollView } from "react-native-gesture-handler";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";

const SignupImg1 = require("../../assets/images/SigninImg1.png");
const InnerCityLogo = require("../../assets/images/InnerCityLogo.png");
const GoogleIcon = require("../../assets/icons/Google.png");
const FacebookIcon = require("../../assets/icons/Facebook.png");

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={SignupImg1}
        resizeMode="stretch"
        style={styles.signupImg1}
      />
      <Image
        resizeMode="stretch"
        source={InnerCityLogo}
        style={styles.innerCityLogo}
      />

      <LinearGradient
        style={styles.gradientContainer}
        colors={[theme.COLORS.BISCAY, theme.COLORS.BLACK_PEARL]}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <ModernTextField
            value={email}
            label="Email"
            placeholder="Your Email"
            onChangeText={(val) => setEmail(val)}
            icon={
              <IonIcon
                size={18}
                name="person-outline"
                color={theme.COLORS.WHITE}
              />
            }
          />
          <ModernTextField
            secureTextEntry
            value={password}
            label="Password"
            placeholder="Password"
            onChangeText={(val) => setPassword(val)}
            icon={
              <MaterialIcon
                size={18}
                name="lock-outline"
                color={theme.COLORS.WHITE}
              />
            }
          />
          <Text
            style={styles.forgotPasswordText}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            Forgot your password?
          </Text>
          <Button
            height={40}
            title="Login"
            onPress={() => {}}
            color={theme.COLORS.TANGO}
            buttonStyle={styles.loginButton}
            textStyle={styles.loginButtonText}
          />
          <Text style={styles.connectWithText}>or connect with</Text>
          <View style={styles.socialLogins}>
            <Button
              height={40}
              onPress={() => {}}
              title="Google"
              color={theme.COLORS.WHITE}
              buttonStyle={styles.socialLoginButton}
              textStyle={styles.socialLoginButtonText}
              icon={
                <Image
                  resizeMode="stretch"
                  source={GoogleIcon}
                  style={styles.socialLoginButtonIcon}
                />
              }
            />
            <Button
              height={40}
              onPress={() => {}}
              title="Facebook"
              color={theme.COLORS.WHITE}
              buttonStyle={styles.socialLoginButton}
              textStyle={styles.socialLoginButtonText}
              icon={
                <Image
                  resizeMode="stretch"
                  source={FacebookIcon}
                  style={styles.socialLoginButtonIcon}
                />
              }
            />
          </View>
          <Text style={styles.dontAccountText}>
            {`Don’t have account? `}
            <Text
              style={styles.signupText}
              onPress={() => navigation.navigate("Signup")}
            >
              Sign up
            </Text>
          </Text>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Signin;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signupImg1: {
    left: 0,
    top: 40,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "50%",
    position: "absolute",
  },
  innerCityLogo: {
    zIndex: 1,
    top: "27%",
    width: 264,
    height: 97,
    alignSelf: "center",
    position: "absolute",
  },
  gradientContainer: {
    flex: 1,
    opacity: 0.9,
    paddingTop: 38,
    marginTop: "70%",
    borderRadius: 31,
    marginBottom: -20,
    paddingHorizontal: 38,
  },
  contentContainer: {
    paddingBottom: "30%",
  },
  forgotPasswordText: {
    fontSize: 12,
    marginTop: 10,
    lineHeight: 13,
    textAlign: "right",
    color: theme.COLORS.WHITE,
    fontFamily: "InterRegular400",
  },
  loginButton: {
    borderRadius: 15,
    marginVertical: 33,
  },
  loginButtonText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterMedium500",
  },
  connectWithText: {
    fontSize: 12,
    lineHeight: 15,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterRegular400",
  },
  socialLogins: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  socialLoginButton: {
    borderRadius: 15,
    marginVertical: 25,
    width: Dimensions.get("screen").width * 0.37,
  },
  socialLoginButtonIcon: {
    width: 22,
    height: 22,
  },
  socialLoginButtonText: {
    fontSize: 14,
    lineHeight: 17,
    paddingLeft: 20,
    textAlign: "center",
    color: theme.COLORS.BLACK,
    fontFamily: "InterMedium500",
  },
  dontAccountText: {
    fontSize: 16,
    lineHeight: 28,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterMedium500",
  },
  signupText: {
    color: theme.COLORS.TANGO,
    fontFamily: "InterBold700",
    textDecorationLine: "underline",
  },
});
