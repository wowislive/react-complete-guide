import React, { useReducer } from "react";

const CartContext = React.createContext({
  meals: [],
  totalPrice: 0,
  addMeal: (meal) => {},
  removeMeal: (id) => {},
});

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      meals: state.meals.concat(action.meal),
      totalPrice: state.totalPrice + action.meal.price * action.meal.amount,
    };
  }
  if (action.type === "REMOVE") {
    const mealIndex = state.meals.findIndex((meal) => meal.id === action.id);
    return {
      meals: state.meals.filter((obj) => obj.id !== action.id),
      totalPrice:
        state.totalPrice -
        action.meals[mealIndex].price * action.meals[mealIndex].amount,
    };
  }

  return {
    meals: [],
    totalPrice: 0,
  };
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
