import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  //Estilo do "Cadastre-se"
  containerHeader: {
    flex: 0, //Caso precise separar o header
    marginTop: "16%",
    marginBottom: "8%",
    alignItems: "center",
  },
  messageHeader: {
    fontSize: 24,
    fontWeight: "bold",
  },
  // Estilo de login e senha
  containerForm: {
    paddingStart: "5%",
    paddingEnd: "6%",
  },
  messageLoginSenha: {
    fontSize: 18,
    marginTop: 28,
  },
  inputLoginSenha: {
    borderBottomWidth: 1,
    height: 40,
    fontSize: 16,
  },
  buttonCadastrar: {
    backgroundColor: "#4F46E5",
    borderRadius: 5,
    paddingVertical: 8,
    width: "80%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonCadastroText: {
    fontSize: 16,
    color: "#FFF",
  },
});
