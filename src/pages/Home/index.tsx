import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, ImageBackground, View, ScrollView } from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./styles";
import SearchFilter from "../../components/SearchFilter";
import welcomeStyles from "../Welcome/styles";

interface EventData {
  id: number;
  title: string;
  description: string;
  datetime: string;
  photo: string;
  // Adicione mais campos conforme a estrutura dos dados recebidos da API
}

export default function Home() {
  const [data, setData] = useState<EventData[]>([]);
  // O "a" é apenas para não deixar a váriavel vazia e quebrar o código.
  const [searchTerm, setSearchTerm] = useState<string>("a");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<EventData[]>(
          `https://pjpw.vercel.app/listar?filtro=${searchTerm}`,
        );
        setData(response.data);
        console.log(response.data); // Adicione este console.log para verificar os dados recebidos
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        // Lide com o erro, talvez exibindo uma mensagem para o usuário
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleSearch = (text: string) => {
    // Defina um valor padrão se o texto estiver vazio
    const term = text.trim() === "" ? "a" : text;
    setSearchTerm(term);
  };

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
        <SearchFilter
          icon="search"
          onChangeText={handleSearch}
          placeholder=" Nome do evento ou artista"
        />
      </Animatable.View>

      {/* Exibição dos dados da API */}
      <Animatable.View animation="fadeInUp" delay={350}>
        <Text style={[styles.text, { fontWeight: "400", fontSize: 20 }]}>
          Últimas atualizações:
        </Text>
        <ScrollView>
          {/* Renderize os dados conforme necessário */}
          {data.map((item) => (
            <View style={styles.informacoesApi} key={item.id}>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text>{item.photo}</Text>
              <Text>{item.datetime}</Text>
              {/* Adicione mais informações conforme sua API fornece */}
            </View>
          ))}
        </ScrollView>
      </Animatable.View>
    </ImageBackground>
  );
}
