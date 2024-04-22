import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const NoPokemonsFound = ({ navigation, route }) => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        No Pokemon Found in {route.params?.name ?? ""}
      </Text>
      <Image
        source={require("../../../assets/NoPokemonFound.png")}
        style={{
          width: width,
          height: height / 2,
        }}
      />
      <Button
        title="Navigate To Home"
        color="purple"
        onPress={() => navigation.navigate("home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
    color: "gold",
  },
});

export default NoPokemonsFound;
