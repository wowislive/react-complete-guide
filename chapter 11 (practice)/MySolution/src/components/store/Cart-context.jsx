import React, { useReducer } from "react";

const CartContext = React.createContext({
  meals: [],
  totalPrice: 0,
  addMeal: (meal) => {},
  removeMeal: (id) => {},
});

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const mealIndex = state.meals.findIndex(
      (meal) => meal.id === action.meal.id
    );
    if (state.meals[mealIndex]) {
      const updatedMeals = [...state.meals];
      updatedMeals[mealIndex].amount =
        updatedMeals[mealIndex].amount + action.meal.amount;
      return {
        meals: updatedMeals,
        totalPrice: state.totalPrice + action.meal.price * action.meal.amount,
      };
    } else {
      return {
        meals: state.meals.concat(action.meal),
        totalPrice: state.totalPrice + action.meal.price * action.meal.amount,
      };
    }
  }
  if (action.type === "REMOVE") {
    const mealIndex = state.meals.findIndex((meal) => meal.id === action.id);
    if (state.meals[mealIndex].amount === 1) {
      return {
        meals: state.meals.filter((obj) => obj.id !== action.id),
        totalPrice: state.totalPrice - state.meals[mealIndex].price,
      };
    } else {
      const updatedMeals = [...state.meals];
      updatedMeals[mealIndex].amount = updatedMeals[mealIndex].amount - 1;
      return {
        meals: updatedMeals,
        totalPrice: state.totalPrice - state.meals[mealIndex].price,
      };
    }
  }
};

export const CartContextProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, {
    meals: [],
    totalPrice: 0,
  });

  const addMealHandler = (meal) => {
    dispatchCart({ type: "ADD", meal: meal });
  };

  const removeMealHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  return (
    <CartContext.Provider
      value={{
        meals: cartState.meals,
        totalPrice: cartState.totalPrice,
        addMeal: addMealHandler,
        removeMeal: removeMealHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
