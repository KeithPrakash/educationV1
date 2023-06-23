import * as React from "react";
import {useRef,useEffect,useState} from 'react';
import {Animated,View, Text, StyleSheet,TouchableOpacity}from 'react-native';
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";

const Slider = () => {
 
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
     fontWeight: "400",
   },
   header: {
     fontWeight: "600",
     fontSize: 24,
    //  paddingTop: 15,
     textAlign: "center",
   },
   text: {
     fontWeight: "400",
     fontStyle: "normal",
     fontSize: 14, 
     padding: 20,
     textAlign: "center",
     color: "rgba(0, 0, 0, 0.5)",
     marginBottom:20
   },
  
 });
 
 
export default Slider;