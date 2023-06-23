import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView
} from "react-native";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

const Login = ({ navigation }) => {  
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}
    >
      <View style={styles.topTextOuter}>
        <Text style={{ textAlign: "center", fontSize: 16, fontWeight: 400 }}>
          {"  "}Take the greatest courses available online from renowned
          universities and business partners.
        </Text>
      </View>
      <View style={styles.loginFormOuter}>
        <SafeAreaView style={styles.form}>
          <View style={{ zIndex: 1, width: "100%" }}>
            <Text
              style={{
                bottom: -15,
                textAlign: "left",
                left: 18,
                color: "#000000",
                fontSize: 16,
                opacity: 0.5,
              }}
            >
              Email Address
            </Text>
          </View>
          <TextInput
            style={styles.textField}
            textAlignVertical="top"
            textAlign="left"
            autoComplete="email"
            keyboardType="email-address"
          />
          <View style={{ zIndex: 1, width: "100%" }}>
            <Text
              style={{
                bottom: -15,
                textAlign: "left",
                left: 18,
                color: "#000000",
                fontSize: 16,
                opacity: 0.5,
              }}
            >
              Password
            </Text>
          </View>
          <TextInput
            style={styles.textField}
            textAlignVertical="top"
            textAlign="left"
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Main")}
            style={styles.loginButton}
          >
            <Text style={styles.LoginButtonText}>Login</Text>
          </TouchableOpacity>
        </SafeAreaView>
        <View style={styles.createAcc}>
          <Text style={{ fontSize: 16, color: "#004E3F" }}>
            New to Grainweed institute?{" "}
            <Text onPress={() => navigation.navigate("SignUp")}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#004E3F" }}
              >
                Create an Account
              </Text>
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.loginIcons}>
        <View style={styles.iconOuter}>
          <Image
            style={styles.icons}
            source={require("../assets/facebook.png")}
          />
        </View>
        <View style={styles.iconOuter}>
          <Image
            style={styles.icons}
            source={require("../assets/google.png")}
          />
        </View>
        <View style={styles.iconOuter}>
          <Image
            style={styles.icons}
            source={require("../assets/apple-logo.png")}
          />
        </View>
      </View>
      <View style={styles.bottomDesc}>
        <View>
          <Text
            style={{
              color: "#000000BF",
              textAlign: "center",
              opacity: 0.75,
              width: 305,
              fontSize:13
            }}
          >
            By Sign Up to create an account I accept Grainweed’s
            <Text style={{ color: "#004E3FBF" }}>
              Terms, Service, Privacy policy,{" "}
            </Text>
            and <Text style={{ color: "#004E3FBF" }}>Honor code</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "F2F2F2",
    borderColor: "red",
    margin: 0,
    padding: 0,
  },
  topTextOuter: {
    fontSize: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    fontWeight: 400,
    height: 250,
    padding: 70,
    paddingBottom: 40,
    color: "black",
  },
  loginFormOuter: {
    paddingLeft: 25,
    paddingRight: 25,
    height: "auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 30,
    alignItems: "center",

    justifyContent: "center",
  },
  textField: {
    borderRadius: 16,
    width: "100%",
    height: 58,
    margin: 7,
    backgroundColor: "#ECECEC",
    paddingLeft: 16,
    fontSize: 16,
  },
  loginButton: {
    height: 58,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#004E3F",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 20,
    color: "white",
    letterSpacing: 1,
    marginTop: 80,
    borderRadius: 16,
  },
  LoginButtonText: {
    fontWeight: "400",
    fontSize: 20,
    color: "white",
    letterSpacing: 1,
  },
  createAcc: {
    paddingTop: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginIcons: {
    marginTop: 15,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "red",
  },
  icons: {
    height: 24,
    width: 24,
  },
  iconOuter: {
    padding: 12,
    backgroundColor: "#ECECEC",
    margin: 7,
    borderRadius: 16,
  },
  bottomDesc: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    // borderWidth: 1,
    // borderColor: "red",
    marginTop: 5,
    paddingTop: 45,
    padding: 50,
    paddingBottom: 30,
  },
});
export default Login;
