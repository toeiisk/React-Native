import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class Button extends Component {
  render() {
    const {value, handlePress} = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => handlePress(value)}
      >
        <Text style={styles.textButton}>{value}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 1,
    backgroundColor: "#BBB",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
});