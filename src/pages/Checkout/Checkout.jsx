import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Checkout.css";
import Payment from "../Payment/Payment";
import { Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  savePaymentInfo,
  saveShippingInfo,
} from "../../Redux/Actions/paymentActions";
import axios from "axios";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import { createOrder } from "../../Redux/Actions/orderActions";

const Checkout = ({ currentPage }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const { isAuthenthicated, currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [price, setPrice] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (!isAuthenthicated) {
      navigate("/signIn");
    }

    setPrice(
      cartItems?.reduce((acc, item) => acc + item.quantity * item.price, 0)
    );

  }, [cartItems]);

  console.log(cartItems);
  const deliveryCharge = price > 1000 ? 0 : 200;
  const tax = price * 0.18;
  const discount = price * 0.1;
  const totalPrice = price + tax + deliveryCharge - discount;

  const order = {
    orderItems: cartItems,
    itemsPrice: price,
    taxPrice: tax,
    shippingPrice: deliveryCharge,
    totalPrice: totalPrice,
  };

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 10 || phoneNo.length > 10) {
      toast.error("Phone Number should be 10 digits Long");
      return;
    }
    dispatch(
      saveShippingInfo({ address, city, state, country, pinCode, phoneNo })
    );
    dispatch(
      savePaymentInfo({ price, deliveryCharge, tax, discount, totalPrice })
    );
    navigate("/checkout/payment");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    
    const shipping = JSON.parse(localStorage.getItem("shippingInfo"));
    const orderinfo = sessionStorage.getItem("orderInfo");
    console.log("Paymentssss: " , shipping);
    // payBtn.current.disabled = true;

    try {
      const config = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/payment/process",
        {amount: Math.round((totalPrice)*100)},
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;
      
      console.log(shipping);
      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: currentUser.name,
            email: currentUser.email,
            address: {
              line1: shipping.address,
              city: shipping.city,
              state: shipping.state,
              postal_code: shipping.pinCode,
              country: 'IN',
            },
          },
        },
      });
      
      if (result.error) {
        // payBtn.current.disabled = false;
        toast.error(result.error.message);
      } else {
        console.log(order);
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };
          order.shippingInfo = shipping;

          createOrder(order);

          // history.push("/success");
        } else {
          toast.error("There's some issue while processing payment ");
        }
      }
    } catch (error) {
      // payBtn.current.disabled = false;
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="checkout-page mt-5">
        <div className="container pt-4">
          <div className="checkout-page-1">
            {currentPage === "checkout" ? (
              <div className="shipping-data">
                <p className="p-0 mb-0 h4 fw-semibold">Shipping Address</p>
                <div className="personal-data">
                  <div className="fname-text w-100">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control bg-white shadow-none border border-secondary-subtle"
                      id="exampleFormControlInput1"
                      placeholder="First Name"
                      // value={personInfo.address}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="fname-text w-100">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control bg-white shadow-none border border-secondary-subtle"
                      id="exampleFormControlInput1"
                      placeholder="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="personal-data">
                  <div className="fname-text w-100">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label mb-1"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control bg-white shadow-none border border-secondary-subtle"
                      id="exampleFormControlInput1"
                      placeholder="Address"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="fname-text w-100">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label mb-1"
                    >
                      Contact
                    </label>
                    <input
                      type="number"
                      className="form-control bg-white shadow-none border border-secondary-subtle"
                      id="exampleFormControlInput1"
                      placeholder="Contact"
                      onChange={(e) => setPhoneNo(e.target.value)}
                    />
                  </div>
                </div>
                <div className="personal-data">
                  <div className="fname-text w-100">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label mb-1"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      className="form-control bg-white shadow-none border border-secondary-subtle"
                      id="exampleFormControlInput1"
                      placeholder="Country"
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                  <div className="fname-text w-100">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label mb-1"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control bg-white shadow-none border border-secondary-subtle"
                      id="exampleFormControlInput1"
                      placeholder="City"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
                <div className="personal-data">
                  <div className="fname-text w-100">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label mb-1"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      className="form-control bg-white shadow-none border border-secondary-subtle"
                      id="exampleFormControlInput1"
                      placeholder="State"
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                  <div className="fname-text w-100">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label mb-1"
                    >
                      Zip Code
                    </label>
                    <input
                      type="number"
                      className="form-control bg-white shadow-none border border-secondary-subtle"
                      id="exampleFormControlInput1"
                      placeholder="Zip Code"
                      onChange={(e) => setPinCode(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ) : (
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
            )}
            <div className="order-summary border rounded-2 bg-white">
              <p className="title p-0 mb-0 fw-semibold pt-4 ps-4">
                Order Summary
              </p>
              <div className="price d-flex justify-content-between mx-4 mt-4">
                <p className="mb-0">Price:</p>
                <p className="mb-0">{`₹ ${price}`}</p>
              </div>
              <div className="delivery d-flex justify-content-between mx-4 mt-3">
                <p className="mb-0">Delivery Charge:</p>
                {cartItems?.length === 0 ? (
                  <p className="mb-0">{`₹ 0`}</p>
                ) : (
                  <p className="mb-0">{`₹ ${deliveryCharge}`}</p>
                )}
              </div>
              <div className="tax d-flex justify-content-between mx-4 mt-3">
                <p className="mb-0">Tax:</p>
                {cartItems?.length === 0 ? (
                  <p className="mb-0">{`₹ 0`}</p>
                ) : (
                  <p className="mb-0">{`₹ ${tax}`}</p>
                )}
              </div>
              <div className="discount d-flex justify-content-between mx-4 mt-3">
                <p className="mb-0">Discount:</p>
                {cartItems?.length === 0 ? (
                  <p className="mb-0">{`₹ 0`}</p>
                ) : (
                  <p className="mb-0">{`₹ ${discount.toFixed(2)}`}</p>
                )}
              </div>
              <hr className="mx-4" />
              <div className="total-pay d-flex justify-content-between align-items-center mx-4 mt-3">
                <p className="mb-0 fw-semibold">Total Payment:</p>
                {cartItems?.length === 0 ? (
                  <p className="mb-0 fw-semibold">{`₹ ${0} `}</p>
                ) : (
                  <p className="mb-0 fw-semibold">{`₹ ${totalPrice} `}</p>
                )}
              </div>
              <div className="mx-4">
                <button
                  onClick={currentPage === "checkout" ? shippingSubmit : submitHandler}
                  className="btn btn-primary border-0 mt-5 w-100"
                  style={{
                    backgroundColor: "#52057B",
                    color: "white",
                  }}
                >
                  {currentPage === "payment" ? "Pay" : "Pay With Stripe"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
