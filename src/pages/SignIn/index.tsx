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

export default function SignIn() {
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
          <Text style={styles.messageHeader}>Cadastre-se!</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.messageLoginSenha}>E-mail</Text>
          <TextInput
            placeholder="Seu melhor e-mail"
            style={styles.inputLoginSenha}
          />
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.messageLoginSenha}>Usuário</Text>
          <TextInput
            placeholder="Digite o usuário"
            style={styles.inputLoginSenha}
          />
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <Text style={styles.messageLoginSenha}>Senha</Text>
          <TextInput
            placeholder="Digite sua senha"
            style={styles.inputLoginSenha}
          />
        </Animatable.View>

        <Animatable.View animation="fadeInUp">
          <TouchableOpacity
            onPress={() => navigation.navigate("login")}
            style={styles.buttonCadastrar}
          >
            <Text style={styles.buttonCadastroText}>Cadastrar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </ImageBackground>
  );
}
