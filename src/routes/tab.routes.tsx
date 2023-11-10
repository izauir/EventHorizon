import { Ionicons, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import Search from "../pages/Search";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#000000",

          height: 60,
          bottom: 14,
          left: 14,
          right: 14,
          elevation: 0,
          borderRadius: 4,
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          tabBarLabel: "Início",
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
          tabBarLabel: "Buscar",
        }}
      />
      <Tab.Screen
        name="myprofile"
        component={MyProfile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
          tabBarLabel: "Meu Perfil",
        }}
      />
    </Tab.Navigator>
  );
}
