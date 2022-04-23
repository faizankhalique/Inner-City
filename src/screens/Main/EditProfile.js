import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import { theme } from "../../services/common/theme";
import { LinearGradient } from "expo-linear-gradient";
import SimpleTextField from "../../components/SimpleTextField";
import {
  View,
  Image,
  Alert,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import firebase from "firebase";
import * as ImagePicker from "expo-image-picker";
import FeatherIcon from "react-native-vector-icons/Feather";
import Ripple from "../../components/Ripple";
import { actions } from "../../services/state/Reducer";
import { useStateValue } from "../../services/state/State";

const Avatar = require("../../../assets/images/Avatar.png");
const BackgroundImg = require("../../../assets/images/GraffitiArt.png");
const Google = require("../../../assets/icons/Google1.png");
const Facebook = require("../../../assets/icons/Facebook1.png");

const EditProfile = ({ navigation }) => {
  const [, dispatch] = useStateValue();
  const user = firebase.auth()?.currentUser || {};
  const { uid } = user || {};

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gmailLink, setGmailLink] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const fetchUser = async () => {
    try {
      dispatch({ type: actions.SET_SHOW_LOADER, showLoader: true });
      await firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .onSnapshot((querySnapshot) => {
          const userInfo = querySnapshot.data();
          const {
            name = "",
            email = "",
            picture = "",
            phone_number: phoneNumber = "",
            gmail_link: gmailLink = "",
            facebook_link: facebookLink = "",
          } = userInfo || {};
          const fullname = name.split(" ");
          setFirstName((fullname && fullname.length > 0 && fullname[0]) || "");
          setLastName((fullname && fullname.length > 1 && fullname[1]) || "");
          setEmail(email);
          setPhoneNumber(phoneNumber);
          setProfilePicture(picture);
          setGmailLink(gmailLink);
          setFacebookLink(facebookLink);
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

  const handleUpdateProfile = async () => {
    try {
      dispatch({ type: actions.SET_SHOW_LOADER, showLoader: true });
      let userProfilePicture = "";
      if (profilePicture && profilePicture.includes("file:/")) {
        const response = await fetch(profilePicture);
        const blob = await response.blob();
        userProfilePicture = await firebase
          .storage()
          .ref("users/" + uid)
          .put(blob)
          .then(function (snapshot) {
            return snapshot.ref.getDownloadURL();
          })
          .then((url) => url);
      } else {
        userProfilePicture = profilePicture;
      }

      await user.updateProfile({
        displayName: `${firstName} ${lastName}`,
        photoURL: userProfilePicture,
      });
      await user.updateEmail(email);
      const users = await firebase.firestore().collection("users");
      await users.doc(uid).set({
        name: `${firstName} ${lastName}`,
        email,
        picture: userProfilePicture,
        phone_number: phoneNumber,
        gmail_link: gmailLink,
        facebook_link: facebookLink,
      });
      dispatch({ type: actions.SET_SHOW_LOADER, showLoader: false });
    } catch ({ message }) {
      console.log("handleUpdateProfileErr:", message);
    }
  };

  const launchCamera = async () => {
    try {
      const launchCameraRes = await ImagePicker.launchCameraAsync({
        quality: 0.5,
      });
      if (launchCameraRes && launchCameraRes.uri) {
        setProfilePicture(launchCameraRes.uri);
      } else {
        setProfilePicture("");
      }
    } catch (err) {
      console.log("launchCameraErr: ", err);
    }
  };

  const launchImageLibrary = async () => {
    try {
      const launchImageLibraryRes = await ImagePicker.launchImageLibraryAsync({
        quality: 0.5,
      });
      if (launchImageLibraryRes && launchImageLibraryRes.uri) {
        setProfilePicture(launchImageLibraryRes.uri);
      } else {
        setProfilePicture("");
      }
    } catch (err) {
      console.log("launchImageLibraryErr: ", err);
    }
  };

  const handleBrowseProfilePic = () => {
    Alert.alert("Browse Profile Picture", "", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Camera",
        onPress: launchCamera,
      },
      { text: "Gallery", onPress: launchImageLibrary },
    ]);
  };

  const userProfilePicture = profilePicture ? { uri: profilePicture } : Avatar;

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
          <View style={styles.profilePicEditContainer}>
            <Ripple
              style={styles.profilePicEditButton}
              onPress={handleBrowseProfilePic}
            >
              <FeatherIcon name="edit" size={25} color={theme.COLORS.WHITE} />
            </Ripple>
          </View>
        </View>

        <ScrollView
          style={styles.fieldsContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.fieldsContentContainer}
        >
          <SimpleTextField
            value={firstName}
            label="First Name"
            placeholder="James"
            onChangeText={(val) => setFirstName(val)}
          />

          <SimpleTextField
            value={lastName}
            label="Last Name"
            placeholder="Harward"
            onChangeText={(val) => setLastName(val)}
          />

          <SimpleTextField
            value={phoneNumber}
            label="Phone Number"
            placeholder="+1 8246 368"
            onChangeText={(val) => setPhoneNumber(val)}
          />

          <SimpleTextField
            value={email}
            label="Email"
            editable={false}
            placeholder="james@gmail.com"
            onChangeText={(val) => setEmail(val)}
          />

          <View style={styles.divider} />

          <SimpleTextField
            value={gmailLink}
            label="Gmail Link"
            placeholder="www.gmail.com"
            onChangeText={(val) => setGmailLink(val)}
          />

          <SimpleTextField
            value={facebookLink}
            label="Facebook Link"
            placeholder="www.facebook.com"
            onChangeText={(val) => setFacebookLink(val)}
          />
        </ScrollView>

        <View style={styles.buttonsContainer}>
          <Button
            height={40}
            title="Save"
            onPress={handleUpdateProfile}
            color={theme.COLORS.TANGO}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
          />

          <Button
            height={40}
            title="Cancel"
            onPress={() => navigation.goBack()}
            color={theme.COLORS.TANGO}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
          />
        </View>
      </View>
    </View>
  );
};

export default EditProfile;

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
  profilePicEditContainer: {
    right: "2.5%",
    bottom: "2.5%",
    position: "absolute",
  },
  profilePicEditButton: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: theme.COLORS.GULF_BLUE,
  },
  fieldsContainer: {
    height: Dimensions.get("screen").height * 0.55,
  },
  fieldsContentContainer: {
    paddingBottom: "5%",
  },
  buttonsContainer: {
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 15,
    marginHorizontal: 5,
    width: Dimensions.get("screen").width * 0.3,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterMedium500",
  },
  divider: {
    height: 1,
    width: "98%",
    marginTop: 15,
    marginBottom: 10,
    alignSelf: "center",
    backgroundColor: theme.COLORS.SILVER_OPACITY_47P,
  },
});
