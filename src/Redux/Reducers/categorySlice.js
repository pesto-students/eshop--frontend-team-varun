import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  categoriesError: null,
};

const categorySlice = createSlice({
  name: "categories",
  initialState,

  reducers: {
    addCategories: (state, action) => {
      state.categories = action.payload;
      state.categoriesError = null;
    },

    categoriesFailure: (state, action) => {
      state.categories = [];
      state.categoriesError = action.payload.message;
    },
  },
});

export const { addCategories, categoriesFailure } = categorySlice.actions;
export default categorySlice.reducer;
