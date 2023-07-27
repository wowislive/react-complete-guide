import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { isVisible: false, items: [], totalAmount: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const existingItemIndex = state.items.findIndex(
        (item) => item.name === action.payload.name
      );
      const existingItem = state.items[existingItemIndex];

      if (existingItem) {
        state.items[existingItemIndex].amount++;
      } else {
        state.items.push({
          name: action.payload.name,
          price: action.payload.price,
          amount: 1,
        });
      }
      state.totalAmount++;
    },
    deleteFromCart(state, action) {
      const existingItemIndex = state.items.findIndex(
        (item) => item.name === action.payload.name
      );

      if (state.items[existingItemIndex].amount > 1) {
        state.items[existingItemIndex].amount--;
      } else {
        state.items = state.items.filter(
          (item) => item.name !== action.payload.name
        );
      }
      state.totalAmount--;
    },
    toggleCart(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
