import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => (
  <View style={styles.container}>
    <Text style={styles.row}>คณะเทคโนโลยีสารสนเทศ</Text>
    <Text style={styles.row}>
      สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  row: {
    padding: 10,
    borderBottomColor: "red",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
