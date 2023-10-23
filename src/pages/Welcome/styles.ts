import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLogo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    flex: 0.8,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: "#A1A1A1",
  },
  button: {
    position: "absolute",
    backgroundColor: "#4F46E5",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 17,
  },
  // Feito para estilizar o background das páginas
  background: {
    flex: 1,
    resizeMode: "cover", // ou 'contain' para ajustar a imagem conforme necessário
  },
});
