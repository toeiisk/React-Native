import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    'Categories': CategoriesScreen,
    'CategoryMeals': CategoryMealsScreen,
    'MealDetail': MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#4a148c", },
      headerTintColor: "white",
      },
  }
);

export default createAppContainer(MealsNavigator);