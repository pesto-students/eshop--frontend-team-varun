import axios from "axios";
import {
  addToCart,
  removeItemFromCart,
  resetCart,
  cartFailure,
} from "../Reducers/cartSlice";
import base_url from "./helper/helper";

// Add to cart
export const AddItemsToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${base_url}/product/${id}`);

    const product = {
      productId: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.images[0].url,
      stock: data.product.stock,
      category: data.product.category,
      quantity,
    };

    dispatch(addToCart(product));
  } catch (error) {
    console.log(error);
    dispatch(cartFailure(error.response.data.message));
  }
};

// Remove from cart
export const RemoveItemsFromCart = (id) => async (dispatch) => {
  try {
    dispatch(removeItemFromCart(id));
  } catch (error) {
    dispatch(cartFailure(error.response.data.message));
  }
};

export const resetCartItems = () => async (dispatch) => {
  console.log("called reset cart actions");
  try {
    dispatch(resetCart);
  } catch (error) {
    dispatch(cartFailure(error.response.data.message));
  }
};
