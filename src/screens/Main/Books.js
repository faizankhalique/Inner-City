import React from "react";
import { theme } from "../../services/common/theme";
import {
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import Ripple from "../../components/Ripple";

const DisplacementBook = require("../../../assets/images/DisplacementBook.png");
const IAmAWildSeedBook = require("../../../assets/images/IAmAWildSeedBook.png");
const BionicBook = require("../../../assets/images/BionicBook.png");
const YoungMungoBook = require("../../../assets/images/YoungMungoBook.png");
const TrustBook = require("../../../assets/images/TrustBook.png");
const TheGuncle = require("../../../assets/images/TheGuncle.png");
const RecentUsedBook1 = require("../../../assets/images/RecentUsedBook1.png");
const RecentUsedBook2 = require("../../../assets/images/RecentUsedBook2.png");
const RecentUsedBook3 = require("../../../assets/images/RecentUsedBook3.png");

const popularNow = [
  {
    name: "Displacement",
    author: "Kiku Hughes",
    image: DisplacementBook,
  },
  {
    name: `I'm a Wild Seed`,
    author: "Sharon Lee de la Cruz",
    image: IAmAWildSeedBook,
  },
  {
    name: "Bionic",
    author: "Koren Shadmi",
    image: BionicBook,
  },
];

const trendingNow = [
  {
    name: "Young Mungo",
    author: "Douglas Stuart",
    image: YoungMungoBook,
  },
  {
    name: `Trust`,
    author: "Hernan Diaz",
    image: TrustBook,
  },
  {
    name: "The Guncle",
    author: "Steven Rowley",
    image: TheGuncle,
  },
];

const recentlyRead = [
  {
    image: RecentUsedBook1,
  },
  {
    image: RecentUsedBook2,
  },
  {
    image: RecentUsedBook3,
  },
];

const Books = () => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContentContainer}
    >
      <View style={styles.listHeaderContainer}>
        <Text style={styles.listHeaderText}>Popular Now</Text>
      </View>
      <FlatList
        horizontal
        data={popularNow}
        keyExtractor={(_, index) => index}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContentContainer}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <Ripple style={styles.listItem} onPress={() => {}}>
              <Image
                source={item.image}
                resizeMode="stretch"
                style={styles.bookThumbnail}
              />
              <View style={styles.bookInfoContainer}>
                <Text style={styles.bookName} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.bookAuthor} numberOfLines={1}>
                  {item.author}
                </Text>
              </View>
            </Ripple>
          </View>
        )}
      />

      <View style={styles.listHeaderContainer}>
        <Text style={styles.listHeaderText}>Trending Now</Text>
      </View>
      <FlatList
        horizontal
        data={trendingNow}
        keyExtractor={(_, index) => index}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContentContainer}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <Ripple style={styles.listItem} onPress={() => {}}>
              <Image
                source={item.image}
                resizeMode="stretch"
                style={styles.bookThumbnail}
              />
              <View style={styles.bookInfoContainer}>
                <Text style={styles.bookName} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.bookAuthor} numberOfLines={1}>
                  {item.author}
                </Text>
              </View>
            </Ripple>
          </View>
        )}
      />

      <View style={styles.listHeaderContainer}>
        <Text style={styles.listHeaderText}>Recently Read</Text>
      </View>
      <FlatList
        horizontal
        data={recentlyRead}
        keyExtractor={(_, index) => index}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContentContainer}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <Ripple style={styles.listItem} onPress={() => {}}>
              <Image
                source={item.image}
                resizeMode="stretch"
                style={styles.bookThumbnail1}
              />
            </Ripple>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "30%",
  },
  scrollContentContainer: {
    paddingBottom: "40%",
  },
  listHeaderContainer: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  listHeaderText: {
    fontSize: 18,
    lineHeight: 21,
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
  },
  listContentContainer: {
    marginBottom: 20,
  },
  listItemContainer: {
    paddingHorizontal: 10,
    width: Dimensions.get("screen").width * 0.43,
  },
  listItem: {
    borderRadius: 6,
  },
  bookThumbnail: {
    height: 200,
    width: "100%",
    borderRadius: 6,
  },
  bookThumbnail1: {
    height: 140,
    width: "100%",
    borderRadius: 6,
  },
  bookInfoContainer: {
    marginVertical: 12,
    marginHorizontal: 5,
  },
  bookName: {
    fontSize: 17,
    lineHeight: 21,
    color: theme.COLORS.WHITE,
    fontFamily: "InterRegular400",
  },
  bookAuthor: {
    fontSize: 12,
    marginTop: 8,
    lineHeight: 15,
    color: theme.COLORS.WHITE,
    fontFamily: "InterRegular400",
  },
});
