import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  signInLoading: false,
  signInError: null,
  isAuthenthicated: false,
  registerError: false,
  forgetPasswordMessage: "",
  forgotPasswordLoading: false,
  forgetPasswordError: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    signInStart: (state) => {
      state.SignInLoading = true;
      state.currentUser = null;
      state.SignInError = null;
      state.isAuthenthicated = false;
      state.registerError = false;
    },

    signInSuccess: (state, action) => {
      state.SignInLoading = false;
      state.currentUser = action.payload;

      state.SignInError = null;
      state.isAuthenthicated = true;
      state.registerError = false;
    },

    signInFailure: (state, action) => {
      state.SignInLoading = false;
      state.currentUser = null;
      state.SignInError = action.payload;
      state.isAuthenthicated = false;
      state.registerError = false;
    },

    registerStart: (state) => {
      state.SignInLoading = true;
      state.currentUser = null;
      state.SignInError = null;
      state.isAuthenthicated = false;
      state.registerError = false;
    },

    registerSuccess: (state, action) => {
      state.SignInLoading = false;
      state.currentUser = action.payload;
      state.SignInError = null;
      state.isAuthenthicated = true;
      state.registerError = false;
    },

    registerFailure: (state, action) => {
      state.SignInLoading = false;
      state.currentUser = null;
      state.SignInError = null;
      state.isAuthenthicated = false;
      state.registerError = action.payload;
    },

    signOut: (state, action) => {
      state.currentUser = null;
      state.SignInLoading = false;
      state.SignInError = null;
      state.isAuthenthicated = false;
      state.registerError = false;
    },

    clearError: (state, action) => {
      state.signInLoading = false;
      state.SignInError = null;
      state.isAuthenthicated = false;
      state.registerError = false;
      state.passwordUpdateError = false;
      state.forgotPasswordLoading = false;
      state.forgetPasswordError = null;
      state.forgetPasswordMessage = "";
    },

    forgotPasswordStart: (state, action) => {
      state.forgotPasswordLoading = true;
      state.forgetPasswordError = null;
    },

    forgotPasswordSuccess: (state, action) => {
      state.forgotPasswordLoading = false;
      state.forgetPasswordMessage = action.payload;
    },

    forgotPasswordFailure: (state, action) => {
      state.forgotPasswordLoading = false;
      state.forgetPasswordMessage = null;
      state.forgetPasswordError = action.payload;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  signOut,
  clearError,
  forgotPasswordStart,
  forgotPasswordSuccess,
  forgotPasswordFailure,
} = userSlice.actions;

export default userSlice.reducer;
