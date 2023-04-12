import axios from "axios";
import { toast } from "react-toastify";
import {
  signInFailure,
  signInStart,
  signInSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
  clearError,
  forgotPasswordStart,
  forgotPasswordFailure,
  forgotPasswordSuccess,
} from "../Reducers/userSlice";

export const SignInUser = (email, password) => async (dispatch) => {
  try {
    dispatch(signInStart());

    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.post("http://localhost:4000/api/v1/login", {
      email,
      password,
      config,
    });

    const { token } = res.data;
    localStorage.setItem("token", token);
    dispatch(signInSuccess(res.data.user));
  } catch (error) {
    dispatch(signInFailure(error.response.data.message));
  }
};

export const registerUser =
  (firstname, lastname, phoneNo, email, password) => async (dispatch) => {
    // console.log( , )
    try {
      dispatch(registerStart());

      const config = { headers: { "Content-Type": "application/json" } };
      const res = await axios.post("http://localhost:4000/api/v1/register", {
        firstname,
        lastname,
        phoneNo,
        email,
        password,
        config,
      });

      dispatch(registerSuccess(res.data.user));
    } catch (error) {
      console.log(error);
      dispatch(registerFailure(error.response.data.message));
    }
  };

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch(forgotPasswordStart());
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.post(
      "http://localhost:4000/api/v1/password/forgot",
      {
        email,
        config,
      }
    );
    console.log(res.data.message);

    dispatch(forgotPasswordSuccess(res.data.message));
    toast.success("Email has been sent to given email address.");
  } catch (error) {
    console.log(error);
    dispatch(forgotPasswordFailure(error.response.data.message));
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch(clearError());
};
