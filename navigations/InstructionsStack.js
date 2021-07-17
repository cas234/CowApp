import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Instructions from "../screens/Instructions";
import { Image } from "react-native-elements";
// import { Container } from './styles';

const Stack = createStackNavigator();

const InstructionsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Instructions"
        component={Instructions}
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

export default InstructionsStack;
