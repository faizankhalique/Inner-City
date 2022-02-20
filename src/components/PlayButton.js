/* eslint-disable react-native/no-inline-styles */
import React from "react";
import Ripple from "./Ripple";
import PropTypes from "prop-types";
import { theme } from "../services/common/theme";
import { Text, View, StyleSheet } from "react-native";

const PlayButton = (props) => {
  const { title = "Play", onPress = () => {} } = props || {};

  return (
    <View style={styles.playButtonContainer}>
      <Ripple style={styles.playButton} onPress={onPress}>
        <Text style={styles.playButtonText}>{title}</Text>
      </Ripple>
    </View>
  );
};

PlayButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

export default PlayButton;

export const styles = StyleSheet.create({
  playButtonContainer: {
    bottom: "-3%",
    alignSelf: "center",
    position: "absolute",
  },
  playButton: {
    height: 43,
    width: 150,
    borderWidth: 3,
    borderRadius: 33,
    alignItems: "center",
    justifyContent: "center",
    borderColor: theme.COLORS.WHITE,
    backgroundColor: theme.COLORS.TANGO,
  },
  playButtonText: {
    fontSize: 24,
    lineHeight: 26,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "Digitalt500",
  },
});
