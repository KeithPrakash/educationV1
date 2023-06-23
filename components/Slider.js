import * as React from "react";
import {useRef,useEffect,useState} from 'react';
import {Animated,View, Text, StyleSheet,TouchableOpacity}from 'react-native';
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";
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

const Slider = () => {
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

    const navigation = useNavigation();
    const startValue = useRef(new Animated.Value(0)).current;
    const endValue = 1;
    const duration = 1000;
    useEffect(() => {
      Animated.timing(startValue, {
        toValue: endValue,
        duration: duration,
        useNativeDriver: true,
      }).start();
    }, [startValue]);

    return (
      <Animated.View style={[styles.CardOuter, { opacity: startValue }]}>
        <Text style={styles.header}>Discover The Best Online Course</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quos amet rerum sunt corrupti alias animi similique iusto vitae voluptatem. Ipsum tempore, explicabo repudiandae ipsa voluptas voluptatum natus iure a.</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </Animated.View>
    );
}


 const styles = StyleSheet.create({
   CardOuter: {
     backgroundColor: "white",
     borderRadius: 25,
     padding: 20,
   },
   button: {
     height: 58,
     width: "100%",
     backgroundColor: "#E76020",
     borderRadius: 16,
     alignItems: "center",
     justifyContent: "center",
   },
   buttonText: {
     color: "white",
     fontSize: 20,
     fontFamily: "Roboto_400Regular",
   },
   header: {
     fontSize: 24,
     //  paddingTop: 15,
     textAlign: "center",
     fontFamily: "Roboto_500Medium",
   },
   text: {
    fontFamily: "Roboto_400Regular",
     fontSize: 14,
     padding: 20,
     textAlign: "center",
     color: "rgba(0, 0, 0, 0.5)",
     marginBottom: 20,
   },
 });
 
 
export default Slider;