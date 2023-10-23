import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  // Feito para estilizar o background das páginas
  background: {
    flex: 1,
    resizeMode: "cover", // ou 'contain' para ajustar a imagem conforme necessário
  },
});
