import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./styles";
import { type StackNavigation } from "../../routes/stack.routes";
import welcomeStyles from "../Welcome/styles";

export default function Login() {
  const navigation = useNavigation<StackNavigation>();

  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={welcomeStyles.background}
    >
      <View style={styles.container}>
        <Animatable.View
          animation="fadeInLeft"
          delay={500}
          style={styles.containerHeader}
        >
          <Text style={styles.messageHeader}>Bem-vindo(a) ao Horizon</Text>
        </Animatable.View>

        {/* Input de Login e Senha */}
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.messageLoginSenha}>
            <AntDesign name="user" size={20} color="black" /> Usuário
          </Text>
          <TextInput
            placeholder="Digite o usuário"
            style={styles.inputLoginSenha}
          />
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.messageLoginSenha}>
            <Ionicons name="key" size={20} color="black" /> Senha
          </Text>
          <TextInput
            placeholder="Digite sua senha"
            style={styles.inputLoginSenha}
          />
        </Animatable.View>

        {/* Botão para entrar */}
        <Animatable.View animation="fadeInUp">
          <TouchableOpacity
            onPress={() => navigation.navigate("tabrouteshome")}
            style={styles.buttonLogin}
          >
            <Text style={styles.buttonLoginText}>Entrar</Text>
          </TouchableOpacity>
        </Animatable.View>

        <Animatable.View animation="fadeInUp">
          <TouchableOpacity
            onPress={() => navigation.navigate("signin")}
            style={styles.buttonRegister}
          >
            <Text style={styles.buttonRegisterText}>
              Não possui uma conta? Cadastre-se!
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </ImageBackground>
  );
}
