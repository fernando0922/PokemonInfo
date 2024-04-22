import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import PokemonNameCard from "../../cards/PokemonNameCard";

const ListOfPokemons = ({ navigation, route, data = [] }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={(item) => (
          <PokemonNameCard
            navigation={navigation}
            route={route}
            {...item.item}
          />
        )}
        keyExtractor={(item) => {
          item.pokemonDetailUrl;
        }}
        ItemSeparatorComponent={<View style={styles.itemSeprator}></View>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    alignItems: "center",
  },
  itemSeprator: {
    marginBottom: 16,
  },
  heading: {
    color: "gold",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "600",
    textDecorationLine: "underline",
    marginBottom: 24,
  },
});

export default ListOfPokemons;
