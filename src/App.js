import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div>
      <Router>
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
            <Route path="checkout" element={<Checkout />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="createPassword" element={<CreatePassword />} />
            <Route path="admin">
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
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
