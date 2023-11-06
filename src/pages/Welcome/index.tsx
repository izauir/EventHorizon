import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./styles";
import { type StackNavigation } from "../../routes/stack.routes";

export default function Welcome() {
  const navigation = useNavigation<StackNavigation>();

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
            style={{ width: 300, height: 200 }}
            resizeMode="contain"
          />
        </View>

        <Animatable.View
          delay={600}
          animation="fadeInUp"
          style={styles.containerForm}
        >
          <Text style={styles.title}>Descubra eventos</Text>
          <Text style={styles.text}>Faça o login para começar</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("login")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </ImageBackground>
  );
}
