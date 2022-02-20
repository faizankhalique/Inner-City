import React from "react";
import Ripple from "./Ripple";
import { Image, View, StyleSheet, ImageBackground } from "react-native";

const GameTabButton = require("../../assets/icons/GameTabButton.png");
const HomeTabButton = require("../../assets/icons/HomeTabButton.png");
const ProfileTabButton = require("../../assets/icons/ProfileTabButton.png");
const BottomTabGradient = require("../../assets/images/BottomTabGradient.png");

const styles = StyleSheet.create({
  container: {
    bottom: 1,
    height: 111,
    width: "100%",
    position: "absolute",
  },
  background: {
    left: 0,
    right: 0,
    bottom: 0,
    top: "42%",
    position: "absolute",
  },
  tabsContainer: {
    left: 0,
    right: 0,
    bottom: "10%",
    flexDirection: "row",
    position: "absolute",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
  },
  tab: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  activeTab: {
    width: 94,
    height: 94,
    borderRadius: 60,
  },
});

function BottomTabBar({ navigation, state }) {
  const { index: activeTab = 0 } = state || {};

  const getTabIcon = (activeTab, isActive) => {
    switch (activeTab) {
      case 0:
        return (
          <Ripple
            disabled={isActive}
            onPress={() => navigation.navigate("Dashboard")}
            style={{ paddingBottom: isActive ? 10 : 0, borderRadius: 60 }}
          >
            <Image
              resizeMode="stretch"
              source={HomeTabButton}
              style={isActive ? styles.activeTab : styles.tab}
            />
          </Ripple>
        );
      case 1:
        return (
          <Ripple
            disabled={isActive}
            onPress={() => navigation.navigate("Profile")}
            style={{ paddingBottom: isActive ? 10 : 0, borderRadius: 60 }}
          >
            <Image
              resizeMode="stretch"
              source={ProfileTabButton}
              style={isActive ? styles.activeTab : styles.tab}
            />
          </Ripple>
        );
      case 2:
        return (
          <Ripple
            disabled={isActive}
            onPress={() => navigation.navigate("Games")}
            style={{ paddingBottom: isActive ? 10 : 0, borderRadius: 60 }}
          >
            <Image
              resizeMode="stretch"
              source={GameTabButton}
              style={isActive ? styles.activeTab : styles.tab}
            />
          </Ripple>
        );
    }
  };

  const getTabs = () => {
    switch (activeTab) {
      case 0:
        return (
          <>
            {getTabIcon(1, false)}
            {getTabIcon(0, true)}
            {getTabIcon(2, false)}
          </>
        );
      case 1:
        return (
          <>
            {getTabIcon(2, false)}
            {getTabIcon(1, true)}
            {getTabIcon(0, false)}
          </>
        );

      case 2:
        return (
          <>
            {getTabIcon(1, false)}
            {getTabIcon(2, true)}
            {getTabIcon(0, false)}
          </>
        );
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.background}
        source={BottomTabGradient}
      />
      <View style={styles.tabsContainer}>{getTabs()}</View>
    </View>
  );
}

export default BottomTabBar;
