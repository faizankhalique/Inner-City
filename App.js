import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import CreateRootNavigator from "./src/index";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <CreateRootNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
