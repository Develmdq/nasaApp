import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Detail } from "../views";

const Stack = createNativeStackNavigator();
const defaultOptions = {
  headerStyle: { backgroundColor: "#071a5d" },
  headerTitleStyle: { color: "#fff" },
  headerTintColor: "white",
};

const Routes = () => {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={defaultOptions} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={defaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
