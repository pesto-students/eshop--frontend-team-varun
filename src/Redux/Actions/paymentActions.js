export const saveShippingInfo = (data) => async (dispatch) => {
  localStorage.setItem("shippingInfo", JSON.stringify(data));
};

export const savePaymentInfo = (data) => async (dispatch) => {
  sessionStorage.setItem("orderInfo", JSON.stringify(data));
};
