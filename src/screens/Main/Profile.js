import React from "react";
import { theme } from "../../services/common/theme";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, StyleSheet, Image } from "react-native";

const Avatar = require("../../../assets/images/Avatar.png");
const BackgroundImg = require("../../../assets/images/GraffitiArt.png");
const Google = require("../../../assets/icons/Google1.png");
const Facebook = require("../../../assets/icons/Facebook1.png");

const Profile = () => {
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

        <Text style={styles.name}>James Robert</Text>

        <View style={styles.fieldValueContainer}>
          <Text style={styles.fieldName}>Phone no:</Text>
          <Text style={styles.fieldValue}>+1 11 222 3333</Text>
        </View>

        <View style={styles.focusedFieldValueContainer}>
          <Text style={styles.fieldName}>Email:</Text>
          <Text style={styles.fieldValue}>Jamesrobert@gmail.com</Text>
        </View>

        <View style={styles.linkedAccountsContainer}>
          <Text style={styles.linkedAccountsText}>Linked Accounts</Text>
          <Image
            source={Google}
            resizeMode="stretch"
            style={styles.socialIcon}
          />
          <Image
            source={Facebook}
            resizeMode="stretch"
            style={styles.socialIcon}
          />
        </View>

        <View style={styles.divider} />
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
  avatar: {
    width: 180,
    height: 180,
    alignSelf: "center",
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
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginLeft: 20,
  },
  divider: {
    height: 1,
    width: "90%",
    marginTop: 30,
    alignSelf: "center",
    backgroundColor: theme.COLORS.SILVER_OPACITY_47P,
  },
});
