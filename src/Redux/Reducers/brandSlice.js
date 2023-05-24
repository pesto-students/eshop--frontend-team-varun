import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brands: [],
  brandsError: null,
};

const brandSlice = createSlice({
  name: "brands",
  initialState,

  reducers: {
    addBrands: (state, action) => {
      state.brands = action.payload;
      state.brandsError = null;
    },

    brandsFailure: (state, action) => {
      state.brands = [];
      state.brandsError = action.payload.message;
    },
  },
});

export const { addBrands, brandsFailure } = brandSlice.actions;
export default brandSlice.reducer;
