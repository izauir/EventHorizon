import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ImageBackground,
  Text,
  View,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./styles";
import { StackNavigation } from "../../routes/stack.routes";
import { EventData } from "../Home";
import welcomeStyles from "../Welcome/styles";

type CardRouteParams = {
  card: {
    eventData: EventData;
  };
};

function removeTags(str: string) {
  if (str === null || str === undefined || str === "") return false;
  else str = str.toString();
  // Expressão regular para identificar tags HTML na
  // string de entrada. Substituindo a tag HTML identificada
  // por uma string nula.
  return str.replace(/(<([^>]+)>)/gi, "");
}

export default function Card() {
  const navigation = useNavigation<StackNavigation>();
  const route = useRoute<RouteProp<CardRouteParams, "card">>();

  // Agora o TypeScript sabe que route.params tem uma propriedade eventData
  const { eventData } = route.params;

  // Removendo tags da descrição
  const description = removeTags(eventData.description);

  // Estado para o favorito
  const [isFavorited, setFavorited] = useState(false);

  // Estado para o username
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsernameAndFavorites = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem("username");
        if (storedUsername !== null) {
          setUsername(storedUsername);

          // Busque os favoritos do usuário
          const response = await axios.get(
            `https://pjpw.vercel.app/favorites/${storedUsername}`,
          );
          const favorites = response.data.favorites;

          // Verifique se o evento atual está entre os favoritos
          setFavorited(favorites.includes(eventData.id));
        }
      } catch (error) {
        // Trate qualquer erro que ocorrer durante a leitura do armazenamento
        console.error(error);
        Alert.alert(
          "Erro",
          "Ocorreu um erro ao buscar o nome de usuário ou os favoritos. Por favor, tente novamente.",
        );
      }
    };

    fetchUsernameAndFavorites();
  }, []);

  const handleFavorite = async () => {
    try {
      if (isFavorited) {
        // Se o evento já foi favoritado, faça uma requisição DELETE para desfavoritar
        await axios.delete(`https://pjpw.vercel.app/favorites/${username}`, {
          data: { event_id: eventData.id },
        });
        Alert.alert("Sucesso", "Evento desfavoritado com sucesso!");
      } else {
        // Se o evento não foi favoritado, faça uma requisição POST para favoritar
        await axios.post(`https://pjpw.vercel.app/favorites/${username}`, {
          event_id: eventData.id,
        });
        Alert.alert("Sucesso", "Evento favoritado com sucesso!");
      }

      // Atualize o estado do favorito
      setFavorited(!isFavorited);
    } catch (error) {
      console.error(error);
      // Trate qualquer erro que ocorrer durante a requisição
      Alert.alert(
        "Erro",
        "Ocorreu um erro ao favoritar o evento. Por favor, tente novamente.",
      );
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={welcomeStyles.background}
    >
      <View style={{ flex: 1 }}>
        <SafeAreaView
          style={{ flexDirection: "row", marginHorizontal: 16, marginTop: 20 }}
        >
          <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
            <FontAwesome name="arrow-circle-left" size={28} color="black" />
          </Pressable>

          {/* Altere esta linha para alternar entre coração preenchido e vazio */}
          <Animatable.View animation="pulse" iterationCount={5}>
          <Pressable onPress={handleFavorite}>
            <FontAwesome
              name={isFavorited ? "heart" : "heart-o"}
              size={28}
              color="black"
            />
          </Pressable>
          </Animatable.View>
        </SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Animatable.View animation="fadeInUp"
            style={{
              marginLeft: 15,
              marginTop: 15,
              marginRight: 20,
              backgroundColor: "#292929",
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "gray",
              padding: 30,
              alignItems: "center", // Alinha os itens verticalmente ao centro
            }}
          >
            <Image
              source={{
                uri: eventData.photo,
              }}
              style={styles.imageApi}
            />

            {/* Titulo */}
            <Text
              style={{
                marginTop: 15,
                fontSize: 28,
                marginRight: 20,
                fontWeight: "400",
                color: "white",
              }}
            >
              {eventData.title}
            </Text>

            <Animatable.View animation="fadeInUp" style={{ flex: 0.5 }}>
              {/* Descrição do Card */}
              <Text style={[styles.textApi]}>Data: {eventData.datetime}</Text>
              <Text style={styles.textApi}>{description}</Text>

              {/* Botão para comprar ingresso */}
              <Animatable.View animation="fadeInUp">
                <TouchableOpacity
                  onPress={() => {
                    const url = eventData.link.startsWith("http")
                      ? eventData.link
                      : "http://" + eventData.link;
                    Linking.openURL(url);
                  }}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Comprar ingresso</Text>
                </TouchableOpacity>
              </Animatable.View>
            </Animatable.View>
          </Animatable.View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
