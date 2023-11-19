import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Text,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./styles";
import SearchFilter from "../../components/SearchFilter";
import { StackNavigation } from "../../routes/stack.routes";
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
  const navigation = useNavigation<StackNavigation>();

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

  const handleContainerPress = () => {
    // Navegar para a próxima tela ao clicar no container
    navigation.navigate("card");
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
        {/* Dar o espaço para a tab navigation não cobrir as informações da API */}
        <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
          {/* Renderize os dados conforme necessário */}
          {data.map((item) => (
            <TouchableOpacity
              onPress={handleContainerPress}
              style={styles.informacoesApi}
              key={item.id}
            >
              {/* Renderizar a imagem */}
              <Image source={{ uri: item.photo }} style={[styles.imageApi]} />
              {/* Informações em texto da Api */}
              <Text style={[styles.textApi]}> {item.title}</Text>
              <Text style={[styles.textApi]}>Data: {item.datetime}</Text>
              {/* Adicione mais informações conforme sua API fornece */}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Animatable.View>
    </ImageBackground>
  );
}
