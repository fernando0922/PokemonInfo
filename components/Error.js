import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Error = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.heading]}>sorry</Text>
      <Image source={require("../assets/sorry.png")} style={styles.img} />
      <Text style={[styles.text, styles.msg]}>Mistake From Our Side,</Text>
      <Text style={[styles.text, styles.msg]}>Please Try Again 🙏</Text>
      <Text style={[styles.text, styles.errMsg]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "100%",
  },
  text: {
    color: "gold",
    fontWeight: "600",
  },
  msg: {
    fontSize: 23,
    position: "relative",
    bottom: 42,
    left: 4,
    textTransform: "capitalize",
  },
  heading: {
    fontSize: 32,
    textTransform: "uppercase",
    position: "relative",
    top: 24,
    textDecorationLine: "underline",
  },
  errMsg: {
    fontSize: 16,
    color: "red",
  },
});

export default Error;
