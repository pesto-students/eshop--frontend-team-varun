import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  signInLoading: false,
  signInError: false,
  isAuthenthicated: false,
  registerError: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    signInStart: (state) => {
      state.SignInLoading = true;
      state.currentUser = null;
      state.SignInError = false;
      state.isAuthenthicated = false;
      state.registerError = false;
    },

    signInSuccess: (state, action) => {
      state.SignInLoading = false;
      state.currentUser = action.payload;
      state.SignInError = false;
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
      state.SignInError = false;
      state.isAuthenthicated = false;
      state.registerError = false;
    },

    registerSuccess: (state, action) => {
      state.SignInLoading = false;
      state.currentUser = action.payload;
      state.SignInError = false;
      state.isAuthenthicated = true;
      state.registerError = false;
    },

    registerFailure: (state, action) => {
      state.SignInLoading = false;
      state.currentUser = null;
      state.SignInError = false;
      state.isAuthenthicated = false;
      state.registerError = action.payload;
    },

    signOut: (state) => {
      state.SignInLoading = false;
      state.currentUser = null;
      state.SignInError = false;
      state.isAuthenthicated = false;
      state.registerError = false;
    },

    signInClearError: (state, action) => {
      state.SignInError = false;
      state.isAuthenthicated = false;
      state.registerError = false;
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
  signInClearError,
} = userSlice.actions;

export default userSlice.reducer;
