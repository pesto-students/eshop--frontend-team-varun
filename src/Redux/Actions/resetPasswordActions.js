import axios from "axios";
import { toast } from "react-toastify";
import {
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFailure,
  clearError,
} from "../Reducers/resetPasswordSlice";
import { BASE_URL } from "../../Services/helper";

export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch(resetPasswordStart());
    console.log(token);

    const res = await axios.put(`${BASE_URL}/password/reset/${token}`, {
      passwords,
    });

    dispatch(resetPasswordSuccess(res.data.success));
    toast.success();
    dispatch(clearError);
  } catch (error) {
    dispatch(resetPasswordFailure(error.response.data.message));
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch(clearError());
};
