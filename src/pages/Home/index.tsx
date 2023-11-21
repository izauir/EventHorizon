import { useFocusEffect, useNavigation } from "@react-navigation/native";
import axios from "axios";
import * as Network from "expo-network";
import React, { useState } from "react";
import {
  Text,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./styles";
import { StackNavigation } from "../../routes/stack.routes";
import welcomeStyles from "../Welcome/styles";

export interface EventData {
  link: string;
  id: number;
  title: string;
  description: string;
  datetime: string;
  photo: string;
  // Adicione mais campos conforme a estrutura dos dados recebidos da API
}

export default function Home() {
  const [data, setData] = useState<EventData[]>([]);
  // O "a" é apenas para não deixar a váriavel vazia e não quebrar o código.
  const [searchTerm] = useState<string>("a");
  const navigation = useNavigation<StackNavigation>();

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        // Verifique a conectividade antes de fazer a chamada da API
        const netInfo = await Network.getNetworkStateAsync();
        if (!netInfo.isConnected) {
          Alert.alert("Você não está conectado à internet!");
          return;
        }

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

      return () => {
        // Limpar dados, se necessário, ao desfocar a tela
      };
    }, [searchTerm]),
  );

  const handleContainerPress = (eventData: EventData) => {
    // Navegar para a próxima tela enviando os dados do evento como parâmetros
    navigation.navigate("card", { eventData });
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

      <Animatable.View animation="fadeInLeft" delay={400}>
        <Text style={[styles.text, { fontWeight: "300", fontSize: 18 }]}>
          Hoje é {new Date().toLocaleDateString()}, já sabe qual é seu próximo
          evento?
        </Text>
      </Animatable.View>

      {/* Exibição dos dados da API */}
      <Animatable.View animation="fadeInUp" delay={450}>
        <Text style={[styles.text, { fontWeight: "400", fontSize: 20 }]}>
          Últimas atualizações:
        </Text>
        {/* Dar o espaço para a tab navigation não cobrir as informações da API */}
        <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
          {/* Renderize os dados conforme necessário */}
          {data.map((item) => (
            <Animatable.View animation="fadeInLeft" delay={500} key={item.id}>
              <TouchableOpacity
                onPress={() => handleContainerPress(item)}
                style={styles.informacoesApi}
              >
                {/* Renderizar a imagem */}
                <Image source={{ uri: item.photo }} style={[styles.imageApi]} />
                {/* Informações em texto da Api */}
                <Text style={[styles.textApi]}> {item.title}</Text>
                <Text style={[styles.textApi]}>Data: {item.datetime}</Text>
                {/* Adicione mais informações conforme sua API fornece */}
              </TouchableOpacity>
            </Animatable.View>
          ))}
        </ScrollView>
      </Animatable.View>
    </ImageBackground>
  );
}
