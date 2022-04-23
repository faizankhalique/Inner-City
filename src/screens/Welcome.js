import React from "react";
import Button from "../components/Button";
import { theme } from "../services/common/theme";
import { actions } from "../services/state/Reducer";
import { useStateValue } from "../services/state/State";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import firebase from "firebase";
import {
  WEB_CLIENT_ID,
  IOS_CLIENT_ID,
  ANDROID_CLIENT_ID,
  FACEBOOK_APP_ID,
} from "@env";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";

const GoogleIcon = require("../../assets/icons/Google.png");
const WelcomeImage = require("../../assets/images/Welcome.png");
const FacebookIcon = require("../../assets/icons/Facebook.png");

const Welcome = () => {
  const [, dispatch] = useStateValue();

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
          updateUserInfo(gpRes.user, {
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
      console.log(`handleGoogleLogin Error: ${message}`);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      dispatch({ type: actions.SET_SHOW_LOADER, showLoader: true });
      await Facebook.initializeAsync({ appId: FACEBOOK_APP_ID });
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email", "user_link"],
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
          updateUserInfo(fbRes.user, {
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
        resizeMode="stretch"
        source={WelcomeImage}
        style={styles.welcomeImage}
      />
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Welcome to Inner City</Text>
        <Text style={styles.welcomeSubText}>
          We are here to listen to you, Come & Win new Prizes on every game
        </Text>
        <View style={styles.buttonsContainer}>
          <Button
            height={50}
            onPress={handleGoogleLogin}
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
            onPress={handleFacebookLogin}
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
      </ScrollView>
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
  contentContainer: {
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
