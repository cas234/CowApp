import React from "react";
import { ScrollView } from "react-native";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

// import { Container } from './styles';

const Instructions = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleSpace}>
          <Text style={styles.title}>Tabla de Nutrientes</Text>
        </View>
        <View style={styles.tableHeader}>
          <Text style={styles.TextHeader}>Calcio</Text>
          <Text style={styles.TextHeader}>Grasas</Text>
          <Text style={styles.TextHeader}>Calorías</Text>
        </View>

        <View style={styles.tableBody}>
          <Text style={styles.TextBody}>100Kg</Text>
          <Text style={styles.TextBody}>50Kg</Text>
          <Text style={styles.TextBody}>159Kg</Text>
        </View>

        <View style={styles.tableBody}>
          <Text style={styles.TextBody}>100Kg</Text>
          <Text style={styles.TextBody}>50Kg</Text>
          <Text style={styles.TextBody}>159Kg</Text>
        </View>

        <View style={styles.tableBody}>
          <Text style={styles.TextBody}>100Kg</Text>
          <Text style={styles.TextBody}>50Kg</Text>
          <Text style={styles.TextBody}>159Kg</Text>
        </View>

        <View style={styles.tableBody}>
          <Text style={styles.TextBody}>100Kg</Text>
          <Text style={styles.TextBody}>50Kg</Text>
          <Text style={styles.TextBody}>159Kg</Text>
        </View>

        <View style={styles.tableBody}>
          <Text style={styles.TextBody}>100Kg</Text>
          <Text style={styles.TextBody}>50Kg</Text>
          <Text style={styles.TextBody}>159Kg</Text>
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
  },
  TextBody: {
    fontSize: 25,
    padding: 5,
    marginRight: 27,
    color: "black",
  },
  Image: {
    width: 150,
    height: 205,
    marginTop: 30,
  },
});

export default Instructions;
