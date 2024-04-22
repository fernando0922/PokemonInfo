import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TypeCard from "../../cards/TypeCard";

const TypeList = ({ navigation, route, data = [] }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={(item) => (
          <TypeCard navigation={navigation} route={route} {...item.item} />
        )}
        keyExtractor={(item) => item.url}
        ItemSeparatorComponent={<View style={styles.itemSeprator}></View>}
        numColumns={2}
        ListHeaderComponent={
          <Text style={styles.heading}>Types Of Pokemon</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    left: 8,
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

export default TypeList;
