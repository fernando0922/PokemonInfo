import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const PokemonNameCard = ({ navigation, route, ...restProps }) => {
  const {
    pokemonName = "",
    pokemonDetailUrl = "",
    damage_relations,
  } = restProps;

  const [front, setFront] = useState(true);

  useEffect(() => {
    const inter = setInterval(() => {
      setFront(!front);
    }, 1000);

    return () => {
      clearInterval(inter);
    };
  }, [front]);

  const width = useWindowDimensions().width;

  const pokeId = pokemonDetailUrl.split("/")[6];

  const imageAddress = {
    front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`,
    back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokeId}.png`,
  };

  const navigateToPokemonDetails = () => {
    navigation.navigate("details", {
      pokemonName,
      pokemonDetailUrl,
      damage_relations,
    });
  };

  return (
    <Pressable
      onLongPress={navigateToPokemonDetails}
      onPress={navigateToPokemonDetails}
    >
      <View style={[styles.typeCardContainer, { width: width / 1.15 }]}>
        <Text style={styles.type}>{pokemonName}</Text>
        <Image
          source={{
            uri: front ? imageAddress.front : imageAddress.back,
            width: 100,
            height: 100,
          }}
        />
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  type: {
    fontSize: 24,
    fontWeight: "800",
    color: "purple",
    textTransform: "capitalize",
    flex: 1,
    flexWrap: "wrap",
    paddingLeft: 24,
  },
});

export default PokemonNameCard;
