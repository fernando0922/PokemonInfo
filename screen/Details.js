import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { getPokemonDetailById } from "../api/getRequest";
import PokemonDetailCard from "../components/cards/PokemonDetailCard";

const Details = ({ navigation, route }) => {
  const { pokemonName, pokemonDetailUrl, damage_relations } = route.params;

  const properPokemonName =
    pokemonName[0].toUpperCase() + pokemonName.substring(1).toLowerCase();

  const [pokiData, setPokiData] = useState({
    reqStatus: false,
    data: [],
    errorStatus: false,
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${properPokemonName}'s Details`,
    });

    getPokemonDetailById(pokemonDetailUrl)
      .then((res) => setPokiData({ reqStatus: true, data: res }))
      .catch((err) => setPokiData({ ...pokiData, errorStatus: true }));
  }, []);

  return (
    <View style={styles.homeContainer}>
      {pokiData.errorStatus ? (
        <Error message={pokiData.data[0]?.message ?? "Something went wrong"} />
      ) : pokiData.reqStatus ? (
        <PokemonDetailCard
          cardData={{
            ...pokiData.data,
            pokemonName,
            pokemonDetailUrl,
            ...damage_relations,
          }}
        />
      ) : (
        <Loader message={properPokemonName + ", I Choose You"} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingTop: 16,
  },
});

export default Details;
