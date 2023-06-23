import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,StatusBar
} from "react-native";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";


const Login = ({ navigation }) => {  
   let [fontsLoaded] = useFonts({
     Roboto_100Thin,
     Roboto_100Thin_Italic,
     Roboto_300Light,
     Roboto_300Light_Italic,
     Roboto_400Regular,
     Roboto_400Regular_Italic,
     Roboto_500Medium,
     Roboto_500Medium_Italic,
     Roboto_700Bold,
     Roboto_700Bold_Italic,
     Roboto_900Black,
     Roboto_900Black_Italic,
   });
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar
        barStyle="dark-content"
        color="black"
        hidden={false}
        backgroundColor={"#F1F1F1"}
      />
      <View style={styles.topTextOuter}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            fontWeight: 400,
            fontFamily: "Roboto_400Regular",
          }}
        >
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
                fontSize: 13,
                opacity: 0.5,
                fontFamily: "Roboto_400Regular",
              }}
            >
              Email Address
            </Text>
          </View>
          <TextInput
            style={styles.textField}
            textAlignVertical="center"
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
                fontSize: 13,
                opacity: 0.5,
                fontFamily: "Roboto_400Regular",
              }}
            >
              Password
            </Text>
          </View>
          <TextInput
            style={styles.textField}
            textAlignVertical="center"
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
          <Text
            style={{
              fontSize: 13,
              color: "#004E3F",
              fontFamily: "Roboto_400Regular",
            }}
          >
            New to Grainweed institute?{" "}
            <Text onPress={() => navigation.navigate("SignUp")}>
              <Text
                style={{
                  fontSize: 13,
                  color: "#004E3F",
                  fontFamily: "Roboto_500Medium",
                }}
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
              fontSize: 13,
              fontFamily: "Roboto_400Regular",
            }}
          >
            By Sign Up to create an account I accept Grainweed’s
            <Text
              style={{ color: "#004E3FBF", fontFamily: "Roboto_400Regular" }}
            >
              Terms, Service, Privacy policy,{" "}
            </Text>
            and{" "}
            <Text
              style={{ color: "#004E3FBF", fontFamily: "Roboto_400Regular" }}
            >
              Honor code
            </Text>
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
    fontFamily: "Roboto_400Regular",
    fontSize: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    // height: 250,
    marginTop:64,
    padding:64,
    paddingBottom: 32,
    color: "black",
  },
  loginFormOuter: {
    paddingLeft: 24,
    paddingRight: 24,
    height: "auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 32,
    alignItems: "center",

    justifyContent: "center",
  },
  textField: {
    borderRadius: 16,
    width: "100%",
    height: 56,
    margin: 8,
    backgroundColor: "#ECECEC",
    paddingLeft: 16,
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
  },
  loginButton: {
    height: 56,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#004E3F",
    fontFamily: "Roboto_400Regular",
    fontWeight: "400",
    fontSize: 20,
    color: "white",
    letterSpacing: 1,
    marginTop: 64,
    borderRadius: 16,
  },
  LoginButtonText: {
    fontWeight: "600",
    fontSize: 16,
    color: "white",
    letterSpacing: 1,
  },
  createAcc: {
    paddingTop:8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginIcons: {
    marginTop: 16,
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
    padding: 8,
    backgroundColor: "#ECECEC",
    margin: 8,
    borderRadius: 16,
  },
  bottomDesc: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    // borderWidth: 1,
    // borderColor: "red",
    marginTop: 8,
    paddingTop: 32,
    padding: 32,
    paddingBottom: 24,
  },
});
export default Login;
