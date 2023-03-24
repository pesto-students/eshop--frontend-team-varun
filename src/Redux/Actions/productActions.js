import axios from "axios";
import {
  dealsOfMonthFailure,
  dealsOfMonthRequest,
  dealsOfMonthSuccess,
} from "../Reducers/dealsOfMonthSlice";
import {
  addProductsFailure,
  addProductsRequest,
  addProductsSuccess,
  addProductsClearError,
} from "../Reducers/productSlice";
import {
  addRecommendationsFailure,
  addRecommendationsRequest,
  addRecommendationsSuccess,
} from "../Reducers/recommendationSlice";
import {
  addTopDealsFailure,
  addTopDealsRequest,
  addTopDealsSuccess,
} from "../Reducers/topDealsSlice";

// Get All Products
export const getProducts = () => async (dispatch) => {
  console.log("products");
  try {
    dispatch(addProductsRequest());
    const res = await axios.get(`http://localhost:4000/api/v1/products`);

    dispatch(addProductsSuccess(res.data));
  } catch (error) {
    dispatch(addProductsFailure(error));
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch(addProductsClearError());
};

// Fetch all TopDeals products { products above 4.0 rating }
export const getTopDeals = () => async (dispatch) => {
  console.log("top deals");
  try {
    dispatch(addTopDealsRequest());
    const res = await axios.get(`http://localhost:4000/api/v1/products`);

    dispatch(addTopDealsSuccess(res.data));
  } catch (error) {
    dispatch(addTopDealsFailure(error));
  }
};

// Fetch all Deals of the month products { product above 4.0 of currently added month}
export const getDealsOfMonth = () => async (dispatch) => {
  console.log("deals of month");

  try {
    dispatch(dealsOfMonthRequest());
    const res = await axios.get(`http://localhost:4000/api/v1/products`);

    dispatch(dealsOfMonthSuccess(res.data));
  } catch (error) {
    dispatch(dealsOfMonthFailure(error));
  }
};

// Fetch recommandation products
export const getRecommandations = () => async (dispatch) => {
  console.log("recommandations");

  try {
    dispatch(addRecommendationsRequest());
    const res = await axios.get(`http://localhost:4000/api/v1/products`);

    dispatch(addRecommendationsSuccess(res.data));
  } catch (error) {
    dispatch(addRecommendationsFailure(error));
  }
};
