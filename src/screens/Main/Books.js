import React, { useState, useEffect } from "react";
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
import { actions } from "../../services/state/Reducer";
import { useStateValue } from "../../services/state/State";
import firebase from "firebase";

const DisplacementBook = require("../../../assets/images/DisplacementBook.png");
const IAmAWildSeedBook = require("../../../assets/images/IAmAWildSeedBook.png");
const BionicBook = require("../../../assets/images/BionicBook.png");
const YoungMungoBook = require("../../../assets/images/YoungMungoBook.png");
const TrustBook = require("../../../assets/images/TrustBook.png");
const TheGuncle = require("../../../assets/images/TheGuncle.png");
const RecentUsedBook1 = require("../../../assets/images/RecentUsedBook1.png");
const RecentUsedBook2 = require("../../../assets/images/RecentUsedBook2.png");
const RecentUsedBook3 = require("../../../assets/images/RecentUsedBook3.png");

// const popularNow = [
//   {
//     name: "Displacement",
//     author: "Kiku Hughes",
//     thumbnail: DisplacementBook,
//   },
//   {
//     name: `I'm a Wild Seed`,
//     author: "Sharon Lee de la Cruz",
//     thumbnail: IAmAWildSeedBook,
//   },
//   {
//     name: "Bionic",
//     author: "Koren Shadmi",
//     thumbnail: BionicBook,
//   },
// ];

// const trendingNow = [
//   {
//     name: "Young Mungo",
//     author: "Douglas Stuart",
//     thumbnail: YoungMungoBook,
//   },
//   {
//     name: `Trust`,
//     author: "Hernan Diaz",
//     thumbnail: TrustBook,
//   },
//   {
//     name: "The Guncle",
//     author: "Steven Rowley",
//     thumbnail: TheGuncle,
//   },
// ];

// const recentlyRead = [
//   {
//     thumbnail: RecentUsedBook1,
//   },
//   {
//     thumbnail: RecentUsedBook2,
//   },
//   {
//     thumbnail: RecentUsedBook3,
//   },
// ];

const Books = () => {
  const [, dispatch] = useStateValue();

  const [popularNowBooks, setPopularNowBooks] = useState([]);
  const [trendingNowBooks, setTrendingNowBooks] = useState([]);
  const [recentlyReadBooks, setRecentlyReadBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      dispatch({ type: actions.SET_SHOW_LOADER, showLoader: true });
      await firebase
        .firestore()
        .collection("books")
        .onSnapshot((querySnapshot) => {
          const books = [];
          querySnapshot.forEach((b) => {
            const book = b.data();
            books.push(book);
          });
          setPopularNowBooks(books.filter((b) => b.type === "popular_now"));
          setTrendingNowBooks(books.filter((b) => b.type === "trending_now"));
          setRecentlyReadBooks(books.filter((b) => b.type === "recently_read"));
          dispatch({ type: actions.SET_SHOW_LOADER, showLoader: false });
        });
    } catch (err) {
      console.log(err);
    }
  };

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
        data={popularNowBooks}
        keyExtractor={(_, index) => index}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContentContainer}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <Ripple style={styles.listItem} onPress={() => {}}>
              <Image
                resizeMode="stretch"
                style={styles.bookThumbnail}
                source={{ uri: item.thumbnail }}
              />
              <View style={styles.bookInfoContainer}>
                <Text style={styles.bookName} numberOfLines={1}>
                  {item.name || ""}
                </Text>
                <Text style={styles.bookAuthor} numberOfLines={1}>
                  {item.author || ""}
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
        data={trendingNowBooks}
        keyExtractor={(_, index) => index}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContentContainer}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <Ripple style={styles.listItem} onPress={() => {}}>
              <Image
                resizeMode="stretch"
                style={styles.bookThumbnail}
                source={{ uri: item.thumbnail }}
              />
              <View style={styles.bookInfoContainer}>
                <Text style={styles.bookName} numberOfLines={1}>
                  {item.name || ""}
                </Text>
                <Text style={styles.bookAuthor} numberOfLines={1}>
                  {item.author || ""}
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
        data={recentlyReadBooks}
        keyExtractor={(_, index) => index}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContentContainer}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <Ripple style={styles.listItem} onPress={() => {}}>
              <Image
                resizeMode="stretch"
                style={styles.bookThumbnail1}
                source={{ uri: item.thumbnail }}
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
  },
  scrollContentContainer: {
    paddingBottom: "5%",
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
