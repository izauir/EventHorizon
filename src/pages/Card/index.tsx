import React from "react";
import { Text, ImageBackground, Image } from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./styles";
import SearchFilter from "../../components/SearchFilter";
import welcomeStyles from "../Welcome/styles";

export default function Card() {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={welcomeStyles.background}
    >
     
    </ImageBackground>
  );
}
