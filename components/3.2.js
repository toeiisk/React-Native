import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#EC0B43",
          width: 100,
          height: 100,
        }}
      >
        <Text style={{ textAlign: "center" }}>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "#58355E",
          width: 100,
          height: 100,
        }}
      >
        <Text style={{ textAlign: "center" }}>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "#7AE7C7",
          width: 100,
          height: 100,
        }}
      >
        <Text style={{ textAlign: "center" }}>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
  },
});
