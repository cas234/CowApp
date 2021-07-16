import React from "react";
import { ScrollView } from "react-native";
import {
  
  Text,
  StyleSheet,
  Image,
  Dimensions,
  View,
} from "react-native";

// import { Container } from './styles';

const Home = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
        style={styles.Image}
        source={require("../assets/Iconos/ec.png")}
      />
      <View style={styles.TextView}>
        <Text style={styles.Text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
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
    width: 200,
    height: 200,
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
});

export default Home;
