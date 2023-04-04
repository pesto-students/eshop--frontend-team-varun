import axios from "axios";
import {
  ordersFailure,
  ordersRequest,
  ordersSuccess,
} from "../Reducers/orderSlice";
import { toast } from "react-toastify";

// Get my Orders
export const getMyOrders = () => async (dispatch) => {
  try {
    dispatch(ordersRequest());
    const res = await axios.get(`http://localhost:4000/api/v1/orders/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    console.log(res.data);
    dispatch(ordersSuccess(res.data));
  } catch (error) {
    console.log(error);
    dispatch(ordersFailure(error));
  }
};

// Get All Orders
export const getAllOrders = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:4000/api/v1/admin/orders`);

    return res.data;
  } catch (error) {
    console.log(error);
    dispatch(ordersFailure(error));
  }
};

export const createOrder = async (order) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const { data } = await axios.post(
      "http://localhost:4000/api/v1/order/new",
      {...order},
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      }
    );

    toast.success(data.message);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
