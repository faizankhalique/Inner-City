import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { theme } from "../services/common/theme";
import GameStack from "../navigation/GameStack";
import ProfileScreen from "../screens/Main/Profile";
import EditProfileScreen from "../screens/Main/EditProfile";
import BottomTabBar from "../components/BottomTabBar";
import DashboardScreen from "../screens/Main/Dashboard";
import NotificationsScreen from "../screens/Main/Notifications";
import NewsScreen from "../screens/Main/News";
import QuotesScreen from "../screens/Main/Quotes";
import BooksScreen from "../screens/Main/Books";
import MoviesScreen from "../screens/Main/Movies";
import SongsScreen from "../screens/Main/Songs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ripple from "../components/Ripple";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBar={
        [3, 4, 5, 6, 7, 8, 9].includes(activeTab) ? () => null : BottomTabBar
      }
      screenListeners={{
        state: (navigationState) => {
          const { data } = navigationState || {};
          const { state } = data || {};
          const { index } = state || {};
          setActiveTab(index);
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: "My Profile",
          unmountOnBlur: true,
          headerTransparent: true,
          headerTitleStyle: styles.headerTitle,
          headerLeftContainerStyle: styles.headerLeftContainer,
          headerRightContainerStyle: styles.headerRightContainer,
          headerLeft: () => <BackButton navigation={navigation} />,
          headerRight: () => <EditProfileButton navigation={navigation} />,
        })}
      />
      <Tab.Screen
        name="Games"
        component={GameStack}
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={({ navigation }) => ({
          unmountOnBlur: true,
          headerTransparent: true,
          headerTitleAlign: "left",
          headerTitleStyle: styles.headerTitle,
          headerLeftContainerStyle: styles.headerLeftContainer,
          headerLeft: () => <BackButton navigation={navigation} />,
        })}
      />
      <Tab.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={({ navigation }) => ({
          unmountOnBlur: true,
          title: "Edit Profile",
          headerTransparent: true,
          headerTitleStyle: styles.headerTitle,
          headerLeftContainerStyle: styles.headerLeftContainer,
          headerLeft: () => <BackButton navigation={navigation} />,
        })}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={({ navigation }) => ({
          unmountOnBlur: true,
          headerTransparent: true,
          headerTitleStyle: styles.headerTitle,
          headerLeftContainerStyle: styles.headerLeftContainer,
          headerLeft: () => <BackButton navigation={navigation} />,
        })}
      />
      <Tab.Screen
        name="Quotes"
        component={QuotesScreen}
        options={({ navigation }) => ({
          unmountOnBlur: true,
          headerTransparent: true,
          headerTitleStyle: styles.headerTitle,
          headerLeftContainerStyle: styles.headerLeftContainer,
          headerLeft: () => <BackButton navigation={navigation} />,
        })}
      />
      <Tab.Screen
        name="Books"
        component={BooksScreen}
        options={({ navigation }) => ({
          title: "My Books",
          unmountOnBlur: true,
          headerTransparent: true,
          headerTitleAlign: "center",
          headerTitleStyle: styles.headerTitle,
          headerLeftContainerStyle: styles.headerLeftContainer,
          headerLeft: () => <BackButton navigation={navigation} />,
        })}
      />
      <Tab.Screen
        name="Movies"
        component={MoviesScreen}
        options={({ navigation }) => ({
          unmountOnBlur: true,
          headerTransparent: true,
          headerTitleStyle: styles.headerTitle,
          headerLeftContainerStyle: styles.headerLeftContainer,
          headerLeft: () => <BackButton navigation={navigation} />,
        })}
      />
      <Tab.Screen
        name="Songs"
        component={SongsScreen}
        options={({ navigation }) => ({
          title: "My Songs",
          unmountOnBlur: true,
          headerTransparent: true,
          headerTitleAlign: "center",
          headerTitleStyle: styles.headerTitle,
          headerLeftContainerStyle: styles.headerLeftContainer,
          headerLeft: () => <BackButton navigation={navigation} />,
        })}
      />
    </Tab.Navigator>
  );
};

const BackButton = ({ navigation }) => {
  return (
    <Ripple onPress={() => navigation.goBack()} style={styles.backButton}>
      <EntypoIcon size={25} name="chevron-left" color={theme.COLORS.WHITE} />
    </Ripple>
  );
};

const EditProfileButton = ({ navigation }) => {
  return (
    <Ripple
      style={styles.backButton}
      onPress={() => navigation.navigate("EditProfile")}
    >
      <FeatherIcon size={20} name="edit" color={theme.COLORS.WHITE} />
    </Ripple>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterMedium500",
  },
  headerLeftContainer: {
    paddingLeft: 15,
  },
  headerRightContainer: {
    paddingRight: 15,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
