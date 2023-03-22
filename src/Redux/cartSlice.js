import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: null,
  loading: false,
  error: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addProducts: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload.product);
      state.total += action.payload.price;
    },
  },
});

export const { addProducts } = cartSlice.actions;
export default cartSlice.reducer;
