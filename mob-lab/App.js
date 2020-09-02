import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Noteui from "./components/noteui";
class App extends Component {
  state = {
    note: [],
    text: "",
  };
  changetext = (inputtext) => {
    this.setState({
      text: inputtext,
    });
  };
  settext = () => {
    let note = [...this.state.note, this.state.text];
    this.state.note.push(this.state.text);
    this.setState({ note, text: '' });
  };

  DeleteText = (index) => {
    let note = [...this.state.note];
    note.splice(index, 1);
    this.setState({ note });
  };

  render() {
    return (
      <View>
        <Noteui changetext={this.changetext} settext={this.settext} valueText={this.state.text} />
        <View style={{ paddingHorizontal: 30 }}>
          {this.state.note.map((data, index) => {
            return (
              <Text
                style={{ fontSize: 16, fontWeight: "600" }}
                onPress={() => this.DeleteText(index)}
              >
                {data}
              </Text>
            );
          })}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});
export default App;
