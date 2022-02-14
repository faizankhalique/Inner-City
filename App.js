import { StatusBar } from "expo-status-bar";
import { StyleSheet, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import Navigation from "./src/navigation/index";
import { theme } from "./src/services/common/theme";

const InterThin100 = require("./assets/fonts/InterThin100.ttf");
const InterExtraLight200 = require("./assets/fonts/InterExtraLight200.ttf");
const InterLight300 = require("./assets/fonts/InterLight300.ttf");
const InterRegular400 = require("./assets/fonts/InterRegular400.ttf");
const InterMedium500 = require("./assets/fonts/InterMedium500.ttf");
const InterSemiBold600 = require("./assets/fonts/InterSemiBold600.ttf");
const InterBold700 = require("./assets/fonts/InterBold700.ttf");
const InterExtraBold800 = require("./assets/fonts/InterExtraBold800.ttf");
const InterBlack900 = require("./assets/fonts/InterBlack900.ttf");

export default function App() {
  let [fontsLoaded] = useFonts({
    InterThin100,
    InterExtraLight200,
    InterLight300,
    InterRegular400,
    InterMedium500,
    InterSemiBold600,
    InterBold700,
    InterExtraBold800,
    InterBlack900,
  });

  return fontsLoaded ? (
    <>
      <StatusBar style="light" />
      <Navigation />
    </>
  ) : (
    <ActivityIndicator
      size="large"
      style={styles.container}
      color={theme.COLORS.BLACK}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
