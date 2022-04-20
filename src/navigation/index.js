import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "../services/common/theme";
import SignupNavigation from "./SignupNavigation";
import ForgotPassword from "../screens/Auth/ForgotPassword";
import ResetPasswordEmailSent from "../screens/Auth/ResetPasswordEmailSent";
import UpdatePassword from "../screens/Auth/UpdatePassword";
import AccountVerification from "../screens/Auth/AccountVerification";
import PasswordUpdated from "../screens/Auth/PasswordUpdated";
import MainNavigation from "./MainNavigation";

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
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
  </Stack.Navigator>
);

const CreateRootNavigator = ({ isAuthenticated = false }) => {
  return (
    <NavigationContainer theme={{ colors: { background: theme.APP_COLOR_3 } }}>
      {isAuthenticated ? <MainNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default CreateRootNavigator;
