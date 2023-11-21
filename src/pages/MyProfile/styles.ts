import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    //fontFamily: "HelveticaNeue",
    color: "#52575D",
  },
  image: {
    flex: 1.0,
    height: undefined,
    width: undefined,
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    marginTop: 20,
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  logoutButton: {
    backgroundColor: "#4F46E5",
    borderRadius: 5,
    paddingVertical: 8,
    width: "30%",
    bottom: "15%",
    alignItems: "center",
    marginTop: 80,
    alignSelf: "center",
  },
  logoutText: {
    fontSize: 17,
    color: "#FFF",
  },
});
