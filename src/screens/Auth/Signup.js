import React, { useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { theme } from "../../services/common/theme";
import Button from "../../components/Button";
import SimpleTextField from "../../components/SimpleTextField";
import CheckBox from "../../components/CheckBox";
import firebase from "firebase";

const SignupImg1 = require("../../../assets/images/SignupImg1.png");
const SignupImg2 = require("../../../assets/images/SignupImg2.png");
const SignupImg3 = require("../../../assets/images/SignupImg3.png");
const InnerCityLogo = require("../../../assets/images/InnerCityLogo.png");

const Signup = ({ navigation }) => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [firstName, setFirstName] = useState("firstname");
  const [lastName, setLastName] = useState("lastname");
  const [email, setEmail] = useState("a1@gmail.com");
  const [password, setPassword] = useState("12345678");

  const [enableSupport, setEnableSupport] = useState(false);
  const [agreeTAC, setAgreeTAC] = useState(false);

  const handleSignup = async () => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          if (res && res.user) {
            res.user.updateProfile({ displayName: `${firstName} ${lastName}` });
          }
        })
        .catch((error) => {
          let errorCode = error.code;
          let errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("Weak Password!");
          } else {
            alert(errorMessage);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={SignupImg1}
        resizeMode="stretch"
        style={styles.signupImg1}
      />
      <Image
        source={SignupImg2}
        resizeMode="stretch"
        style={styles.signupImg2}
      />
      <Image
        source={SignupImg3}
        resizeMode="stretch"
        style={styles.signupImg3}
      />
      <Image
        source={InnerCityLogo}
        resizeMode="stretch"
        style={styles.innerCityLogo}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.signupText}>
          Sign up to join
          <Text style={styles.innerCityText}> INNER CITY</Text>
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.fieldsContentContainer}
        >
          <View style={styles.fieldsContainer}>
            <SimpleTextField
              value={firstName}
              label="First Name"
              placeholder="Your First Name"
              onChangeText={(val) => setFirstName(val)}
            />
            <SimpleTextField
              value={lastName}
              label="First Last"
              placeholder="Your Last Name"
              onChangeText={(val) => setLastName(val)}
            />
            <SimpleTextField
              value={email}
              label="Email"
              placeholder="Your Email"
              onChangeText={(val) => setEmail(val)}
            />
            <SimpleTextField
              secureTextEntry
              value={password}
              label="Password"
              placeholder="Password"
              onChangeText={(val) => setPassword(val)}
            />
          </View>
          <View style={styles.actionsContainer}>
            <CheckBox
              size={22}
              fontSize={14}
              isChecked={enableSupport}
              textColor={theme.COLORS.WHITE}
              onChange={() =>
                setEnableSupport((enableSupport) => !enableSupport)
              }
            >
              <Text style={styles.enableSupportText}>
                Sign me up for the Support America newsletter
              </Text>
            </CheckBox>
            <CheckBox
              size={22}
              fontSize={14}
              isChecked={agreeTAC}
              textColor={theme.COLORS.WHITE}
              onChange={() => setAgreeTAC((agreeTAC) => !agreeTAC)}
            >
              <Text style={styles.agreeTACText}>
                {`I agree to the `}
                <Text style={styles.tOUNPPText}>Terms of Use</Text>
                {` and have read and understand the `}
                <Text style={styles.tOUNPPText}>Privacy Policy</Text>
              </Text>
            </CheckBox>
            <Button
              height={40}
              onPress={handleSignup}
              title="Create an Account"
              color={theme.COLORS.TANGO}
              buttonStyle={styles.button}
              textStyle={styles.buttonText}
            />
            <Text style={styles.alreadyAccountText}>
              {`Already have an account? `}
              <Text
                style={styles.signinText}
                onPress={() => navigation.navigate("Signin")}
              >
                Sign In
              </Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Signup;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signupImg1: {
    left: 0,
    right: 0,
    bottom: 0,
    top: "15%",
    width: "95%",
    height: "82%",
    position: "absolute",
  },
  signupImg2: {
    left: 0,
    right: 0,
    bottom: 0,
    top: "15%",
    height: "90%",
    width: "100%",
    position: "absolute",
  },
  signupImg3: {
    bottom: 0,
    right: 0,
    top: "20%",
    height: "75%",
    width: "90%",
    position: "absolute",
  },
  innerCityLogo: {
    width: 234,
    height: 86,
    marginTop: 40,
    alignSelf: "center",
  },
  innerContainer: {
    paddingHorizontal: 31,
  },
  welcomeText: {
    fontSize: 24,
    marginTop: 11,
    lineHeight: 24,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterMedium500",
  },
  signupText: {
    marginTop: 11,
    fontSize: 16,
    lineHeight: 28,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterRegular400",
  },
  innerCityText: {
    color: theme.COLORS.TANGO,
    fontFamily: "InterBold700",
  },
  fieldsContainer: {
    marginVertical: 16,
  },
  fieldsContentContainer: {
    paddingBottom: "70%",
  },
  enableSupportText: {
    fontSize: 16,
    lineHeight: 22,
    color: theme.COLORS.WHITE,
    fontFamily: "InterMedium500",
  },
  agreeTACText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 22,
    color: theme.COLORS.WHITE,
    fontFamily: "InterMedium500",
  },
  tOUNPPText: {
    fontFamily: "InterBold700",
    textDecorationLine: "underline",
  },
  button: {
    marginTop: 30,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterMedium500",
  },
  alreadyAccountText: {
    fontSize: 16,
    marginTop: 11,
    lineHeight: 28,
    textAlign: "center",
    color: theme.COLORS.WHITE,
    fontFamily: "InterMedium500",
  },
  signinText: {
    color: theme.COLORS.TANGO,
    fontFamily: "InterBold700",
    textDecorationLine: "underline",
  },
});
