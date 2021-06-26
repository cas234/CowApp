import React from "react";
import { View, StyleSheet, Text } from "react-native";

// import { Container } from './styles';

const Instructions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleSpace}>
        <Text style={styles.title}>Tabla de Nutrientes</Text>
      </View>
      <View style={styles.tableHeader}>
        <Text style={styles.TextHeader}>Calció</Text>
        <Text style={styles.TextHeader}>Grasas</Text>
        <Text style={styles.TextHeader}>Calorias</Text>
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
      
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
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
    backgroundColor: "purple",
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
    backgroundColor: "skyblue",
  },
  TextBody: {
    fontSize: 25,
    padding: 5,
    marginRight: 27,
    color: "black",
  }
});

export default Instructions;
