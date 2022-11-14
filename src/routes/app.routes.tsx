import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Transaction } from "../screens";
import { theme } from "../utils/theme/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: theme.colors.primary,
          inactiveTintColor: theme.colors.text,
          labelPosition: "beside-icon",
          labelStyle: {
            fontSize: 15,
            fontFamily: theme.fonts.title700,
            marginLeft: 16,
          },
          style: {
            paddingVertical: 20,
            height: 88,
          },
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Nova Transação") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: theme.colors.green,
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Nova Transação" component={Transaction} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default AuthRoutes;
