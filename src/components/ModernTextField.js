import React from "react";
import {
  View,
  TextInput as TI,
  StyleSheet,
  Text,
  Platform,
} from "react-native";
import { theme } from "../services/common/theme";

const ModernTextField = ({
  placeholder = "",
  value = "",
  onChangeText = () => {},
  icon = null,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <TI
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.inputSingleline}
        placeholderTextColor={theme.COLORS.SILVER}
        {...props}
      />
    </View>
  );
};

export default ModernTextField;

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: "20%",
    height: "100%",
    alignItems: "center",
    borderTopLeftRadius: 8,
    justifyContent: "center",
    borderBottomLeftRadius: 8,
    backgroundColor: theme.COLORS.TANGO,
  },
  inputSingleline: {
    width: "80%",
    fontSize: 14,
    height: "100%",
    paddingHorizontal: 15,
    borderTopRightRadius: 8,
    color: theme.COLORS.BLACK,
    borderBottomRightRadius: 8,
    fontFamily: "InterRegular400",
    backgroundColor: theme.COLORS.WHITE,
  },
});
