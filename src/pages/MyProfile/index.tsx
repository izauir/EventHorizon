import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./styles";
import { capitalize } from "../../components/capitalize";
import { StackNavigation } from "../../routes/stack.routes";
import welcomeStyles from "../Welcome/styles";

type Event = {
  id: number;
  title: string;
  photo: string;
  // ... outros campos necessários para o evento
};

export default function MyProfile() {
  const navigation = useNavigation<StackNavigation>();
  const [favoriteEvents, setFavoriteEvents] = useState<Event[]>([]);
  const [formattedUsername, setFormattedUsername] = useState<string>("");

  useFocusEffect(
    React.useCallback(() => {
      const fetchFavoriteEvents = async () => {
        try {
          const storedUsername = await AsyncStorage.getItem("username");
          if (storedUsername !== null) {
            const username = capitalize(storedUsername);
            setFormattedUsername(username);

            const response = await axios.get(
              `https://pjpw.vercel.app/favorites/${storedUsername}`,
            );
            const favorites: number[] = response.data.favorites;

            const listResponse = await axios.get<Event[]>(
              "https://pjpw.vercel.app/listar",
            );
            const allEvents = listResponse.data;

            const favoriteEventsData = allEvents.filter((event) =>
              favorites.includes(event.id),
            );

            setFavoriteEvents(favoriteEventsData);
          }
        } catch (error) {
          console.error(error);
          // Trate qualquer erro que ocorrer durante a busca de favoritos
        }
      };

      fetchFavoriteEvents();

      return () => {
        // Limpar dados, se necessário, ao desfocar a tela
      };
    }, []),
  );

  const navigateToFavoriteCard = (eventId: number) => {
    const favoriteEvent = favoriteEvents.find((event) => event.id === eventId);

    if (favoriteEvent) {
      navigation.navigate("card", { eventData: favoriteEvent });
    }
  };

  const handleLogout = () => {
    Alert.alert(
      "Sair",
      "Tem certeza que deseja sair?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancelado"),
          style: "cancel",
        },
        {
          text: "Sair",
          onPress: async () => {
            try {
              // Lógica de logout
              await AsyncStorage.removeItem("username");
              // Redirecionamento para a tela de login (substitua 'login' pelo nome da sua rota de login)
              navigation.navigate("login");
            } catch (error) {
              console.error(error);
              // Trate qualquer erro que possa ocorrer durante o logout
            }
          },
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={welcomeStyles.background}
    >
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Animatable.View
            animation="fadeInLeft"
            delay={350}
            style={{ alignSelf: "center" }}
          >
            <View style={styles.profileImage}>
              <Image
                source={require("../../assets/marshmallow.jpg")}
                style={styles.image}
                resizeMode="center"
              />
            </View>
            <View style={styles.add}>
              <Ionicons
                name="ios-add"
                size={40}
                color="#DFD8C8"
                style={{ marginTop: 6, marginLeft: 2 }}
              />
            </View>
          </Animatable.View>

          <Animatable.View
            animation="fadeInLeft"
            delay={350}
            style={styles.infoContainer}
          >
            <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
              {formattedUsername}
            </Text>
            <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
              Seus favoritos
            </Text>
          </Animatable.View>

          <Animatable.View
            animation="fadeInLeft"
            delay={700}
            style={{ marginTop: 32 }}
          >
            {favoriteEvents.length === 0 ? (
              <Text
                style={{
                  color: "black",
                  textAlign: "center",
                  fontSize: 18,
                }}
              >
                Você ainda não possui eventos favoritados.
              </Text>
            ) : (
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favoriteEvents.map((event: Event) => (
                  <TouchableOpacity
                    key={event.id}
                    onPress={() => navigateToFavoriteCard(event.id)}
                  >
                    <Animatable.View
                      animation="fadeInUp"
                      delay={350}
                      style={styles.mediaImageContainer}
                    >
                      <Image
                        source={{ uri: event.photo }}
                        style={styles.image}
                        resizeMode="cover"
                      />
                    </Animatable.View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            )}
            <TouchableOpacity
              onPress={handleLogout}
              style={styles.logoutButton}
            >
              <Text style={styles.logoutText}>Deslogar</Text>
            </TouchableOpacity>
          </Animatable.View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
