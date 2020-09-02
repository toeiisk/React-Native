import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
export class noteui extends Component {
  render() {
    const { valueText, settext, changetext } = this.props;
    return (
      <View style={{ marginTop: 50 }}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            สมุดบันทึก
          </Text>
          <TextInput
            style={styles.textinput}
            value={valueText}
            placeholder="เพิ่มข้อความที่นี่"
            onChangeText={changetext}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.button} onPress={settext}>
            <Text style={styles.textstyle}>บันทึก</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textinput: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    backgroundColor: "#777",
    borderRadius: 10,
    padding: 10,
    width: "80%",
  },
  button: {
    textAlign: "center",
    padding: 10,
    width: "80%",
    borderRadius: 10,
    backgroundColor: "#DDDD",
    marginVertical: 10,
    alignItems: "center",
  },
  textstyle: {
    fontSize: 16,
    fontWeight: "300",
  },
});
export default noteui;
