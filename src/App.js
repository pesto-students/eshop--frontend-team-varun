import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
import SignIn from "./pages/SignIn/SignIn";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Checkout from "./pages/Checkout/Checkout";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";

function App() {
  return (
    <div className="container-fluid-sm p-md-0 body">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route
            path="/admin/products"
            element={<Dashboard currentPage="products" />}
          />
          <Route
            path="/admin/users"
            element={<Dashboard currentPage="users" />}
          />
          <Route
            path="/admin/orders"
            element={<Dashboard currentPage="orders" />}
          />
          <Route
            path="/admin/reviews"
            element={<Dashboard currentPage="reviews" />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
