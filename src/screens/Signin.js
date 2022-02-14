import React from "react";
import { View, StyleSheet, Image } from "react-native";

const InnerCityLogo = require("../../assets/images/InnerCityLogo.png");

const Signin = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="stretch"
        source={InnerCityLogo}
        style={styles.innerCityLogo}
      />
    </View>
  );
};

export default Signin;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerCityLogo: {
    width: 234,
    height: 86,
    marginTop: 40,
    alignSelf: "center",
  },
});
