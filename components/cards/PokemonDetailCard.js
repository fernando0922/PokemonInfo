import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const PokemonDetailCard = ({ cardData }) => {
  const { height, width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width: width / 1.1 }]}>
      <View style={[styles.cardHeader, { height: height / 11 }]}>
        <View
          style={[
            styles.typeContainer,
            { height: height / 11, width: width / 1.6 },
          ]}
        >
          <Text>Types</Text>
        </View>
        <View style={[styles.hp, { height: height / 11, width: width / 3.8 }]}>
          <Text>Hp</Text>
        </View>
      </View>
      <View style={[styles.cardTitle, { height: height / 12 }]}>
        <View style={[styles.base]}>
          <Text>Base experience</Text>
        </View>
        <View style={[styles.height]}>
          <Text>Height</Text>
        </View>
        <View style={[styles.weight]}>
          <Text>Weight</Text>
        </View>
      </View>
      <View style={[styles.cardImage, { height: height / 3 }]}></View>
      <View style={[styles.cardInformation, { height: height / 3.5 }]}>
        <View style={[styles.moves, { width: width / 2 }]}>
          <Text>moves</Text>
        </View>
        <View style={[styles.weakness, { width: width / 2.6 }]}>
          <Text>weakness</Text>
        </View>
      </View>
      <View style={[styles.cardFooter, { height: height / 15 }]}>
        <Text>Ability</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    backgroundColor: "#FEF9E7",
    borderColor: "gold",
    borderWidth: 2,
    borderRadius: 6,
    elevation: 10,
  },
  cardHeader: {
    borderWidth: 2,
    borderColor: "red",
    flexDirection: "row",
  },
  typeContainer: { borderWidth: 2, borderColor: "blue" },
  hp: { borderWidth: 2, borderColor: "blue" },
  cardTitle: {
    borderWidth: 2,
    borderColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  base: { borderWidth: 2, borderColor: "blue" },
  height: { borderWidth: 2, borderColor: "blue" },
  weight: { borderWidth: 2, borderColor: "blue" },
  cardImage: {
    borderWidth: 2,
    borderColor: "red",
  },
  cardInformation: {
    borderWidth: 2,
    borderColor: "red",
    flexDirection: "row",
  },
  moves: { borderWidth: 2, borderColor: "blue" },
  weakness: { borderWidth: 2, borderColor: "blue" },
  cardFooter: {
    borderWidth: 2,
    borderColor: "red",
  },
});

export default PokemonDetailCard;
