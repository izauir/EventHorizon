import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../pages/SignIn";
import Welcome from "../pages/Welcome";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Bem-vindo!" component={Welcome} />
      <Stack.Screen name="Cadastrar" component={SignIn} />
    </Stack.Navigator>
  );
}
