import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home"; // import { Container } from './styles';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ title: "Logo",
     headerStyle:{backgroundColor:"#3E4C01"} }} />
    </Stack.Navigator>
  );
};

export default HomeStack;
