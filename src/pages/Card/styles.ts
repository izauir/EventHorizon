import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row", // Define o layout para linha (horizontal)
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
    fontSize: 17,
    fontWeight: "300",
  },
  imageApi: {
    width: 300,
    height: 250,
    resizeMode: "contain",
    // Adicione seus estilos aqui
    borderRadius: 10, // Bordas arredondadas
    borderWidth: 2, // Largura da borda
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25, // Opacidade da sombra
    shadowRadius: 3.84, // Raio da sombra
  },
  button: {
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
  buttonText: {
    fontSize: 20,
    color: "#FFF",
  },
});
