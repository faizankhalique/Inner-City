import React, { useState, useEffect } from "react";
import { theme } from "../../services/common/theme";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, StyleSheet, Image, Linking } from "react-native";
import firebase from "firebase";
import Ripple from "../../components/Ripple";
import { actions } from "../../services/state/Reducer";
import { useStateValue } from "../../services/state/State";

const Avatar = require("../../../assets/images/Avatar.png");
const BackgroundImg = require("../../../assets/images/GraffitiArt.png");
const Google = require("../../../assets/icons/Google1.png");
const Facebook = require("../../../assets/icons/Facebook1.png");

const Profile = () => {
  const [, dispatch] = useStateValue();
  const { uid } = firebase.auth()?.currentUser || {};

  const [user, setUser] = useState();

  const fetchUser = async () => {
    try {
      dispatch({ type: actions.SET_SHOW_LOADER, showLoader: true });
      await firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .onSnapshot((querySnapshot) => {
          setUser(querySnapshot.data());
          dispatch({ type: actions.SET_SHOW_LOADER, showLoader: false });
        });
    } catch (err) {
      console.log("fetchUser Error:", err);
    }
  };

  useEffect(() => {
    if (uid) {
      fetchUser();
    }
  }, [uid]);

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  const handleOpenGmailLink = async () => {
    if (gmailLink && (await Linking.canOpenURL(gmailLink))) {
      Linking.openURL(gmailLink);
    }
  };

  const handleOpenFacebookLink = async () => {
    if (facebookLink && (await Linking.canOpenURL(facebookLink))) {
      Linking.openURL(facebookLink);
    }
  };

  const {
    name = "",
    email = "",
    picture = "",
    phone_number: phoneNumber = "",
    gmail_link: gmailLink = "",
    facebook_link: facebookLink = "",
  } = user || {};

  const userProfilePicture = picture ? { uri: picture } : Avatar;

  return (
    <View style={styles.container}>
      <Image
        resizeMode="stretch"
        source={BackgroundImg}
        style={styles.backgroundImage}
      />
      <LinearGradient
        end={{ x: 0, y: 1 }}
        start={{ x: 0, y: 0.25 }}
        style={styles.gradientContainer}
        colors={[theme.COLORS.GULF_BLUE, theme.COLORS.HORIZON]}
      />
      <View style={styles.innerContainer}>
        <View style={styles.profilePicContainer}>
          <Image
            resizeMode="cover"
            style={styles.profilePic}
            source={userProfilePicture}
          />
        </View>

        <Text style={styles.name}>{name || ""}</Text>

        <View style={styles.fieldValueContainer}>
          <Text style={styles.fieldName}>Phone no:</Text>
          <Text style={styles.fieldValue}>{phoneNumber || ""}</Text>
        </View>

        <View style={styles.focusedFieldValueContainer}>
          <Text style={styles.fieldName}>Email:</Text>
          <Text style={styles.fieldValue}>{email || ""}</Text>
        </View>

        <View style={styles.linkedAccountsContainer}>
          <Text style={styles.linkedAccountsText}>Linked Accounts</Text>
          <View style={styles.socialIconButtonContainer}>
            <Ripple
              onPress={handleOpenGmailLink}
              style={styles.socialIconButton}
            >
              <Image
                source={Google}
                resizeMode="stretch"
                style={styles.socialIcon}
              />
            </Ripple>
          </View>
          <View style={styles.socialIconButtonContainer}>
            <Ripple
              style={styles.socialIconButton}
              onPress={handleOpenFacebookLink}
            >
              <Image
                source={Facebook}
                resizeMode="stretch"
                style={styles.socialIcon}
              />
            </Ripple>
          </View>
        </View>

        <View style={styles.divider} />
        <View style={styles.logoutButtonContainer}>
          <Ripple style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </Ripple>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  gradientContainer: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.9,
    position: "absolute",
  },
  innerContainer: {
    flex: 1,
    paddingTop: "30%",
    paddingHorizontal: 20,
  },
  profilePicContainer: {
    marginVertical: 10,
    alignSelf: "center",
  },
  profilePic: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },
  name: {
    fontSize: 24,
    marginTop: 15,
    lineHeight: 29,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterSemiBold600",
  },
  fieldValueContainer: {
    marginTop: 54,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  focusedFieldValueContainer: {
    marginTop: 30,
    borderRadius: 22,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.COLORS.WHITE_OPACITY_37P,
  },
  fieldName: {
    fontSize: 14,
    lineHeight: 24,
    color: theme.COLORS.WHITE,
    fontFamily: "InterMedium500",
  },
  fieldValue: {
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 20,
    color: theme.COLORS.WHITE,
    fontFamily: "InterMedium500",
  },
  linkedAccountsContainer: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  linkedAccountsText: {
    fontSize: 16,
    lineHeight: 19,
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
    marginRight: 20,
  },
  socialIconButtonContainer: {
    marginLeft: 10,
  },
  socialIconButton: {
    padding: 10,
    borderRadius: 30,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  logoutButtonContainer: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutButton: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logoutText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    fontFamily: "InterBold700",
    color: theme.COLORS.WHITE,
  },
  divider: {
    height: 1,
    width: "90%",
    marginTop: 30,
    alignSelf: "center",
    backgroundColor: theme.COLORS.SILVER_OPACITY_47P,
  },
});
