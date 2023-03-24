import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartLoading: false,
  cartError: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {},
    removeItem: (state, action) => {},
    resetCart: (state, action) => {},
  },
});

export const { addProducts } = cartSlice.actions;
export default cartSlice.reducer;
