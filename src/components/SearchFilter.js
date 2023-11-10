import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";

const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flexDirection: "row",
        borderRadius: 10,
        paddingVertical: 10,
        height: 50,
        marginVertical: 16,
        marginRight: 15,
        marginLeft: 15,
        // borderWidth: 1.5, // borda no TextInput
      }}
    >
      <EvilIcons name={icon} size={30} color="black" />
      <TextInput
        placeholder={placeholder}
        style={{ fontSize: 14, color: "#808080" }}
      />
    </View>
  );
};

export default SearchFilter;
