import React, { useState } from "react";
import Button from "../../components/Button";
import { theme } from "../../services/common/theme";
import { LinearGradient } from "expo-linear-gradient";
import SimpleTextField from "../../components/SimpleTextField";
import { View, StyleSheet, Image, Dimensions, ScrollView } from "react-native";

const Avatar = require("../../../assets/images/Avatar.png");
const BackgroundImg = require("../../../assets/images/GraffitiArt.png");
const Google = require("../../../assets/icons/Google1.png");
const Facebook = require("../../../assets/icons/Facebook1.png");

const EditProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gmailLink, setGmailLink] = useState("");
  const [facebookLink, setFacebookLink] = useState("");

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
        <Image source={Avatar} resizeMode="stretch" style={styles.avatar} />

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
            onPress={() => {}}
            color={theme.COLORS.TANGO}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
          />

          <Button
            height={40}
            title="Cancel"
            onPress={() => {}}
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
  avatar: {
    width: 180,
    height: 180,
    alignSelf: "center",
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
