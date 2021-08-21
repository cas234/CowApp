import React from "react";
import { ScrollView } from "react-native";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

// import { Container } from './styles';

const Information = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleSpace}>
          <Text style={styles.title}>Tabla de Nutrientes</Text>
        </View>
        <View style={styles.tableHeader}>
          <Text style={styles.TextHeader}>Contenido</Text>

        </View>

        <View style={styles.tableBody}>
          <Text style={styles.TextBody}>PB(%)</Text>
          <Text style={styles.TextBody}>16</Text>
          <Text style={styles.TextBody}>Proteína bruta</Text>
     
        </View>

        <View style={styles.tableBody}>
          <Text style={styles.TextBody}>EM</Text>
          <Text style={styles.TextBody}>2.78</Text>
          <Text style={styles.TextBody}>Energía metabolizada</Text>
        </View>

        <View style={styles.tableBody}>
          <Text style={styles.TextBody}>Ca(g)</Text>
          <Text style={styles.TextBody}>1.49</Text>
          <Text style={styles.TextBody}>Calcio</Text>
        </View>

        <View style={styles.tableBody}>
          <Text style={styles.TextBody}>P(g)</Text>
          <Text style={styles.TextBody}>0.67</Text>
          <Text style={styles.TextBody}>Fósforo</Text>
        </View>

      

        <View>
          <Image
            style={styles.Image}
            source={require("../assets/Iconos/ec.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  titleSpace: {
    top: 15,
    height: 100,

    alignItems: "center",
    justifyContent: "center",
  },
  tableHeader: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "black",
    borderWidth: 1,
    backgroundColor: "#3E4C01",
    width:"100%"
  },
  TextHeader: {
    fontSize: 25,
    padding: 5,
    margin: 7,
    color: "white",
  },
  tableBody: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "black",
    borderWidth: 1,
    backgroundColor: "#D18102",
    width:"100%",
    
  },
  TextBody: {
    fontSize: 20,
    flex:1,
    margin:5,
    color: "black",
    width:"100%"
  },
  Image: {
    width: 150,
    height: 205,
    marginTop: 30,
  },
});

export default Information;
