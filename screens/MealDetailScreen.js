import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงอ็อบเจ๊คเมนูอาหารที่ผู้ใช้เลือกเอาไว้

  const MealId = props.navigation.getParam("MealId");
  const selectedMeal = MEALS.find((cat) => cat.id === MealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Text>{selectedMeal.steps}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.navigate("Categories");
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const MealId = navigationData.navigation.getParam("MealId");
  const selectedMeal = MEALS.find((cat) => cat.id === MealId);
  return {
    headerTitle: selectedMeal.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20
  },
});

export default MealDetailScreen;
