import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { theme } from "../../services/common/theme";
import Button from "../../components/Button";
import ModernTextField from "../../components/ModernTextField";
import { ScrollView } from "react-native-gesture-handler";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "firebase";
import { useStateValue } from "../../services/state/State";
import { actions } from "../../services/state/Reducer";
import {
  WEB_CLIENT_ID,
  IOS_CLIENT_ID,
  ANDROID_CLIENT_ID,
  FACEBOOK_APP_ID,
} from "@env";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";

const SignupImg1 = require("../../../assets/images/SigninImg1.png");
const InnerCityLogo = require("../../../assets/images/InnerCityLogo.png");
const GoogleIcon = require("../../../assets/icons/Google.png");
const FacebookIcon = require("../../../assets/icons/Facebook.png");

const Signin = ({ navigation }) => {
  const [, dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateUserInfo = async (user, profile) => {
    try {
      if (user) {
        const {
          name = "",
          email = "",
          picture = "",
          gmailLink = "",
          facebookLink = "",
        } = profile || {};
        await user.updateProfile({ displayName: name, photoURL: picture });
        await user.updateEmail(email);
        const users = await firebase.firestore().collection("users");
        await users.doc(user.uid).set({
          name,
          email,
          picture,
          phone_number: "",
          gmail_link: gmailLink,
          facebook_link: facebookLink,
        });
      }
    } catch (err) {
      console.log("updateUserInfo Error:", err);
    }
  };

  const handleLogin = async () => {
    dispatch({ type: actions.SET_SHOW_LOADER, showLoader: true });
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == "auth/weak-password") {
          alert("Weak Password!");
        } else {
          alert(errorMessage);
        }
      });
    dispatch({ type: actions.SET_SHOW_LOADER, showLoader: false });
  };

  const handleGoogleLogin = async () => {
    try {
      dispatch({ type: actions.SET_SHOW_LOADER, showLoader: true });
      const result = await Google.logInAsync({
        behavior: "web",
        iosClientId: IOS_CLIENT_ID,
        scopes: ["profile", "email"],
        androidClientId: ANDROID_CLIENT_ID,
        webClientId: WEB_CLIENT_ID,
      });
      if (result.type === "success") {
        const credential = firebase.auth.GoogleAuthProvider.credential(
          result.idToken,
          result.accessToken
        );
        const gpRes = await firebase.auth().signInWithCredential(credential);
        if (
          gpRes &&
          gpRes.additionalUserInfo &&
          gpRes.additionalUserInfo.isNewUser &&
          gpRes.additionalUserInfo.profile
        ) {
          const {
            name = "",
            email = "",
            picture = "",
          } = gpRes.additionalUserInfo.profile;
          await updateUserInfo(gpRes.user, {
            name,
            email,
            picture,
            gmailLink: "",
            facebookLink: "",
          });
        }
      }
      dispatch({ type: actions.SET_SHOW_LOADER, showLoader: false });
    } catch ({ message }) {
      console.log("handleGoogleLogin Error:" + message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await Facebook.initializeAsync({ appId: FACEBOOK_APP_ID });
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      if (type === "success") {
        await firebase
          .auth()
          .setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        const fbRes = await firebase.auth().signInWithCredential(credential);
        if (
          fbRes &&
          fbRes.additionalUserInfo &&
          fbRes.additionalUserInfo.isNewUser &&
          fbRes.additionalUserInfo.profile
        ) {
          const {
            name = "",
            email = "",
            picture = {},
            link = "",
          } = fbRes.additionalUserInfo.profile;
          const { data = {} } = picture || {};
          const { url: pictureUrl = "" } = data || {};
          await updateUserInfo(fbRes.user, {
            name,
            email,
            picture: pictureUrl,
            gmailLink: "",
            facebookLink: link,
          });
        }
      }
      dispatch({ type: actions.SET_SHOW_LOADER, showLoader: false });
    } catch ({ message }) {
      console.log(`handleFacebookLogin Error: ${message}`);
    }
  };

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
            onPress={handleLogin}
            color={theme.COLORS.TANGO}
            buttonStyle={styles.loginButton}
            textStyle={styles.loginButtonText}
          />
          <Text style={styles.connectWithText}>or connect with</Text>
          <View style={styles.socialLogins}>
            <Button
              height={40}
              onPress={handleGoogleLogin}
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
              onPress={handleFacebookLogin}
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
