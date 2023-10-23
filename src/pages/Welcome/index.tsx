import React from "react";
import { Text, View, Image } from "react-native";

import styles from "./styles";

export default function Search() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../../assets/logo.png")} />
      </View>
    </View>
  );
}
