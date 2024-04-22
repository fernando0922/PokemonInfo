import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { imageObject } from "../../helper/Image";

const TypeCard = ({ navigation, route, ...restProps }) => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  const { name = "", url } = restProps;

  const navigateToPokemonList = () => {
    navigation.navigate("list", {
      name,
      url,
    });
  };

  return (
    <Pressable
      onLongPress={navigateToPokemonList}
      onPress={navigateToPokemonList}
    >
      <View
        style={[
          styles.typeCardContainer,
          {
            width: width / 2.4,
            height: height / 4,
            marginRight: 16,
          },
        ]}
      >
        <Image source={imageObject[name] || imageObject["noImage"]} />
        <Text style={styles.type}>{name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  typeCardContainer: {
    backgroundColor: "#FEF9E7",
    borderColor: "gold",
    borderWidth: 2,
    borderRadius: 4,
    elevation: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  type: {
    fontSize: 24,
    fontWeight: "800",
    color: "purple",
    textTransform: "capitalize",
  },
});

export default TypeCard;
