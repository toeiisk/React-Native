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
      <TextInput
        style={{
          backgroundColor: "#777",
          color: "#FFF",
          padding: 20,
          textAlign: "center",
        }}
      >
        Input Text
      </TextInput>
      <TouchableHighlight>
        <View
          style={{
            backgroundColor: "#DDD",
            padding: 20,
          }}
        >
          <Text style={{ textAlign: "center" }}>ADD</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "stretch",
  },
});
