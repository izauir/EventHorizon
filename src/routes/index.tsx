import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";

import StackRoutes from "./stack.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <StackRoutes />
    </NavigationContainer>
  );
}
