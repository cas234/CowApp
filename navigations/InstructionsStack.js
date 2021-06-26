import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Instructions from "../screens/Instructions";
// import { Container } from './styles';

const Stack = createStackNavigator();

const InstructionsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Instructions"
        component={Instructions}
        options={{ title: "Logo" }}
      />
    </Stack.Navigator>
  );
};

export default InstructionsStack;
