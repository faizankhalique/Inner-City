import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { theme } from "../services/common/theme";
import Games from "../screens/Main/Games/index";
import SlotMachineGame from "../screens/Main/Games/SlotMachine";
import RollTheDiceGame from "../screens/Main/Games/RollTheDice";
import PrizeWonScreen from "../screens/Main/Games/PrizeWon";
import ScratchTheLotteryGame from "../screens/Main/Games/ScratchTheLottery";
import PaperFortuneTellerGame from "../screens/Main/Games/PaperFortuneTeller";

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

const GameStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="GamesHome"
      component={Games}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PaperFortuneTeller"
      component={PaperFortuneTellerGame}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SlotMachine"
      component={SlotMachineGame}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ScratchTheLottery"
      component={ScratchTheLotteryGame}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RollTheDice"
      component={RollTheDiceGame}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PrizeWon"
      component={PrizeWonScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default GameStack;
