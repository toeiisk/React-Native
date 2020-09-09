import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Buttonui from "./components/Button";
const { height } = Dimensions.get("window");

const buttons = [
  ["DEL"],
  ["1", "2", "3", "+"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "*"],
  [".", "0", "=", "/"],
];

export default class App extends Component {
  constructor() {
    super();
    this.initailState = {
      displayValue: "0",
      displayResult: "0",
      operator: null,
    };
    this.state = this.initailState;
  }
  renderButton() {
    let layouts = buttons.map((buttonRows, index) => {
      let rowItem = buttonRows.map((buttonItem, buttonIndex) => {
        return (
          <Buttonui
            key={"btn-" + buttonIndex}
            value={buttonItem}
            handlePress={this.handleInput.bind(this, buttonItem)}
          />
        );
      });
      return (
        <View style={styles.inputRow} key={"row-" + index}>
          {rowItem}
        </View>
      );
    });
    return layouts;
  }

  handleInput = (input) => {
    const {
      displayValue,
      operator,
    } = this.state;
    switch (input) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (operator !== null) {
          this.setState({
            operator: null,
          });
        }
        this.setState({
          displayValue: displayValue === "0" ? input : displayValue + input,
        });
        break;

      case "+":
      case "-":
      case "*":
      case "/":
        this.setState({
          operator: input,
          displayValue:
            (operator !== null
              ? displayValue.substr(0, displayValue.length - 1)
              : displayValue) + input,
        });
        break;

      case ".":
        let dot = displayValue.slice(-1);
        this.setState({
          displayValue: dot !== "." ? displayValue + input : displayValue,
        });
        break;

      case "DEL":
        let string = displayValue.toString();
        let deletedString = string.substr(0, string.length - 1);
        let length = string.length;
        this.setState({
          displayValue: length == 1 ? "0" : deletedString,
        });
        break;

      case "=":
        console.log(displayValue % 1);
        this.setState({
          displayResult: eval(displayValue) % 1 === 0 ? eval(displayValue) : eval(displayValue),
          operator: null,
        });
        break;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.value}>{this.state.displayValue}</Text>
        </View>
        <View style={styles.calContainer}>
          <Text style={styles.value}>{this.state.displayResult}</Text>
        </View>
        <View style={styles.inputContainer}>{this.renderButton()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  value: {
    color: "#000",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginTop: height * 0.09,
  },
  resultContainer: {
    flex: 3,
    backgroundColor: "#FFF",
  },
  calContainer: {
    flex: 2,
    backgroundColor: "#DDD",
  },
  inputContainer: {
    flex: 8,
    backgroundColor: "#777",
  },
  inputRow: {
    flex: 1,
    flexDirection: "row",
  },
});
