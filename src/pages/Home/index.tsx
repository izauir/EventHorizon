import React from "react";
import { Text, ImageBackground } from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./styles";
import SearchFilter from "../../components/SearchFilter";
import welcomeStyles from "../Welcome/styles";

export default function Home() {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={welcomeStyles.background}
    >
      {/* Header, mensagem de bem-vindo */}
      <Animatable.View animation="fadeInLeft" delay={350}>
        <Text style={[styles.text, { fontWeight: "300", fontSize: 22 }]}>
          Olá, Izauir!
        </Text>
      </Animatable.View>

      {/* Barra de busca */}
      <Animatable.View animation="fadeInUp" delay={350}>
        <SearchFilter icon="search" placeholder=" Nome do evento ou artista" />
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={350}>
        <Text style={[styles.text, { fontWeight: "400", fontSize: 20 }]}>
          Últimas atualizações:
        </Text>
      </Animatable.View>
    </ImageBackground>
  );
}
