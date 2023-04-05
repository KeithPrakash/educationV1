import { View, Text, StyleSheet, ScrollView,TextInput, Button, TouchableOpacity,Image} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LearnMoreLinks } from "react-native/Libraries/NewAppScreen";

export default function SignUp({navigation}) {
    return (
      <ScrollView style={styles.container}>
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
                fontSize: 16,
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
                fontSize: 16,
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
                fontSize: 16,
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
            <Text style={styles.LoginButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.createAcc}>
          <Text style={{ fontSize: 16, color: "#004E3F" }}>
            Have an account?{" "}
            <Text onPress={() => navigation.navigate("Login")}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#004E3F" }}
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
    height: 180,
    // borderColor:"red",
    // borderWidth:1,
    paddingBottom: 40,
  },
  TopText: {
    fontSize: 20,
    fontWeight: 400,
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
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 25,
    marginRight: 25,
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
    padding: 50,
    paddingBottom:30
  },
});