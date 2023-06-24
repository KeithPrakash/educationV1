import Explore from "./Explore";
import Courses from './Courses';
import Profile from './Profile';
import BoxCard from "../components/BoxCard";
import FreeCard from "../components/FreeCourseCard";
import DegreeCard from "../components/DegreeCard";
import HomeIcon from "../assets/Home.png";
import ExpIcon from "../assets/Search.png";
import CourseIcon from "../assets/Calendar.png"
import ProfileIcon from "../assets/Profile.png"
import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {height:70,paddingTop:15,paddingBottom:10},       
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabelStyle: { color: "black",},
          tabBarShowLabel: "false",
          tabBarIcon: () => <Image source={HomeIcon}  />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabelStyle: { color: "black" },
          tabBarShowLabel: "false",
          tabBarIcon: () => <Image source={ExpIcon} />,
        }}
      />
      <Tab.Screen
        name="Courses"
        component={Courses}
        options={{
          tabBarLabelStyle: { color: "black" },
          tabBarShowLabel: "false",
          tabBarIcon: () => <Image source={CourseIcon} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabelStyle: { color: "black" },
          tabBarShowLabel: "false",
          tabBarIcon: () => <Image source={ProfileIcon} />,
        }}
      />
    </Tab.Navigator>
  );
}
function Home() {
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

  let value = 3;
  const topic = [
    {
      id: 1,
      title: "Business",
      backgroundColor: "rgba(231, 96, 32,0.4)",
      color: "rgba(231, 96, 32,1)",
    },
    {
      id: 2,
      title: "Computer Science",
      backgroundColor: " rgba(4, 114, 215,0.4)",
      color: "#0472D7",
    },
    {
      id: 3,
      title: "Social Science",
      backgroundColor: "rgba(0, 78, 63, 0.4)",
      color: "#004E3F",
    },
    {
      id: 4,
      title: "Art",
      backgroundColor: " rgba(250, 115, 115, 0.4)",
      color: "#4E0000",
    },
  ];
  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      <StatusBar
        barStyle="dark-content"
        color="black"
        hidden={false}
        backgroundColor={"#F1F1F1"}
      />

      {/* <View style={styles.header}></View> */}
      <View style={{ marginTop: 24 }}>
        <Text style={{ fontSize: 36, fontFamily: "Roboto_500Medium" }}>
          Home
        </Text>
      </View>
      <Text
        style={{
          fontSize: 14,
          color: "#000000",
          opacity: 0.5,
          fontFamily: "Roboto_400Regular",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </Text>

      <View style={styles.searchBarOuter}>
        <View style={styles.iconOuter}>
          <Image
            source={require("../assets/Search.png")}
            style={{ height: 24, width: 24, opacity: 0.5 }}
          />
        </View>
        <View style={styles.searchIntputOuter}>
          <TextInput style={styles.searchIntput} placeholder="Search" />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}
        >
        <View>
          <View style={styles.TopicsOuter}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Roboto_500Medium",
                }}
              >
                Topics
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Text
                style={{
                  color: "#004E3F",
                  opacity: 0.7,
                  fontSize: 12,
                  fontFamily: "Roboto_400Regular",
                }}
              >
                See All
              </Text>
            </View>
          </View>

          <ScrollView
            style={styles.topicsInner}
            horizontal="true"
            contentContainerStyle={{
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            {topic.map((e) => {
              return (
                <View
                  style={{
                    marginRight: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  key={e.id}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: e.backgroundColor,
                      paddingBottom: 3,
                      paddingTop: 3,
                      paddingRight: 10,
                      paddingLeft: 10,
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: 0,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        color: e.color,
                        lineHeight: 18,
                        fontFamily: "Roboto_400Regular",
                      }}
                    >
                      {e.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View>
          <View style={styles.TopicsOuter}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Roboto_500Medium",
                }}
              >
                Most Popular Certificate
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Text
                style={{
                  color: "#004E3F",
                  opacity: 0.7,
                  fontSize: 12,
                  fontFamily: "Roboto_400Regular",
                }}
              >
                See All
              </Text>
            </View>
          </View>
          <View style={styles.populurCourseOuter}>
            <BoxCard />
            <BoxCard />
            <BoxCard />
            <BoxCard />
          </View>
          <View style={styles.TopicsOuter}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Roboto_500Medium",
                }}
              >
                Earn Your Degree
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Text
                style={{
                  color: "#004E3F",
                  opacity: 0.7,
                  fontSize: 12,
                  fontFamily: "Roboto_400Regular",
                }}
              >
                See All
              </Text>
            </View>
          </View>
          <View style={styles.populurCourseOuter}>
            <DegreeCard />
            <DegreeCard />
          </View>
          <View style={styles.bannerOuter}>
            <ImageBackground
              source={require("../assets/uniPic.png")}
              style={{ flex: 1, resizeMode: "cover" }}
            >
              <LinearGradient
                // Background Linear Gradient
                colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.75)"]}
                style={styles.gradient}
              >
                <View style={styles.bannerInner}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      fontFamily: "Roboto_400Regular",
                      lineHeight: 22,
                    }}
                  >
                    MS in Management : Digital
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      fontFamily: "Roboto_400Regular",
                      lineHeight: 22,
                    }}
                  >
                    Transformation in Healthcare
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "white",
                      opacity: 0.77,
                      fontFamily: "Roboto_400Regular",
                    }}
                  >
                    Northeastern University
                  </Text>
                </View>
              </LinearGradient>
            </ImageBackground>
          </View>
          <View style={styles.TopicsOuter}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Roboto_500Medium",
                }}
              >
                Free Courses
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Text
                style={{
                  color: "#004E3F",
                  opacity: 0.7,
                  fontSize: 12,
                  fontFamily: "Roboto_400Regular",
                }}
              >
                See All
              </Text>
            </View>
          </View>
          <FreeCard />
          <FreeCard />
          <FreeCard />
          <FreeCard />
          <FreeCard />
        </View>
      </ScrollView>

      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: "rgba(242, 242, 242, 1)",
  },

  searchBarOuter: {
    marginTop: 8,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "auto",
    padding: 0,
    paddingBottom:8,
  },
  searchIntput: {
    flex: 1,
    fontSize: 16,
    width: "100%",
    backgroundColor: "#ECECEC",
    borderBottomRightRadius: 14,
    borderTopRightRadius: 14,
    fontFamily: "Roboto_400Regular",
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
    // flex: 1,
  marginTop:8,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 4,
  },
  topicsInner: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    // flex: 1,
    // borderColor: "red",
    // borderWidth: 1,
    height: 40,
  },

  populurCourseOuter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  bannerOuter: {
    height: 300,
    width: "100%",
    // borderRadius:32,
    marginTop: 16,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,

    borderRadius: 25,
  },
  bannerInner: {
    flex: 1,
    marginLeft: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    bottom: 30,
  },
});
