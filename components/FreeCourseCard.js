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
const FreeCourseCard = () => {
  return (
    <View style={styles.populorCourseCard}>
      <View style={styles.courseImageOuter}>
        <Image
          source={require("../assets/jason-goodman-Oalh2MojUuk-unsplash.jpg")}
          style={{
            width: "100%",
            height: 70,
            borderRadius: 10,
          }}
        />
      </View>
      <View style={styles.cardBottom}>
        <Text style={{ fontSize: 14, fontWeight: "600" }}>
          Google Data Analytics
        </Text>
        <Text style={{ fontSize: 11, fontWeight: "400", opacity: 0.75 }}>
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
};
const styles = StyleSheet.create({
  populorCourseCard: {
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    maxHeight: "auto",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 10,
    marginTop: 5,
  },
  courseImageOuter: {
    width: "30%",
    resizeMode: "cover",
   
  },
  cardBottom: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: 10,
    paddingLeft:10,
 
  },
});
export default FreeCourseCard;
