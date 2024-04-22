import { useLayoutEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";

const RotatingBall = () => {
  const spinAnimation = useRef(new Animated.Value(0)).current;

  useLayoutEffect(() => {
    spinAnimation.setValue(0); // Reset the animation value to 0
    Animated.loop(
      Animated.timing(spinAnimation, {
        toValue: 1, // Animate to full rotation
        duration: 1600, // Duration for one complete rotation
        useNativeDriver: true, // Use native driver for better performance
      })
    ).start();
  }, []);

  const spinOnZAxis = spinAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.Image
      source={require("../assets/pokeball.png")}
      style={[{ transform: [{ rotateZ: spinOnZAxis }] }, styles.ball]}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  ball: {
    width: 72,
    height: 72,
  },
});

export default RotatingBall;
