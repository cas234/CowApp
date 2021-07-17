import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Creditos from "../screens/Creditos"; // import { Container } from './styles';
import { Image } from "react-native-elements";
const Stack = createStackNavigator();

const CreditosStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Creditos"
        component={Creditos}
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

export default CreditosStack;
