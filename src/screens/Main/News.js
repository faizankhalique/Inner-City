import React, { useState, useEffect } from "react";
import Ripple from "../../components/Ripple";
import { theme } from "../../services/common/theme";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { actions } from "../../services/state/Reducer";
import { useStateValue } from "../../services/state/State";
import firebase from "firebase";

// const news = [
//   {
//     heading: "The America Win football match",
//     description:
//       "The world of technology thrives best when individuals are left alone to be different, creative, and disobedient.",
//   },
//   {
//     heading: "The America Win football match",
//     description:
//       "The world of technology thrives best when individuals are left alone to be different, creative, and disobedient.",
//   },
//   {
//     heading: "The America Win football match",
//     description:
//       "The world of technology thrives best when individuals are left alone to be different, creative, and disobedient.",
//   },
//   {
//     heading: "The America Win football match",
//     description:
//       "The world of technology thrives best when individuals are left alone to be different, creative, and disobedient.",
//   },
// ];

const News = () => {
  const [, dispatch] = useStateValue();
  const { uid } = firebase.auth()?.currentUser || {};

  const [user, setUser] = useState();
  const [news, setNews] = useState([]);

  const fetchUser = async () => {
    try {
      dispatch({ type: actions.SET_SHOW_LOADER, showLoader: true });
      await firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .onSnapshot((querySnapshot) => {
          setUser(querySnapshot.data());
          dispatch({ type: actions.SET_SHOW_LOADER, showLoader: false });
        });
    } catch (err) {
      console.log("fetchUser Error:", err);
    }
  };

  useEffect(() => {
    if (uid) {
      fetchUser();
    }
  }, [uid]);

  const fetchNews = async () => {
    try {
      dispatch({ type: actions.SET_SHOW_LOADER, showLoader: true });
      await firebase
        .firestore()
        .collection("news")
        .where(firebase.firestore.FieldPath.documentId(), "in", user.rewards)
        .onSnapshot((querySnapshot) => {
          const newss = [];
          querySnapshot.forEach((n) => {
            const news = n.data();
            newss.push(news);
          });
          setNews(newss);
          dispatch({ type: actions.SET_SHOW_LOADER, showLoader: false });
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user && user.rewards && user.rewards.length > 0) {
      fetchNews();
    }
  }, [user]);

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
              <Text style={styles.newsHeading}>{item.heading}</Text>
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
    paddingTop: "3%",
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
  newsHeading: {
    fontSize: 22,
    lineHeight: 22,
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
