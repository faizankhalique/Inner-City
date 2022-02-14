import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import WelcomeScreen from "../screens/Welcome";
import SignupScreen from "../screens/Signup";
import SigninScreen from "../screens/Signin";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { theme } from "../services/common/theme";

const Tab = createMaterialTopTabNavigator();

const SignupNavigation = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Tab.Navigator
      tabBar={() => (
        <View
          style={activeTab === 2 ? styles.containerSignin : styles.container}
        >
          {Array.from(Array(3).keys()).map((_, tabIndex) => (
            <View
              key={tabIndex}
              style={tabIndex === activeTab ? styles.dotActive : styles.dot}
            />
          ))}
        </View>
      )}
      tabBarPosition="bottom"
      screenListeners={{
        state: (navigationState) => {
          const { data } = navigationState || {};
          const { state } = data || {};
          const { index } = state || {};
          setActiveTab(index);
        },
      }}
    >
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Signup" component={SignupScreen} />
      <Tab.Screen name="Signin" component={SigninScreen} />
    </Tab.Navigator>
  );
};

export default SignupNavigation;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  containerSignin: {
    opacity: 0.8,
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.COLORS.BLACK_PEARL,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    marginHorizontal: 3,
    backgroundColor: theme.COLORS.WHITE,
  },
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 25,
    marginHorizontal: 3,
    backgroundColor: theme.COLORS.OCHRE,
  },
});
