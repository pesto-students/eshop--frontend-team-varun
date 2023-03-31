import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartLoading: false,
  cartError: null,
  cartError: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find(
        (i) => i.productId === item.productId
      );

      if (isItemExist) {
        state.cartItems = state.cartItems.map((i) =>
          i.productId === isItemExist.productId ? item : i
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
    },

    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (i) => i.productId !== action.payload
      );
    },

    resetCart: (state, action) => {
      state.cartItems = [];
      state.cartLoading = false;
      state.cartError = null;
      state.cartError = null;
    },

    cartFailure: (state, action) => {
      state.cartError = action.payload.message;
    },
  },
});

export const { addToCart, removeItemFromCart, resetCart, cartFailure } =
  cartSlice.actions;
export default cartSlice.reducer;

