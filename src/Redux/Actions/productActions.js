import axios from "axios";
import { toast } from "react-toastify";
import {
  getCurrentProductFailure,
  getCurrentProductRequestStart,
  getCurrentProductSuccess,
} from "../Reducers/currentProductSlice";
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
import { addReview } from "./reviewActions";

// Get All Products
export const getProducts = () => async (dispatch) => {
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

// Get All Products using filters
export const getProductsUsingFilters =
  (keyword = "", category = "", price = [0, 2500000], page, brand = "") =>
  async (dispatch) => {
    try {
      dispatch(addProductsRequest());

      if (category) {
        const res = await axios.get(
          `http://localhost:4000/api/v1/products?keyword=${keyword}&category=${category}&price[gte]=${price[0]}&price[lte]=${price[1]}&page=${page}&brand=${brand}`
        );
        dispatch(addProductsSuccess(res.data));
      } else if (brand) {
        const res = await axios.get(
          `http://localhost:4000/api/v1/products?brand=${brand}`
        );

        dispatch(addProductsSuccess(res.data));
      } else {
        const res = await axios.get(
          `http://localhost:4000/api/v1/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&page=${page}`
        );
        dispatch(addProductsSuccess(res.data));
      }
    } catch (error) {
      toast.error(`${error.message}`);
      dispatch(addProductsFailure(error));
    }
  };

// Fetch all TopDeals products { products above 4.0 rating }
export const getTopDeals = () => async (dispatch) => {
  try {
    dispatch(addTopDealsRequest());
    const res = await axios.get(`http://localhost:4000/api/v1/topdeals`);

    dispatch(addTopDealsSuccess(res.data));
  } catch (error) {
    dispatch(addTopDealsFailure(error));
  }
};

// Fetch all Deals of the month products { product above 4.0 of currently added month}
export const getDealsOfMonth = () => async (dispatch) => {
  try {
    dispatch(dealsOfMonthRequest());
    const res = await axios.get(`http://localhost:4000/api/v1/monthlytopdeals`);

    dispatch(dealsOfMonthSuccess(res.data));
  } catch (error) {
    dispatch(dealsOfMonthFailure(error));
  }
};

// Fetch recommandation products
export const getRecommendations = () => async (dispatch) => {
  try {
    dispatch(addRecommendationsRequest());
    const res = await axios.get(`http://localhost:4000/api/v1/shuffleproducts`);

    dispatch(addRecommendationsSuccess(res.data));
  } catch (error) {
    dispatch(addRecommendationsFailure(error));
  }
};

// Get current Product Details

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch(getCurrentProductRequestStart());
    const res = await axios.get(`http://localhost:4000/api/v1/product/${id}`);

    dispatch(getCurrentProductSuccess(res.data));
  } catch (error) {
    dispatch(getCurrentProductFailure(error));
  }
};

export const getUserCoordinates = () => {
  const geolocationAPI = navigator.geolocation;
  if (!geolocationAPI) {
    console.log("Geolocation API is not available in your browser!");
  } else {
    geolocationAPI.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const options = {
          method: "GET",
          url: "https://weatherapi-com.p.rapidapi.com/current.json",
          params: { q: `${latitude}, ${longitude}` },
          headers: {
            "X-RapidAPI-Key":
              "1ed03d24b6msh0cffdeb65a12596p112460jsn2f800ae326cd",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
          },
        };

        axios
          .request(options)
          .then(function (response) {
            return `${response.data.location.name}, ${response.data.location.region}`;
          })
          .catch(function (error) {
            console.error(error);
          });
      },
      (error) => {
        console.log("Something went wrong getting your position!");
      }
    );
  }
};
