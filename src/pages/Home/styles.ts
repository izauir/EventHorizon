import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginLeft: 10,
    marginTop: 10,
  },
  textApi: {
    marginLeft: 10,
    marginTop: 10,
    color: "white",
    flex: 1,
    fontSize: 16,
    fontWeight: "300",
  },
  imageApi: {
    borderRadius: 10,
    width: 120,
    height: 120,
  },
  informacoesApi: {
    marginLeft: 15,
    marginTop: 15,
    marginRight: 20,
    backgroundColor: "#292929",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    flexDirection: "row", // Organiza os elementos na horizontal
    alignItems: "center", // Alinha os itens verticalmente ao centro
    marginBottom: 0, // Espaçamento entre os blocos de informações
  },
});
