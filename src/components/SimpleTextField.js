import React from "react";
import {
  View,
  TextInput as TI,
  StyleSheet,
  Text,
  Platform,
} from "react-native";
import { theme } from "../services/common/theme";

const SimpleTextField = ({
  placeholder = "",
  value = "",
  label = "",
  onChangeText = () => {},
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
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

export default SimpleTextField;

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  label: {
    fontSize: 14,
    color: theme.COLORS.WHITE,
    textTransform: "uppercase",
    fontFamily: "InterBold700",
  },
  inputSingleline: {
    marginTop: 14,
    fontSize: 14,
    color: theme.COLORS.BLACK,
    height: 50,
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  inputMultiline: {
    padding: 0,
    fontSize: 11,
    minHeight: 95,
    maxHeight: 95,
    marginTop: 10,
    lineHeight: 16,
    textAlignVertical: "top",
    color: theme.COLORS.WHITE,
    fontFamily: "InterRegular400",
  },
});
