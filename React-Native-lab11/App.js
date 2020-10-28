import React from "react";
import { StyleSheet } from "react-native";
import MealsNavigator from "./navigation/MealsNavigator";
import { createStore, combineReducers } from "redux";
import mealsReducer from "./store/reducers/mealsReducer";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
