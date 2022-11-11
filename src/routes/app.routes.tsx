import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Transaction } from "../screens";
import { theme } from "../utils/theme/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Ionicons } from "react-native-vector-icons";

const { Navigator, Screen } = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Transaction") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: theme.colors.green,
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Transaction" component={Transaction} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default AuthRoutes;
