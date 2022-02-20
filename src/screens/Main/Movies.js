import React from "react";
import { theme } from "../../services/common/theme";
import { Text, View, StyleSheet } from "react-native";

const Movies = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Movies</Text>
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "30%",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
  },
});
