import { Ionicons, AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./styles";
import { type StackNavigation } from "../../routes/stack.routes";
import welcomeStyles from "../Welcome/styles";

export default function Login() {
  const navigation = useNavigation<StackNavigation>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Novo estado

  const handleLogin = async () => {
    setIsButtonDisabled(true); // Desativa o botão
    setTimeout(() => setIsButtonDisabled(false), 2000); // Reativa o botão "Entrar" após 2 segundos

    if (!username || !password) {
      Alert.alert("Nome de usuário e senha são obrigatórios!");
      return;
    }

    // Aqui você pode chamar sua API para verificar as credenciais
    try {
      const response = await fetch("https://pjpw.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      console.log("Resposta da API:", response);

      if (response.status === 200) {
        await AsyncStorage.setItem("username", username);
        Alert.alert("Usuário autenticado com sucesso!");
        navigation.navigate("tabrouteshome");
      } else {
        Alert.alert("Credencias inválidas!");
      }
    } catch (error) {
      console.error("Erro ao conectar com a API:", error);
    }
  };

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
            onChangeText={setUsername}
            value={username}
          />
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.messageLoginSenha}>
            <Ionicons name="key" size={20} color="black" /> Senha
          </Text>
          <TextInput
            placeholder="Digite sua senha"
            style={styles.inputLoginSenha}
            onChangeText={setPassword}
            value={password}
          />
        </Animatable.View>

        {/* Botão para entrar */}
        <Animatable.View animation="fadeInUp">
          <TouchableOpacity
            onPress={handleLogin}
            style={[
              styles.buttonLogin,
              isButtonDisabled ? { opacity: 0.5 } : { opacity: 1 },
            ]}
            disabled={isButtonDisabled}
          >
            <Text style={styles.buttonLoginText}>Entrar</Text>
          </TouchableOpacity>
        </Animatable.View>

        <Animatable.View animation="fadeInUp">
          <TouchableOpacity
            onPress={() => navigation.navigate("signin")}
            style={styles.buttonRegister}
          >
            <Text style={styles.naoPossuiContaText}>Não possui uma conta?</Text>
            <Text style={styles.buttonRegisterText}> Cadastre-se!</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </ImageBackground>
  );
}
