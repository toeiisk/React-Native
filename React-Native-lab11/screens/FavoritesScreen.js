import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";

const FavoritesScreen = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
  const favMeals = favoriteMeals.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );

  return (
    <View style={styles.screen}>
      <MealList listData={favMeals} navigation={props.navigation} />
    </View>
  );
};

FavoritesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Your Favorites",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default FavoritesScreen;
