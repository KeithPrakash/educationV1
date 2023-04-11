
import Login from "./Login";
import SignUp from "./SignUp";

import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarShowLabel
        :"false"
        
       }}
      />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="SignUp" component={SignUp} />
    </Tab.Navigator>
  );
}
function Home(){
    return (
         <View style={styles.container}>
      <ScrollView>
        <StatusBar
          barStyle="dark-content"
          color="black"
          hidden={false}
          backgroundColor={"#F1F1F1"}
        />
        <View>
          <View style={styles.header}>
            <View style={{ marginTop: 44 }}>
              <Text style={{ fontSize: 36, fontWeight: 500 }}>Home</Text>
            </View>

            <View style={{ width: 271 }}>
              <Text style={{ fontSize: 14, color: "#000000", opacity: 0.5 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </Text>
            </View>
            <View style={styles.searchBarOuter}>
              <View style={styles.iconOuter}>
                <Image
                  source={require("../assets/iconsearch.png")}
                  style={{ height: 30, width: 30, opacity: 0.5 }}
                />
              </View>
              <View style={styles.searchIntputOuter}>
                <TextInput style={styles.searchIntput} placeholder="Search" />
              </View>
            </View>
            <View style={styles.TopicsOuter}></View>
          </View>
        </View>
      </ScrollView>
      <View style={{height:100}}>
      </View>
    </View>
    );
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 25,
    paddingLeft: 25,
    fontFamily: "Roboto",
    backgroundColor: "F2F2F2",
  },
  header: {
    display: "flex",
    flexDirection: "column",
  },

  searchBarOuter: {
    marginTop: 13,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "auto",
    padding: 0,
  },
  searchIntput: {
    flex: 1,
    fontSize: 16,
    width: "100%",
    backgroundColor: "#ECECEC",
    borderBottomRightRadius: 14,
    borderTopRightRadius: 14,
  },
  searchIntputOuter: {
    flex: 1,
    fontSize: 16,
    width: "100%",
    backgroundColor: "#ECECEC",
    borderBottomRightRadius: 14,
    borderTopRightRadius: 14,
  },
  iconOuter: {
    height: 48,
    width: 48,
    backgroundColor: "#ECECEC",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 14,
    borderTopLeftRadius: 14,
  },
  TopicsOuter: {
    marginTop: 18,
  },
});
