import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
  LogBox,
} from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./styles";
import { type StackNavigation } from "../../routes/stack.routes";
import welcomeStyles from "../Welcome/styles";

LogBox.ignoreAllLogs(true); // Serve para esconder os blocos de erro em vermelho que aparece na tela.

export default function SignIn() {
  const navigation = useNavigation<StackNavigation>();

  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorUsuario, setErrorUsuario] = useState("");
  const [errorSenha, setErrorSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Novo estado

  const validarEmail = () => {
    // Lógica de validação do e-mail
    if (!email || !email.includes("@")) {
      setErrorEmail("Digite um e-mail válido");
    } else {
      setErrorEmail("");
    }
  };

  const validarUsuario = () => {
    // Lógica de validação do usuário
    if (!usuario) {
      setErrorUsuario("Digite um nome de usuário válido");
    } else {
      setErrorUsuario("");
    }
  };

  const validarSenha = () => {
    // Lógica de validação da senha
    if (!senha || senha.length < 6) {
      setErrorSenha("A senha deve ter pelo menos 6 caracteres");
    } else {
      setErrorSenha("");
    }
  };

  const handleCadastro = async () => {
    setIsButtonDisabled(true); // Desativa o botão
    setTimeout(() => setIsButtonDisabled(false), 2000); // Reativa o botão "Cadastrar" após 2 segundos

    // Realize as validações antes de navegar para a próxima tela
    validarEmail();
    validarUsuario();
    validarSenha();

    // Se todas as validações passarem, você pode navegar para a próxima tela
    if (
      !email ||
      !usuario ||
      !senha ||
      errorEmail ||
      errorUsuario ||
      errorSenha
    ) {
      // Se algum campo não estiver preenchido, exibe uma mensagem ou toma outra ação
      Alert.alert("Preencha todos os campos corretamente.");
    } else {
      try {
        console.log("Enviando dados para a API:", {
          username: usuario,
          password: senha,
        });
        const response = await axios.post("https://pjpw.vercel.app/registro", {
          username: usuario,
          password: senha,
        });

        console.log("Resposta da API:", response.data);

        if (response.data.message === "Usuário criado com sucesso!") {
          // Limpa os campos após o cadastro
          setEmail("");
          setUsuario("");
          setSenha("");
          setErrorEmail("");
          setErrorUsuario("");
          setErrorSenha("");

          Alert.alert("Cadastro realizado com sucesso!");
          navigation.navigate("login");
        } else {
          // Trata outros tipos de respostas aqui
          Alert.alert(response.data.message);
        }
      } catch (error) {
        if (error && (error as AxiosError).response) {
          const axiosError = error as AxiosError;
          console.error("Erro ao fazer a solicitação para a API:", axiosError);
          if (axiosError.response && axiosError.response.status === 400) {
            Alert.alert("O usuário já existe.");
          } else {
            Alert.alert("Ocorreu um erro ao tentar cadastrar o usuário.");
          }
        }
      }
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
          <Text style={styles.messageHeader}>Cadastre-se!</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.messageLoginSenha}>
            <Ionicons name="mail" size={20} color="black" /> E-mail
          </Text>
          <TextInput
            placeholder="Seu melhor e-mail"
            onChangeText={(text) => setEmail(text)}
            onBlur={validarEmail}
            style={styles.inputLoginSenha}
          />
          {errorEmail && <Text style={styles.errorMessage}>{errorEmail}</Text>}
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.messageLoginSenha}>
            <AntDesign name="user" size={20} color="black" /> Usuário
          </Text>
          <TextInput
            placeholder="Digite o usuário"
            onChangeText={(text) => setUsuario(text)}
            onBlur={validarUsuario}
            style={styles.inputLoginSenha}
          />
          {errorUsuario && (
            <Text style={styles.errorMessage}>{errorUsuario}</Text>
          )}
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.messageLoginSenha}>
            <Ionicons name="key" size={20} color="black" /> Senha
          </Text>
          <TextInput
            placeholder="Digite sua senha"
            onChangeText={(text) => setSenha(text)}
            onBlur={validarSenha}
            secureTextEntry={!mostrarSenha}
            style={styles.inputLoginSenha}
          />
          <TouchableOpacity
            onPress={() => setMostrarSenha(!mostrarSenha)}
            style={styles.eyeIconContainer}
          >
            <Ionicons
              name={mostrarSenha ? "eye-off" : "eye"}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
          {errorSenha && <Text style={styles.errorMessage}>{errorSenha}</Text>}
        </Animatable.View>
        {/* Botão para cadastrar */}
        <Animatable.View animation="fadeInUp">
          <TouchableOpacity
            onPress={handleCadastro}
            style={[
              styles.buttonCadastrar,
              isButtonDisabled ? { opacity: 0.5 } : { opacity: 1 },
            ]}
            disabled={isButtonDisabled}
          >
            <Text style={styles.buttonCadastroText}>Cadastrar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </ImageBackground>
  );
}
