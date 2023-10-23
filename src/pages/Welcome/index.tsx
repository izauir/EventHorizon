import React from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./styles";

export default function Search() {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Animatable.Image
            animation="flipInY"
            source={require("../../assets/logo.png")}
            style={{ width: "100%" }}
            resizeMode="contain"
          />
        </View>

        <Animatable.View
          delay={600}
          animation="fadeInUp"
          style={styles.containerForm}
        >
          <Text style={styles.title}>Sua melhor experiência!</Text>
          <Text style={styles.text}>Faça o login para começar</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </ImageBackground>
  );
}
