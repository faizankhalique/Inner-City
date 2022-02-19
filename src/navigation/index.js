import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { theme } from "../services/common/theme";
import SignupNavigation from "./SignupNavigation";
import ForgotPassword from "../screens/Auth/ForgotPassword";
import ResetPasswordEmailSent from "../screens/Auth/ResetPasswordEmailSent";
import UpdatePassword from "../screens/Auth/UpdatePassword";
import AccountVerification from "../screens/Auth/AccountVerification";
import PasswordUpdated from "../screens/Auth/PasswordUpdated";
import MainNavigation from "./MainNavigation";

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
  <Stack.Navigator
  // initialRouteName="Home"
  >
    <Stack.Screen
      name="SignupNavigation"
      component={SignupNavigation}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ResetPasswordEmailSent"
      component={ResetPasswordEmailSent}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="UpdatePassword"
      component={UpdatePassword}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AccountVerification"
      component={AccountVerification}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PasswordUpdated"
      component={PasswordUpdated}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Home"
      component={MainNavigation}
      options={{ headerShown: false }}
    />
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
