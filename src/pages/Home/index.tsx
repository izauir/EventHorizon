import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, ImageBackground } from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./styles";
import SearchFilter from "../../components/SearchFilter";
import welcomeStyles from "../Welcome/styles";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Função para fazer a chamada à API
    const fetchData = async () => {
      try {
        const response = await axios.get("http://pjpw.vercel.app/listar");
        setData(response.data); // Atualiza o estado com os dados da API
      } catch (error) {
        console.error("Erro na chamada à API:", error);
      }
    };

    // Chama a função de chamada à API
    fetchData();
  }, []); // O segundo argumento [] indica que este efeito colateral só deve ser executado uma vez (equivalente a componentDidMount)

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
