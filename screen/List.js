import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { getListOfOneType } from "../api/getRequest";
import Error from "../components/Error";
import Loader from "../components/Loader";
import ListOfPokemons from "../components/screen/list/ListOfPokemons";
import NoPokemonsFound from "../components/screen/list/NoPokemonsFound";

const List = ({ navigation, route }) => {
  const { name = "", url } = route.params;
  const [list, setList] = useState({
    reqStatus: false,
    data: [],
    errorStatus: false,
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${
        name[0].toUpperCase() + name.substring(1).toLowerCase()
      } Pokemons`,
    });

    getListOfOneType(url)
      .then((res) =>
        setList({
          reqStatus: true,
          errorStatus: false,
          data: res.pokemon.map((item) => ({
            pokemonName: item.pokemon.name,
            pokemonDetailUrl: item.pokemon.url,
            damage_relations: res.damage_relations,
          })),
        })
      )
      .catch((err) => setList({ ...list, errorStatus: true }));
  }, []);

  return (
    <View style={styles.listContainer}>
      {list.errorStatus ? (
        <Error message={list.data[0]?.message ?? "Something went wrong"} />
      ) : list.reqStatus ? (
        list.data.length > 0 ? (
          <ListOfPokemons
            navigation={navigation}
            route={route}
            data={list.data}
          />
        ) : (
          <NoPokemonsFound navigation={navigation} route={route} />
        )
      ) : (
        <Loader message={"Loading ..."} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingTop: 16,
  },
});

export default List;
