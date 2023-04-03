import axios from "axios";
import {
  ordersFailure,
  ordersRequest,
  ordersSuccess,
} from "../Reducers/orderSlice";

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
