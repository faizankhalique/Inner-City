import firebase from "firebase";
import { useFonts } from "expo-font";
import { useState, useEffect } from "react";
import { StyleSheet, ActivityIndicator, StatusBar } from "react-native";

import Navigation from "./src/navigation/index";
import AppLoader from "./src/components/AppLoader";
import { theme } from "./src/services/common/theme";

import { StateProvider } from "./src/services/state/State";
import { initialState } from "./src/services/state/InitialState";
import { reducer } from "./src/services/state/Reducer";
import { useStateValue } from "./src/services/state/State";

import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGE_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from "@env";
const firebaseConfig = {
  apiKey: API_KEY,
  appId: APP_ID,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  measurementId: MEASUREMENT_ID,
  messagingSenderId: MESSAGE_SENDER_ID,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
};

if (firebase.apps.length < 1) {
  firebase.initializeApp(firebaseConfig);
}

const InterThin100 = require("./assets/fonts/InterThin100.ttf");
const InterExtraLight200 = require("./assets/fonts/InterExtraLight200.ttf");
const InterLight300 = require("./assets/fonts/InterLight300.ttf");
const InterRegular400 = require("./assets/fonts/InterRegular400.ttf");
const InterMedium500 = require("./assets/fonts/InterMedium500.ttf");
const InterSemiBold600 = require("./assets/fonts/InterSemiBold600.ttf");
const InterSemiBold600Italic = require("./assets/fonts/InterSemiBold600Italic.ttf");
const InterBold700 = require("./assets/fonts/InterBold700.ttf");
const InterExtraBold800 = require("./assets/fonts/InterExtraBold800.ttf");
const InterBlack900 = require("./assets/fonts/InterBlack900.ttf");
const Digitalt500 = require("./assets/fonts/Digitalt500.otf");
const LatoRegular400 = require("./assets/fonts/LatoRegular400.ttf");

const App = () => {
  const [{ showLoader }] = useStateValue();

  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  let [fontsLoaded] = useFonts({
    InterThin100,
    InterExtraLight200,
    InterLight300,
    InterRegular400,
    InterMedium500,
    InterSemiBold600,
    InterSemiBold600Italic,
    InterBold700,
    InterExtraBold800,
    InterBlack900,
    Digitalt500,
    LatoRegular400,
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setLoading(false);
      console.log("User: ", user);
      setIsAuthenticated(user ? true : false);
    });
  }, []);

  return fontsLoaded && !loading ? (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <AppLoader visible={showLoader} />
      <Navigation isAuthenticated={isAuthenticated} />
    </>
  ) : (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <ActivityIndicator
        size="large"
        style={styles.container}
        color={theme.COLORS.BLACK}
      />
    </>
  );
};

export default function Main() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
