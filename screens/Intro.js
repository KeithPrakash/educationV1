import * as React from "react";
import {View,StyleSheet,Text,StatusBar} from 'react-native';
import Slider from "../components/Slider";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
 export default function Intro({navigation}){
    
    return (
      <View style={styles.containor}>
        <StatusBar
          barStyle="dark-content"
          color="black"
          hidden={false}
          backgroundColor={"rgba(0, 78, 63, 1)"}         
        />
        <Slider navigation={navigation} />
      </View>
    );
 } 

 const styles = StyleSheet.create({
   containor: {
     flex: 1,
     backgroundColor: "rgba(0, 78, 63, 1)",
     display: "flex",
     flexDirection: "row",
     alignItems: "flex-end",
     justifyContent: "center",
     padding: 20,
   },
 });