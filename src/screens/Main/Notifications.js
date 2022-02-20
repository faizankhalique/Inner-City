import React from "react";
import Ripple from "../../components/Ripple";
import { theme } from "../../services/common/theme";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";

import Notification1 from "../../../assets/icons/Notification1.png";
import Notification2 from "../../../assets/icons/Notification2.png";
import Notification3 from "../../../assets/icons/Notification3.png";

const BackgroundImg = require("../../../assets/images/GraffitiArt.png");

const notifications = [
  { text: "Lorem ipsum dolor sit amet, consectetur", icon: Notification1 },
  {
    text: "Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur",
    icon: Notification2,
  },
  {
    text: "Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur",
    icon: Notification1,
  },
  { text: "Lorem ipsum dolor sit amet, consectetur", icon: Notification3 },
  {
    text: "Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur",
    icon: Notification1,
  },
  {
    text: "Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur",
    icon: Notification1,
  },
];

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="stretch"
        source={BackgroundImg}
        style={styles.backgroundImage}
      />
      <LinearGradient
        style={styles.gradientContainer}
        start={{ x: 0, y: 0.25 }}
        end={{ x: 0, y: 1 }}
        colors={[theme.COLORS.GULF_BLUE, theme.COLORS.HORIZON]}
      />
      <View style={styles.innerContainer}>
        <FlatList
          data={notifications}
          keyExtractor={(_, index) => index}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <>
              <Ripple disabled onPress={() => {}} style={styles.listItem}>
                <View style={styles.listItemLeftContainer}>
                  <View style={styles.iconContainer}>
                    <Image
                      source={item.icon}
                      style={styles.icon}
                      resizeMode="stretch"
                    />
                  </View>
                </View>
                <View style={styles.listItemRightContainer}>
                  <Text style={styles.notificationText}>{item.text}</Text>
                </View>
              </Ripple>
              <View style={styles.listItemDivider} />
            </>
          )}
        />
      </View>
    </View>
  );
};

export default Notifications;

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
  listItem: {
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 19,
  },
  listItemLeftContainer: {
    width: "18%",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: theme.COLORS.WHITE,
    backgroundColor: theme.COLORS.WHITE,
    shadowOffset: { width: 0, height: 4 },
  },
  icon: {
    width: 23,
    height: 23,
  },
  listItemRightContainer: {
    width: "82%",
  },
  notificationText: {
    fontSize: 12,
    lineHeight: 14,
    color: theme.COLORS.WHITE,
    fontFamily: "InterRegular400",
  },
  listItemDivider: {
    height: 1,
    backgroundColor: theme.COLORS.SILVER_OPACITY_47P,
  },
});
