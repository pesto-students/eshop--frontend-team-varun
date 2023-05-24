import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
import SignIn from "./pages/SignIn/SignIn";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Product from "./pages/Product/Product";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Checkout from "./pages/Checkout/Checkout";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import CreatePassword from "./pages/CreatePassword/CreatePassword";
import ScrollToTop from "./ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyOrders from "./pages/MyOrders/MyOrders";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Page404 from "./pages/NEWPage404/Page404";
import UpdateProduct from "./pages/Admin/pages/UpdateProduct/UpdateProduct";
import { BASE_URL } from "./Services/helper";

function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");
  const { isAuthenthicated } = useSelector((state) => state.user);

  async function getStripeApiKey() {
    const { data } = await axios.get(`${BASE_URL}/stripeapikey`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    if (isAuthenthicated) {
      getStripeApiKey();
    }
  }, [isAuthenthicated]);

  return (
    <div>
      <HashRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="products" element={<Product />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="createAccount" element={<CreateAccount />} />
            <Route path="forgotPassword" element={<ForgotPassword />} />
            <Route path="checkout">
              <Route
                path=""
                element={
                  <Elements stripe={loadStripe(stripeApiKey)}>
                    <Checkout currentPage="checkout" />
                  </Elements>
                }
              />
              <Route
                path="payment"
                element={
                  <Elements stripe={loadStripe(stripeApiKey)}>
                    <Checkout currentPage="payment" />
                  </Elements>
                }
              />
            </Route>
            <Route path="myorders" element={<MyOrders />} />
            
              <Route
                path="product/:id"
                element={<ProductDetail currentPage="productDetails" key=":id"/>}
              />
            <Route path="password/reset/:token" element={<CreatePassword />} />
            <Route path="admin">
              <Route path="update-product/:id" element={<UpdateProduct />} />
              <Route
                path="products"
                element={<Dashboard currentPage="products" />}
              />
              <Route path="users" element={<Dashboard currentPage="users" />} />
              <Route
                path="orders"
                element={<Dashboard currentPage="orders" />}
              />
              <Route
                path="reviews"
                element={<Dashboard currentPage="reviews" />}
              />
              <Route
                path="addProduct"
                element={<Dashboard currentPage={"Add Product"} />}
              />
            </Route>
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
        <Footer />
      </HashRouter>
      <ToastContainer autoClose={3000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
