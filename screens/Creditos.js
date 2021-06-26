import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";

// import { Container } from './styles';

const Creditos = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.Image}
        source={require("../assets/Imagen_Prueba.jpg")}
      />

      <View style={styles.TextView}>
        <Text style={styles.Text}>Centro de Innovación Farem-Estelí</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  Text: {
    textAlign: "justify",
    fontWeight: "bold",
    fontSize: 20,
  },
  TextView: {
    top: 30,
  },
});

export default Creditos;
