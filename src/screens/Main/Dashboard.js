import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import Ripple from "../../components/Ripple";
import { theme } from "../../services/common/theme";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

const BackgroundImg = require("../../../assets/images/BackgroundImg1.png");
const InnerCityLogo = require("../../../assets/images/InnerCityLogo.png");
const ModalGradient = require("../../../assets/images/ModalGradient.png");

const Songs = require("../../../assets/icons/Songs.png");
const Movies = require("../../../assets/icons/Movies.png");
const Books = require("../../../assets/icons/Books.png");
const ComingSoon = require("../../../assets/icons/ComingSoon.png");
const Quotes = require("../../../assets/icons/Quotes.png");
const News = require("../../../assets/icons/News.png");

const IconButton = ({
  title = "",
  isLeft = false,
  iconStyle = {},
  icon = InnerCityLogo,
}) => {
  return (
    <Ripple onPress={() => {}} style={styles.button}>
      <View style={isLeft ? styles.iconButtonLeft : styles.iconButtonRight}>
        <Image source={icon} resizeMode="stretch" style={iconStyle} />
      </View>
      <Text style={styles.buttonText}>{title}</Text>
    </Ripple>
  );
};

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="stretch"
        source={BackgroundImg}
        style={styles.backgroundImage}
      />
      <View style={styles.innerContainer}>
        <View>
          <Image
            resizeMode="stretch"
            source={InnerCityLogo}
            style={styles.innerCityLogo}
          />
          <MaterialCommunityIcon
            size={20}
            style={styles.bellIcon}
            name="bell-ring-outline"
            color={theme.COLORS.WHITE}
          />
        </View>

        <View style={styles.modalContainer}>
          <Image
            resizeMode="stretch"
            source={ModalGradient}
            style={styles.gradientModal}
          />

          <View style={styles.modalInnerContainer}>
            <Text style={styles.headerText}>ALL YOU CAN HAVE !!</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.row}>
                <IconButton
                  isLeft
                  icon={Songs}
                  title="Songs"
                  iconStyle={styles.buttonIcon}
                />
                <View style={styles.verticalDivider} />
                <IconButton
                  icon={Movies}
                  title="Movies"
                  iconStyle={styles.buttonIcon}
                />
              </View>

              <View style={styles.horizontalDivider} />

              <View style={styles.row}>
                <IconButton
                  isLeft
                  icon={Books}
                  title="Books"
                  iconStyle={styles.buttonIcon}
                />
                <View style={styles.verticalDivider} />
                <IconButton
                  icon={ComingSoon}
                  title="Coming Soon"
                  iconStyle={styles.buttonIcon}
                />
              </View>

              <View style={styles.horizontalDivider} />

              <View style={styles.row}>
                <IconButton
                  isLeft
                  icon={Quotes}
                  title="Quotes"
                  iconStyle={styles.buttonIcon}
                />
                <View style={styles.verticalDivider} />
                <IconButton
                  icon={News}
                  title="News"
                  iconStyle={styles.newsButtonIcon}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

export const styles = StyleSheet.create({
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
  innerCityLogo: {
    width: 234,
    height: 86,
    marginTop: "15%",
    alignSelf: "center",
  },
  bellIcon: {
    right: 0,
    top: "60%",
    position: "absolute",
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: theme.COLORS.MADISON_OPACITY_71P,
  },
  modalContainer: {
    height: "67%",
    width: "100%",
    borderRadius: 25,
  },
  gradientModal: {
    height: "100%",
    width: "100%",
    borderRadius: 25,
  },
  modalInnerContainer: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 30,
    position: "absolute",
  },
  headerText: {
    fontSize: 24,
    lineHeight: 34,
    marginBottom: 10,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: "10%",
    paddingHorizontal: "7%",
    justifyContent: "center",
  },
  iconButtonLeft: {
    borderWidth: 5,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    borderColor: theme.COLORS.WHITE,
    backgroundColor: theme.COLORS.SPUN_PEARL,
    width: Dimensions.get("screen").width * 0.25,
    height: Dimensions.get("screen").width * 0.25,
  },
  iconButtonRight: {
    borderWidth: 5,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    borderColor: theme.COLORS.WHITE,
    backgroundColor: theme.COLORS.CAMEO,
    width: Dimensions.get("screen").width * 0.25,
    height: Dimensions.get("screen").width * 0.25,
  },
  buttonIcon: {
    width: "80%",
    height: "80%",
  },
  newsButtonIcon: {
    width: "50%",
    height: "50%",
  },
  horizontalDivider: {
    height: 1,
    width: "100%",
    backgroundColor: theme.COLORS.SILVER_OPACITY_47P,
  },
  verticalDivider: {
    width: 1,
    left: "49.9%",
    right: "49.9%",
    height: "100%",
    position: "absolute",
    backgroundColor: theme.COLORS.SILVER_OPACITY_47P,
  },
  buttonText: {
    fontSize: 14,
    marginTop: 8,
    lineHeight: 24,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
  },
});
