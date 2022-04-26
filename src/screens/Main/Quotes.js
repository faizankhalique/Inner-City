import React, { useState, useEffect } from "react";
import Ripple from "../../components/Ripple";
import { theme } from "../../services/common/theme";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { actions } from "../../services/state/Reducer";
import { useStateValue } from "../../services/state/State";
import firebase from "firebase";

// const quotes = [
//   {
//     text: "The world of technology thrives best when individuals are left alone to be different, creative, and disobedient. The world of technology thrives best when individuals are left alone to be different, creative, and disobedient.\n\nThe world of technology thrives best when individuals are left alone to be different, creative, and disobedient.",
//     writer: "Don Valentine",
//   },
//   {
//     text: "The world of technology thrives best when individuals are left alone to be different, creative, and disobedient. The world of technology thrives best when individuals are left alone to be different, creative, and disobedient.\n\nThe world of technology thrives best when individuals are left alone to be different, creative, and disobedient.",
//     writer: "Don Valentine",
//   },
//   {
//     text: "The world of technology thrives best when individuals are left alone to be different, creative, and disobedient. The world of technology thrives best when individuals are left alone to be different, creative, and disobedient.\n\nThe world of technology thrives best when individuals are left alone to be different, creative, and disobedient.",
//     writer: "Don Valentine",
//   },
//   {
//     text: "The world of technology thrives best when individuals are left alone to be different, creative, and disobedient. The world of technology thrives best when individuals are left alone to be different, creative, and disobedient.\n\nThe world of technology thrives best when individuals are left alone to be different, creative, and disobedient.",
//     writer: "Don Valentine",
//   },
//   {
//     text: "The world of technology thrives best when individuals are left alone to be different, creative, and disobedient. The world of technology thrives best when individuals are left alone to be different, creative, and disobedient.\n\nThe world of technology thrives best when individuals are left alone to be different, creative, and disobedient.",
//     writer: "Don Valentine",
//   },
// ];

const Quotes = () => {
  const [, dispatch] = useStateValue();
  const { uid } = firebase.auth()?.currentUser || {};

  const [user, setUser] = useState();
  const [quotes, setQuotes] = useState([]);
  const [expandedItemIndex, setExpandedItemIndex] = useState(0);

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

  const fetchQuotes = async () => {
    try {
      dispatch({ type: actions.SET_SHOW_LOADER, showLoader: true });
      await firebase
        .firestore()
        .collection("quotes")
        .where(firebase.firestore.FieldPath.documentId(), "in", user.rewards)
        .onSnapshot((querySnapshot) => {
          const quotes = [];
          querySnapshot.forEach((q) => {
            const quote = q.data();
            quotes.push(quote);
          });
          setQuotes(quotes);
          dispatch({ type: actions.SET_SHOW_LOADER, showLoader: false });
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user && user.rewards && user.rewards.length > 0) {
      fetchQuotes();
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <FlatList
        data={quotes}
        keyExtractor={(_, index) => index}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContentContainer}
        renderItem={({ item, index }) => {
          const showMoreTextButton = item.text.length > 100;
          const quoteText = showMoreTextButton
            ? item.text.substr(0, 100)
            : item.text;
          const quoteMoreText = showMoreTextButton ? item.text.substr(100) : "";

          return (
            <View style={styles.listItem}>
              <Text style={styles.quoteText}>
                {quoteText}
                {index !== expandedItemIndex && showMoreTextButton && "..."}
                {index === expandedItemIndex &&
                  showMoreTextButton &&
                  quoteMoreText}
              </Text>

              <Ripple
                style={styles.footer}
                onPress={() => setExpandedItemIndex(index)}
                disabled={index === expandedItemIndex || !showMoreTextButton}
              >
                <Text style={styles.writerText}>{item.writer}</Text>
                {showMoreTextButton && (
                  <IonIcon
                    size={16}
                    color={theme.COLORS.TANGO}
                    name={
                      index === expandedItemIndex
                        ? "arrow-up-circle"
                        : "arrow-down-circle"
                    }
                  />
                )}
              </Ripple>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Quotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "3%",
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
  quoteText: {
    fontSize: 19,
    lineHeight: 24,
    paddingTop: 20,
    paddingBottom: 5,
    paddingHorizontal: 25,
    color: theme.COLORS.WHITE,
    fontFamily: "InterRegular400",
  },
  quoteMoreText: {
    fontSize: 16,
    lineHeight: 20,
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
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
  writerText: {
    fontSize: 16,
    lineHeight: 20,
    color: theme.COLORS.WHITE,
    fontFamily: "InterBold700",
  },
});
