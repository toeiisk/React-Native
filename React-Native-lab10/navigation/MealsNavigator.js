import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import FavoritesScreen from "../screens/FavoritesScreen";
import { createDrawerNavigator } from "react-navigation-drawer";
import FilterScreen from "../screens/FiltersScreen";

const FilterNavigator = createStackNavigator({
  Filters: FilterScreen,
});

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#4a148c" },
      headerTintColor: "white",
    },
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#4a148c" },
      headerTintColor: "white",
    },
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Ionicons name="ios-restaurant" size={24} />;
        },
      },
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Ionicons name="ios-star" size={24} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "gray",
    },
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FilterNavigator,
  },
  { contentOptions: { activeTintColor: "skyblue" } }
);

export default createAppContainer(MainNavigator);
