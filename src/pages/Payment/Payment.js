import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import React, { Fragment, useState } from "react";
import "./Payment.css";

const Payment = () => {
    const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
    const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));


    const [cardNumber, setCardNumber] = useState("");
    const [cardExpire, setCardExpire] = useState("");
    const [cardCVV, setCardCVV] = useState("");


  return (
    <div className="paymentContainer">
      <p className="p-0 mb-0 h4 fw-semibold">Payment Info</p>
      <div className="card-info">
        <div>
          <CardNumberElement className="border p-3 w-100 rounded bg-white" />
        </div>
        <div>
          <CardExpiryElement className="border p-3 w-100 rounded bg-white" />
        </div>
        <div>
          <CardCvcElement className="border p-3 w-100 rounded bg-white" />
        </div>
      </div>
    </div>
  );
};

export default Payment;
