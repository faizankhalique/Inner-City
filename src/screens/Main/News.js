import React from "react";
import Ripple from "../../components/Ripple";
import { theme } from "../../services/common/theme";
import { Text, View, StyleSheet, FlatList } from "react-native";

const news = [
  {
    title: "The America Win football match",
    description:
      "The world of technology thrives best when individuals are left alone to be different, creative, and disobedient.",
  },
  {
    title: "The America Win football match",
    description:
      "The world of technology thrives best when individuals are left alone to be different, creative, and disobedient.",
  },
  {
    title: "The America Win football match",
    description:
      "The world of technology thrives best when individuals are left alone to be different, creative, and disobedient.",
  },
  {
    title: "The America Win football match",
    description:
      "The world of technology thrives best when individuals are left alone to be different, creative, and disobedient.",
  },
];

const News = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(_, index) => index}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContentContainer}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <Ripple onPress={() => {}} style={styles.listItem}>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsDescription}>{item.description}</Text>
            </Ripple>
          </View>
        )}
      />
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "30%",
    paddingHorizontal: 20,
  },
  listContentContainer: {
    paddingBottom: "10%",
  },
  listItemContainer: {
    marginBottom: 15,
  },
  listItem: {
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 25,
    backgroundColor: theme.COLORS.BISCAY,
  },
  newsTitle: {
    fontSize: 22,
    lineHeight: 20,
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
  },
  newsDescription: {
    fontSize: 19,
    marginTop: 24,
    lineHeight: 24,
    color: theme.COLORS.WHITE,
    fontFamily: "InterRegular400",
  },
});
