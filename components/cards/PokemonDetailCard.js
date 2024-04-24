import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const PokemonDetailCard = ({ cardData }) => {
  const { height, width } = useWindowDimensions();

  console.log(cardData);

  const abilities =
    cardData.abilities.length > 3
      ? cardData.abilities.slice(0, 3)
      : cardData.abilities;

  const damageArray = [
    ...cardData.double_damage_from,
    ...cardData.half_damage_from,
  ];

  return (
    <View style={[styles.container, { width: width / 1.1 }]}>
      <View style={[styles.cardHeader, { height: height / 11 }]}>
        <View
          style={[
            styles.typeContainer,
            { height: height / 11, width: width / 1.6 },
          ]}
        ></View>
        <View style={[styles.hp, { height: height / 11, width: width / 3.8 }]}>
          <Text>❤️ : {(cardData.maxHp + cardData.minHp) / 2}</Text>
        </View>
      </View>
      <View style={[styles.cardTitle, { height: height / 12 }]}>
        <View style={[styles.base]}>
          <Text>Exp : {cardData.base_experience}</Text>
        </View>
        <View style={[styles.height]}>
          <Text>H : {cardData.height} m</Text>
        </View>
        <View style={[styles.weight]}>
          <Text>W : {cardData.weight} kg</Text>
        </View>
      </View>
      <View style={[styles.cardImage, { height: height / 3 }]}>
        <Image
          source={{ uri: cardData.actualImageUrl }}
          width={width / 1.4}
          height={height}
          resizeMode="contain"
        />
      </View>
      <View style={[styles.cardInformation, { height: height / 3.5 }]}>
        <ScrollView>
          <View style={[styles.moves, { width: width / 2 }]}>
            {cardData.moves.map((move) => (
              <Text key={move.move.name}>{move.move.name}</Text>
            ))}
          </View>
        </ScrollView>
        <View style={[styles.weakness, { width: width / 2.6 }]}>
          <ScrollView>
            {damageArray.map((damage) => (
              <Text key={damage.url}>{damage.name}</Text>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={[styles.cardFooter, { height: height / 15 }]}>
        {abilities.map((ability) => (
          <Text key={ability.ability.name}>{ability.ability.name}</Text>
        ))}
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
    borderColor: "gold",
    borderWidth: 2,
    flexDirection: "row",
  },
  typeContainer: {},
  hp: {},
  cardTitle: {
    borderColor: "gold",
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  base: {},
  height: {},
  weight: {},
  cardImage: {
    borderColor: "gold",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  cardInformation: {
    flexDirection: "row",
    borderColor: "gold",
    borderWidth: 2,
  },
  moves: {},
  weakness: {},
  cardFooter: {
    borderColor: "gold",
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default PokemonDetailCard;
