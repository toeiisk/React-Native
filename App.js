import React, { Component, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Buttonui from "./components/Button";

export default function App() {
  const [calVal, setCalVal] = useState("0");
  const [operator, setOperator] = useState(null);
  const [PastVal, setPastVal] = useState(null);
  const [NextVal, setNextVal] = useState(null);
  const [Check, setCheck] = useState(true);

  handlePress = (type, value) => {
    if (type === "number") {
      if (Check) {
        setCheck(false);
        setCalVal(`${value}`);
      } else {
        setNextVal(`${value}`);
        setCheck(true);
      }
    }
    if (type === "operator") {
      setOperator(value);
      setPastVal(calVal);
      setNextVal(NextVal);
    }
    if (type === "equal") {
      const current = parseFloat(calVal);
      const prev = parseFloat(NextVal);

      if (operator === "+") {
        setCalVal(prev + current);
        setOperator(null);
      }

      if (operator === "-") {
        setCalVal(prev - current);
        setOperator(null);
      }

      if (operator === "*") {
        setCalVal(prev * current);
        setOperator(null);
      }

      if (operator === "/") {
        setCalVal(prev / current);
        setOperator(null);
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.ContainerResult1}>
        <Text style={styles.value}>
          calVal:{calVal} operator:{operator} NextVal:{NextVal}
        </Text>
      </View>
      <View style={styles.ContainerResult}>
        <Text style={styles.value}>{calVal}</Text>
      </View>
      <View style={styles.InputContainer}>
        <Buttonui handlePress={this.handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    flex: 1,
  },
  value: {
    color: "#000",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
  },
  ContainerResult: {
    backgroundColor: "white",
    justifyContent: "center",
    flex: 1,
  },
  ContainerResult1: {
    backgroundColor: "white",
    justifyContent: "center",
    flex: 2,
  },
  InputContainer: {
    backgroundColor: "green",
  },
});
