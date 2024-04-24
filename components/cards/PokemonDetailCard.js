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
        <View style={[styles.typeContainer, { width: width / 1.6 }]}></View>
        <Text style={[styles.hpText, { width: width / 3.8 }]}>
          ❤️ : {(cardData.maxHp + cardData.minHp) / 2}
        </Text>
      </View>
      <View style={[styles.cardTitle, { height: height / 12 }]}>
        <Text style={styles.info}>Exp : {cardData.base_experience}</Text>
        <Text style={styles.info}>H : {cardData.height} m</Text>
        <Text style={styles.info}>W : {cardData.weight} kg</Text>
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
        <View style={{ width: width / 2 }}>
          <Text style={styles.movesHeading}>Attacks</Text>
          <ScrollView>
            {cardData.moves.map((move) => (
              <Text key={move.move.name} style={styles.moves}>
                {move.move.name}
              </Text>
            ))}
          </ScrollView>
        </View>
        <View style={{ width: width / 2.6 }}>
          <Text style={styles.movesHeading}>Weak</Text>
          <ScrollView>
            {damageArray.map((damage) => (
              <Text key={damage.url} style={styles.weakness}>
                {damage.name} pokemon
              </Text>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={[styles.cardFooter, { height: height / 15 }]}>
        {abilities.map((ability) => (
          <Text key={ability.ability.name} style={styles.ability}>
            {ability.ability.name}
          </Text>
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
  hpText: {
    color: "darkred",
    fontSize: 24,
    textAlignVertical: "center",
  },
  cardTitle: {
    borderColor: "gold",
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  info: {
    color: "midnightblue",
    fontSize: 20,
    textTransform: "capitalize",
    fontWeight: "800",
  },
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
  moves: {
    color: "#0E6251",
    fontSize: 20,
    textTransform: "capitalize",
    fontWeight: "800",
    paddingLeft: 32,
  },
  movesHeading: {
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "800",
    color: "purple",
    textDecorationLine: "underline",
    paddingBottom: 8,
    paddingLeft: 32,
  },
  weakness: {
    color: "#C70039",
    fontSize: 20,
    textTransform: "capitalize",
    fontWeight: "800",
    paddingLeft: 32,
  },
  cardFooter: {
    borderColor: "gold",
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ability: {
    color: "midnightblue",
    fontSize: 20,
    textTransform: "capitalize",
    fontWeight: "600",
  },
});

export default PokemonDetailCard;
