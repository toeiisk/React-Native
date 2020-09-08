import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

export default function Button() {
  return (
    <View>
      <View style={styles.positionRow}>
        <TouchableOpacity
          style={styles.inputsymbol}
          onPress={() => this.handlePress("delete")}
        >
          <Text style={styles.inputButtonText}>DEL</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.positionRow}>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => this.handlePress("number", 1)}
        >
          <Text style={styles.inputButtonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => this.handlePress("number", 2)}
        >
          <Text style={styles.inputButtonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => this.handlePress("number", 3)}
        >
          <Text style={styles.inputButtonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputsymbol}
          onPress={() => this.handlePress("operator", "+")}
        >
          <Text style={styles.inputButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.positionRow}>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => this.handlePress("number", 4)}
        >
          <Text style={styles.inputButtonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => this.handlePress("number", 5)}
        >
          <Text style={styles.inputButtonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => this.handlePress("number", 6)}
        >
          <Text style={styles.inputButtonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputsymbol}
          onPress={() => this.handlePress("operator", "-")}
        >
          <Text style={styles.inputButtonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.positionRow}>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => this.handlePress("number", 7)}
        >
          <Text style={styles.inputButtonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => this.handlePress("number", 8)}
        >
          <Text style={styles.inputButtonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => this.handlePress("number", 9)}
        >
          <Text style={styles.inputButtonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputsymbol}
          onPress={() => this.handlePress("operator", "*")}
        >
          <Text style={styles.inputButtonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.positionRow}>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => this.handlePress("number", ".")}
        >
          <Text style={styles.inputButtonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => this.handlePress("number", 0)}
        >
          <Text style={styles.inputButtonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => this.handlePress("equal", "=")}
        >
          <Text style={styles.inputButtonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputsymbol}
          onPress={() => this.handlePress("operator", "/")}
        >
          <Text style={styles.inputButtonText}>/</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  positionRow: {
    flexDirection: 'row'
  },
  inputButton: {
    backgroundColor: "#333333",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: buttonWidth - 10,
    borderWidth: 0.5,
    borderColor: "#91AA9D",
  },
  inputButtonText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  inputsymbol: {
    backgroundColor: "#777777",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: buttonWidth - 10,
    borderWidth: 0.5,
    borderColor: "#91AA9D",
  },
});