import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ViewBoxesWithColorAndText from "./componenets/ViewBoxesWithColorAndText";
import BoldAndBeautiful from "./componenets/BoldAndBeautiful";
import UselessTextInput from "./componenets/UselessTextInput";
import ScrollView from "./componenets/ScrollView";
import StyleSheetView from "./componenets/StyleSheetView";
import AbsoluteFillObject from "./componenets/absoluteFillObject";
import HairlineWidth from "./componenets/hairlineWidth";

export default function App() {
  return (
    <View>
      {/* <ViewBoxesWithColorAndText /> */}
      {/* <BoldAndBeautiful /> */}
      {/* <UselessTextInput /> */}
      {/* <ScrollView /> */}
      {/* <StyleSheetView /> */}
      <AbsoluteFillObject />
      {/* <HairlineWidth /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   // // flex: 1,
  //   // alignItems: "center",
  //   // justifyContent: "center",
  // },
});
