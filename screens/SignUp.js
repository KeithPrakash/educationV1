import { View, Text, StyleSheet, ScrollView,TextInput, Button, TouchableOpacity,Image,StatusBar} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LearnMoreLinks } from "react-native/Libraries/NewAppScreen";
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


export default function SignUp({navigation}) {
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
      <ScrollView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          color="black"
          hidden={false}
          backgroundColor={"#F1F1F1"}
        />
        <View style={styles.TopTextOuter}>
          <Text style={styles.TopText}>Create an Account</Text>
        </View>
        <View style={styles.form}>
          <View style={{ zIndex: 1, width: "100%" }}>
            <Text
              style={{
                bottom: -15,
                textAlign: "left",
                left: 18,
                color: "#00000080",
                fontSize: 13,
              }}
            >
              Full Name
            </Text>
          </View>
          <TextInput
            style={styles.textField}
            textAlignVertical="center"
            textAlign="left"
          />
          <View
            style={{ zIndex: 1, width: "100%", marginTop: 0, paddingTop: 0 }}
          >
            <Text
              style={{
                bottom: -15,
                textAlign: "left",
                left: 18,
                color: "#00000080",
                fontSize: 13,
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
          />
          <View style={{ zIndex: 1, width: "100%", marginTop: 0 }}>
            <Text
              style={{
                bottom: -15,
                textAlign: "left",
                left: 18,
                color: "#00000080",
                fontSize: 13,
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
          <TouchableOpacity style={styles.loginButton}>
            <Text
              style={styles.LoginButtonText}
              onPress={() => navigation.navigate("Main")}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.createAcc}>
          <Text
            style={{
              fontSize: 13,
              color: "#004E3F",
              fontFamily: "Roboto_400Regular",
            }}
          >
            Have an account?{" "}
            <Text onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "bold",
                  color: "#004E3F",
                  fontFamily: "Roboto_400Regular",
                }}
              >
                Login
              </Text>
            </Text>
          </Text>
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
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  TopTextOuter: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop:120,
    // borderColor:"red",
    // borderWidth:1,
    paddingBottom: 32,
  },
  TopText: {
    fontSize: 16,
    fontWeight: 400,
  },
  textField: {
    borderRadius: 16,
    width: "100%",
    height: 56,
    margin: 8,
    backgroundColor: "#ECECEC",
    paddingLeft: 16,
    fontSize: 16,
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 24,
    marginRight: 24,
  },
  loginButton: {
    height: 56,
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
    paddingTop: 8,
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
    padding: 12,
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
    marginTop: 5,
    paddingTop: 32,
    paddingBottom: 24,
  },
});