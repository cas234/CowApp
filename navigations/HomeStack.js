import React from "react";
import { Image } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home"; // import { Container } from './styles';
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => (
            <Image
              style={{ height: 50, width: 135 }}
              source={require("../assets/Iconos/blanco.png")}
              resizeMode="contain"
            />
          ),
          headerStyle: { backgroundColor: "#3E4C01" },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
