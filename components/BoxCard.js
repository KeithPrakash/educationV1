import {
 
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
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

const BoxCard = () => {
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
      <View style={styles.populorCourseCard}>
        <View style={styles.courseImageOuter}>
          <Image
            source={require("../assets/jason-goodman-Oalh2MojUuk-unsplash.jpg")}
            style={{
              width: "100%",
              height: 80,
              alignSelf: "center",
              borderRadius: 10,
            }}
          />
        </View>
        <View style={styles.cardBottom}>
          <Text style={{ fontSize: 14, fontFamily: "Roboto_500Medium" }}>
            Google Data Analytics
          </Text>
          <Text
            style={{
              fontSize: 11,
              fontFamily: "Roboto_400Regular",
              opacity: 0.75,
            }}
          >
            Google Proffesi...
          </Text>
          <View>
            <Rating
              ratingCount={5}
              readonly="true"
              imageSize={10}
              style={{ paddingTop: 5, paddingBottom: 5 }}
            />
          </View>
        </View>
      </View>
    );
}
 const styles = StyleSheet.create({
   populorCourseCard: {
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
     width: "48.8%",
     maxHeight: "auto",
     backgroundColor: "#FFFFFF",
     borderRadius: 14,
     padding: 8,
     marginTop:8,
   },
   courseImageOuter: {
     width: "100%",
     resizeMode: "contain",
   },
   cardBottom: {
     width:'100%',
     display: "flex",
     flexDirection: "column",
     alignItems: "flex-start",
     paddingTop: 16,
    //  borderColor: "blue",
    //  borderWidth: 1,
   },
 });
export default BoxCard;