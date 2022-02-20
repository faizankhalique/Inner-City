import React from "react";
import { StyleSheet } from "react-native";
import ProfileScreen from "../screens/Main/Profile";
import { theme } from "../services/common/theme";
import DashboardScreen from "../screens/Main/Dashboard";
import GameStack from "../navigation/GameStack";
import BottomTabBar from "../components/BottomTabBar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator tabBar={BottomTabBar} initialRouteName="Dashboard">
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          unmountOnBlur: true,
          headerTransparent: true,
          headerTitleStyle: styles.headerTitle,
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Games"
        component={GameStack}
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({
  headerTitle: {
    color: theme.COLORS.WHITE,
  },
});
