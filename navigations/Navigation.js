import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import InstructionsStack from "./InstructionsStack";
import CreditosStack from "./CreditosStack";
import HomeStack from "./HomeStack";
import InformationStack from "./InformationStack";
import Information from "../screens/Information";
import Instructions from "../screens/Instructions";
const Tab = createBottomTabNavigator();

// import { Container } from './styles';

const Navigation = () => {
  const screenOptions = (route, color) => {
    let iconName;

    switch (route.name) {
      case "Home":
        iconName = "home";
        break;
      case "Informations":
        iconName = "calculator-variant";

        break;
      case "Instructions":
        iconName = "tractor-variant";

        break;
      case "Creditos":
        iconName = "nature-people";

        break;
    }

    return (
      <Icon type="material-community" name={iconName} size={22} color={color} />
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          inactiveTintColor: "grey",
          activeTintColor: "purple",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ title: "Pagina 1" }}
        />
        <Tab.Screen
          name="Informations"
          component={InformationStack}
          options={{ title: "Pagina 2" }}
        />
        <Tab.Screen
          name="Instructions"
          component={InstructionsStack}
          options={{ title: "Pagina 3" }}
        />
        <Tab.Screen
          name="Creditos"
          component={CreditosStack}
          options={{ title: "Pagina 4" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
