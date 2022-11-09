import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens";
import { theme } from "../utils/theme/theme";

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default AuthRoutes;
