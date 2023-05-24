import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resetPasswordLoading: false,
  resetPasswordSuccessMessage: null,
  resetPasswordError: null,
};

export const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,

  reducers: {
    resetPasswordStart: (state, action) => {
      state.resetPasswordLoading = true;
      state.resetPasswordSuccessMessage = null;
      state.resetPasswordError = null;
    },
    resetPasswordSuccess: (state, action) => {
      state.resetPasswordLoading = false;
      state.resetPasswordSuccessMessage = action.payload;
      state.resetPasswordError = null;
    },
    resetPasswordFailure: (state, action) => {
      state.resetPasswordLoading = false;
      state.resetPasswordSuccessMessage = null;
      state.resetPasswordError = action.payload;
    },
    clearError: (state, action) => {
      state.resetPasswordError = null;
      state.resetPasswordLoading = false;
      state.resetPasswordSuccessMessage = null;
    },
  },
});

export const {
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFailure,
  clearError,
} = resetPasswordSlice.actions;

export default resetPasswordSlice.reducer;
