import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet } from "react-native";
import Exam1 from "./components/2.1";
import Exam2 from "./components/2.2";
import Exam3 from "./components/3.1";
import Exam4 from "./components/3.2";
import Exam5 from "./components/3.3";
import Exam6 from "./components/3.4";
import Exam7 from "./components/3.5";

export default function App() {
  return (
    <View style={styles.container}>
      <Exam1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
});
