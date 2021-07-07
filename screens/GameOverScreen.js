import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={{ padding: 10 }}>The Game is Over!</Text>
      <Text style={{ padding: 10 }}>Number of rounds: {props.correctNumber}</Text>
      <Text style={{ padding: 10 }}> Correct Number was: {props.guessRounds}</Text>
      <Button
        title="New Game"
        color={Colors.accent}
        style={{ padding: 10 }}
        onPress={() => props.configureNewGameHandler()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
