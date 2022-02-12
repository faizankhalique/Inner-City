import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Image, View, Text } from "react-native";
import WelcomeScreen from "./screens/Welcome";
import SignupScreen from "./screens/Signup";
import LoginScreen from "./screens/Login";
import { theme } from "./services/common/theme";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const styles = StyleSheet.create({
  leftIcon: {
    width: 40,
    height: 24,
  },
  rightIcon: {
    width: 32,
    height: 30,
  },
  leftButton: {
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.APP_COLOR_2,
  },
  languageButtonOuter: {
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: theme.APP_COLOR_2,
  },
  rightButton: {
    padding: 5,
    borderRadius: 30,
  },
  languageOptionsContainer: {
    borderRadius: 15,
    backgroundColor: theme.COLORS.BLACK,
  },
  flagIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  languageBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  languageOption: {
    padding: 10,
    borderColor: theme.COLORS.WHITE_OPACITY_3P,
  },
  languageOptionText: {
    fontSize: 14,
    fontFamily: "Moon-Bold",
    color: theme.COLORS.WHITE_OPACITY_3P,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
});

const RootStack = () => (
  <Stack.Navigator initialRouteName="Signup">
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Signup"
      component={SignupScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    {/* <Stack.Screen
      name="Home"
      component={BottomTabs}
      options={{ headerShown: false }}
    /> */}
  </Stack.Navigator>
);

const CreateRootNavigator = () => {
  return (
    <NavigationContainer theme={{ colors: { background: theme.APP_COLOR_3 } }}>
      <RootStack />
    </NavigationContainer>
  );
};

export default CreateRootNavigator;
