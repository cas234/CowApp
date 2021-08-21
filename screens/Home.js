import React from "react";

import {
  Text,
  StyleSheet,
  Image,
  Dimensions,
  View,
  ScrollView,
} from "react-native";

// import { Container } from './styles';

const Home = () => {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.container}>
        <Image
          style={styles.Image}
          source={require("../assets/Iconos/ec.png")}
        />
        <View style={styles.TextView}>
          <Text style={styles.Text}>
          El bloque multinutricional para vacas Lecheras está elaborado en un formato redondo sólido de 2.2 kg. Ha Sido formulado artesanalmente con ingredientes específicamente seleccionados para equilibrarla la producción de leche y la nutrición en el bovino. Logrando un aumento significativo durante su consumo. La acción del polvo de cáscara de huevo aporta una alta cantidad de calcio, ofreciendo un extra para evitar la enfermedad de la hipocalcemia. La melaza, es beneficiosa porque contiene mega calorías azucares solubles y proteínas es rica en minerales. Por otro lado la utilización de Azufre da como resultado un aumento considerable de peso y se crea un efecto repelente a parásitos externos. Con el suministro de Gallinaza durante la época seca se logra incrementar la producción diaria de leche. El sorgo al igual que el pasto taiwan aportan altas cantidades de energía, manteniendo el peso corporal óptimo en el animal.
          </Text>
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

  Text: {
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    width: 150,
    height: 205,
    marginTop: 20,
  },
  Text: {
    textAlign: "justify",
    fontWeight: "bold",
    fontSize: 20,
  },
  TextView: {
    top: 30,
    width: Dimensions.get("window").width * 0.85,
  },
  scrollView: {},
  contentContainer: {
    justifyContent: "center",
    paddingBottom: 50,
  },
});

export default Home;
