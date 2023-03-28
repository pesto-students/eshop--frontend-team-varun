import axios from "axios";
import {
  signInFailure,
  signInStart,
  signInSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
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
  (firstName, lastName, email, password) => async (dispatch) => {
    try {
      dispatch(registerStart());
      let name = firstName + " " + lastName;
      const res = await axios.post("http://localhost:4000/api/v1/register", {
        name,
        email,
        password,
      });
      console.log(res);
      dispatch(registerSuccess(res.data.user));
    } catch (error) {
      console.log(error);
      dispatch(registerFailure(error.response.statusText));
    }
  };
