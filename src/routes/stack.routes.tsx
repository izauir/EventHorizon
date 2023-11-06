import { NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabRoutes from "./tab.routes";
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";
import Welcome from "../pages/Welcome";

//Typagem para usar o useNavigation
export type ScreenNames = ["welcome", "login", "signin", "tabrouteshome"];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="tabrouteshome" component={TabRoutes} />
    </Stack.Navigator>
  );
}
