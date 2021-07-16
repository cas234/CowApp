import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { color } from "react-native-elements/dist/helpers";

// import { Container } from './styles';

const Creditos = () => {
  return (
    <View style={styles.container}>
       <View style={styles.title}>
         <Text style={styles.text1}>Creditos</Text>
       </View>
       
       <View style={styles.credit}>
        <Image
        style={styles.creditimage}
        source={require("../assets/Iconos/computadora.png")}
      />
         <Image
        style={styles.creditimage}
        source={require("../assets/Iconos/pluma.png")}
      />
         <Image
        style={styles.creditimage}
        source={require("../assets/Iconos/hojas.png")}
      />
        </View>

        <View style={styles.area}>
          <View style={styles.square1}>
            <Text style={styles.areastex}>
              Área de programación
            </Text>
          </View>
          <View style={styles.square1}>
          <Text style={styles.areastex}>
              Área de Diseño
            </Text>
            </View>
            <View style={styles.square1}>
            <Text style={styles.areastex}>
              Área  ingieneria agronómica
            </Text>
            </View>
        </View>

        <View style={styles.area}>
          <View style={styles.square1}>
            <Text style={styles.areastex}>
              Área de programación
            </Text>
          </View>
          <View style={styles.square1}>
          <Text style={styles.areastex}>
              Área de Diseño
            </Text>
            </View>
            <View style={styles.square1}>
            <Text style={styles.areastex}>
              Área  ingieneria agronómica
            </Text>
            </View>
        </View>


      <Image
        style={styles.Image}
        source={require("../assets/Iconos/ec.png")}
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
  title:{
    width:360,
    height:79,
    backgroundColor:'#D18102'
  },
  text1:{
    fontSize:22,
    color:'white',
    marginTop:40,
    marginLeft:14
  },
  credit:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
      marginTop:30,
      padding:4
  },
  creditimage:{
    width:70,
    height:70,
     alignItems:"center",
    margin:25
  },

  area:{
    flexDirection:'row',
    margin:6
  },
square1:{
width:100,
height:80,
backgroundColor: "rgba(62, 76, 1, 0.8)",
margin:6,
justifyContent:"center",
alignItems:"center"
},
areastex:{
  textAlign:"center",
  color:"white",
  
  fontSize:16
},
Image:{
  width:100,
  height:100,
  marginTop:20
},


});

export default Creditos;
