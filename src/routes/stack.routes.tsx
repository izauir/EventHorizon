import { NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabRoutes from "./tab.routes";
import Card from "../pages/Card";
import { EventData } from "../pages/Home"; // Importe o tipo EventData
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";
import Welcome from "../pages/Welcome";

//Typagem para usar o useNavigation
export type ScreenNames = [
  "welcome",
  "login",
  "signin",
  "tabrouteshome",
  "card",
];

// Adicione a tipagem para os parâmetros da tela "card"
export type RootStackParamList = {
  welcome: undefined;
  login: undefined;
  signin: undefined;
  tabrouteshome: undefined;
  card: { eventData: EventData }; // Aqui está a tipagem para os parâmetros da tela "card"
};

export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="card" component={Card} />
      <Stack.Screen name="tabrouteshome" component={TabRoutes} />
    </Stack.Navigator>
  );
}
