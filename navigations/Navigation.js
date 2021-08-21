import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native-elements";
import InstructionsStack from "./InstructionsStack";
import CreditosStack from "./CreditosStack";
import HomeStack from "./HomeStack";
import InformationStack from "./InformationStack";
const Tab = createBottomTabNavigator();

// import { Container } from './styles';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          inactiveTintColor: "white",
          activeTintColor: "#D18102",
          style: { backgroundColor: "#3E4C01" },
          showLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: () => (
              <Image
                style={styles.IconHome}
                source={require("../assets/Iconos/Icono-casa.png")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Informations"
          component={InformationStack}
          options={{
            tabBarIcon: () => (
              <Image
                style={styles.Icon}
                source={require("../assets/Iconos/Icono-hoja-con-vaca.png")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Instructions"
          component={InstructionsStack}
          options={{
            tabBarIcon: () => (
              <Image
                style={styles.Icon}
                source={require("../assets/Iconos/Icono-calculadora.png")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Creditos"
          component={CreditosStack}
          options={{
            tabBarIcon: () => (
              <Image
                style={styles.IconUser}
                source={require("../assets/Iconos/Icono-usuario.png")}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  IconHome: {
    height: 36,
    width: 40,
  },
  IconUser: {
    height: 37,
    width: 38,
  },

  Icon: {
    height: 36,
    width: 29,
  },
});
