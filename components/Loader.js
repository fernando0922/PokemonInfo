import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RotatingBall from "./RotatingBall";

const Loader = ({ message }) => {
  return (
    <View style={styles.container}>
      <RotatingBall />
      <Text style={styles.msg}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  msg: {
    color: "gold",
    fontWeight: "600",
    fontSize: 20,
    position: "relative",
    bottom: 72,
    left: 4,
  },
});

export default Loader;
