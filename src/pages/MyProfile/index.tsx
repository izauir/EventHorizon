import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View, ImageBackground, ScrollView, Image } from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./styles";
import welcomeStyles from "../Welcome/styles";

export default function MyProfile() {
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
              Izauir
            </Text>
            <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
              Seus favoritos
            </Text>
          </Animatable.View>

          <View style={{ marginTop: 32 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Animatable.View animation="fadeInUp" delay={350} style={styles.mediaImageContainer}>
                <Image
                  source={require("../../assets/media1.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                />
              </Animatable.View>
              <Animatable.View animation="fadeInUp" delay={450} style={styles.mediaImageContainer}>
                <Image
                  source={require("../../assets/media2.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                />
              </Animatable.View>
              <Animatable.View animation="fadeInUp" delay={550} style={styles.mediaImageContainer}>
                <Image
                  source={require("../../assets/media3.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                />
              </Animatable.View>
            </ScrollView>
            <Animatable.View
              animation="fadeInLeft"
              delay={1000}
              style={styles.mediaCount}
            >
              <Text
                style={[
                  styles.text,
                  { fontSize: 15, color: "#DFD8C8", fontWeight: "300" },
                ]}
              >
                Melhores
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 12,
                    color: "#DFD8C8",
                    textTransform: "uppercase",
                  },
                ]}
              >
                Eventos
              </Text>
            </Animatable.View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
