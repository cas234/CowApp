import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Information from "../screens/Information";
// import { Container } from './styles';

const Stack = createStackNavigator();

const InformationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Information"
        component={Information}
        options={{ title: "Logo" }}
      />
    </Stack.Navigator>
  );
};

export default InformationStack;
