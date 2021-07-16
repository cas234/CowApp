import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Image,
} from "react-native";

// import { Container } from './styles';

const Information = () => {
  return (
    <View style={styles.container}>
      <View style={styles.TextView}>
        <Text style={styles.TextSuperior}>Ingresa el peso de la Vaca</Text>
      </View>
      <View style={styles.InputView}>
        <TextInput
          style={styles.Input}
          placeholder={"kg"}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.resultView}>
        <Text style={styles.TextSuperior}>Dosificación</Text>
      </View>
      <View style={styles.InputView}>
        <TextInput
          style={styles.Input}
          placeholder={"kg"}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Image
          style={styles.Image}
          source={require("../assets/Iconos/ec.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  TextSuperior: {
    fontSize: 35,
    fontWeight: "bold",
  },
  TextView: {
    top: 30,
    height: 100,
    width: Dimensions.get("window").width * 0.85,
    alignItems: "center",
    justifyContent: "center",
  },
  Input: {
    height: 60,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#006691",
    borderRadius: 5,
    width: Dimensions.get("window").width * 0.85,
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: "#000",
    paddingHorizontal: 20,
  },
  InputView: {
    marginTop: 30,
  },
  resultView: {
    marginTop: 30,
  },

  Image: {
    width: 150,
    height: 150,
    marginTop: 25,
  },
});

export default Information;
