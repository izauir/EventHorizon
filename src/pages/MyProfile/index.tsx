import React from "react";
import { Text, View, ImageBackground } from "react-native";

import styles from "./styles";
import welcomeStyles from "../Welcome/styles";

export default function MyProfile() {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={welcomeStyles.background}
    >
      <View style={styles.container}>
        <Text style={styles.Text}>Olá sou o Lucas Oliver!</Text>
      </View>
    </ImageBackground>
  );
}
