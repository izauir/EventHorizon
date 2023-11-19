import React from "react";
import { Text, ImageBackground, Image } from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./styles";
import SearchFilter from "../../components/SearchFilter";
import welcomeStyles from "../Welcome/styles";

export default function Search() {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={welcomeStyles.background}
    >
      {/* Header */}
      <Animatable.View
        animation="fadeInLeft"
        delay={350}
        style={styles.container}
      >
        <Image
          source={require("../../assets/logoBuscar.png")}
          style={styles.imageLogo}
        />
        <Text
          style={[styles.textPesquisar, { fontWeight: "500", fontSize: 22 }]}
        >
          Pesquisar
        </Text>
      </Animatable.View>

      {/* Barra de busca */}
      <Animatable.View animation="fadeInUp" delay={350}>
        <SearchFilter
          icon="search"
          placeholder=" Nome do evento ou artista"
          onChangeText={undefined}
        />
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={350}>
        <Text style={[styles.text, { fontWeight: "400", fontSize: 20 }]}>
          Resultados:
        </Text>
      </Animatable.View>
    </ImageBackground>
  );
}
