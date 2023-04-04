// export const newOrder = () => async (dispatch) => {
//   try {
//     const { data } = await axios.get(
//       `http://localhost:4000/api/v1/product/${id}`
//     );

//     dispatch(addToCart(product));
//   } catch (error) {
//     dispatch(cartFailure(error.response.data.message));
//   }
// };

export const saveShippingInfo = (data) => async (dispatch) => {
  // dispatch();

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};

export const savePaymentInfo = (data) => async (dispatch) =>{
  sessionStorage.setItem("orderInfo", JSON.stringify(data));
};
