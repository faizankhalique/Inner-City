import React, { useState } from "react";
import Ripple from "../../components/Ripple";
import { theme } from "../../services/common/theme";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Text, View, StyleSheet, FlatList } from "react-native";

const notifications = [
  {
    text: "The world of technology thrives best when individuals are left alone to be different, creative, and disobedient.",
    name: "Don Valentine",
  },
  {
    text: "The world of technology thrives best when individuals are left alone to be different, creative, and disobedient.",
    name: "Don Valentine",
  },
  {
    text: "The world of technology thrives best when individuals are left alone to be different, creative, and disobedient.",
    name: "Don Valentine",
  },
  {
    text: "The world of technology thrives best when individuals are left alone to be different, creative, and disobedient.",
    name: "Don Valentine",
  },
];

const Quotes = () => {
  const [expandedItemIndex, setExpandedItemIndex] = useState(0);

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(_, index) => index}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContentContainer}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text style={styles.quotesText}>{item.text}</Text>
            <Ripple
              style={styles.footer}
              onPress={() => setExpandedItemIndex(index)}
            >
              <Text style={styles.nameText}>{item.name}</Text>
              <IonIcon
                size={16}
                color={theme.COLORS.TANGO}
                name={
                  index === expandedItemIndex
                    ? "arrow-up-circle"
                    : "arrow-down-circle"
                }
              />
            </Ripple>
          </View>
        )}
      />
    </View>
  );
};

export default Quotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "30%",
    paddingHorizontal: 20,
  },
  listContentContainer: {
    paddingBottom: "10%",
  },
  listItem: {
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: theme.COLORS.BISCAY,
  },
  quotesText: {
    fontSize: 19,
    lineHeight: 24,
    paddingTop: 20,
    paddingBottom: 5,
    paddingHorizontal: 25,
    color: theme.COLORS.WHITE,
    fontFamily: "InterRegular400",
  },
  footer: {
    paddingTop: 15,
    borderRadius: 15,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    justifyContent: "space-between",
  },
  nameText: {
    fontSize: 16,
    lineHeight: 20,
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
  },
});
