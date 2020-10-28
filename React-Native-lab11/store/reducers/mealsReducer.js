import { MEALS } from "../../data/dummy-data";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      const index = state.favoriteMeals.findIndex(action.mealId);
      if (index >= 0) {
        return [state.favoriteMeals.slice(0, index)];
      } else {
        index = -1;
        return [state.favoriteMeals.slice(index + 1)];
      }
    default:
      return state;
  }
};

export default mealReducer;
