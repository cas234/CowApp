import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

// import { Container } from './styles';

const Information = () => {
  const [Peso, setPeso] = useState(null);
  const [Total, setTotal] = useState(null);

  const Calcular = () => {
    setTotal(Peso * 0.1);
  };

  console.log(Total);
  return (
    <View style={styles.container}>
      <View style={styles.TextView}>
        <Text style={styles.TextSuperior}>
          Ingresa el peso de la Vaca en KG
        </Text>
      </View>
      <View style={styles.InputView}>
        <TextInput
          style={styles.Input}
          placeholder={"kg"}
          keyboardType="numeric"
          onChange={(e) => setPeso(e.nativeEvent.text)}
        />
      </View>
      <View style={styles.resultView}>
        <Text style={styles.TextSuperior}>Dosificación</Text>

        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          La cantidad de comida es:
        </Text>

        <Text style={{ fontSize: 45, fontWeight: "bold" }}>{Total} KG</Text>
      </View>
      <View style={styles.InputView}></View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image
          style={styles.Image}
          source={require("../assets/Iconos/ec.png")}
        />
        <TouchableOpacity onPress={Calcular} style={styles.TouchableOpacity}>
          <Text style={styles.Text}>Calcular</Text>
        </TouchableOpacity>
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
    justifyContent: "center",
    marginTop: 30,
    alignItems: "center",
  },

  Image: {
    width: 140,
    height: 195,
  },
  Text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
  },
  TouchableOpacity: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(62, 76, 1, 0.8)",
    height: 50,
    width: Dimensions.get("window").width * 0.8,
    borderRadius: 20,
  },
});

export default Information;
