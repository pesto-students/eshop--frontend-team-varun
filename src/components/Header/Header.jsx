import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../Redux/Reducers/userSlice";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setopen] = useState(false);
  const href = window.location.pathname;

  const handelLogOut = () => {
    dispatch(signOut());
    localStorage.removeItem("token");
    localStorage.removeItem("shippingInfo");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-black fixed-top">
      <div className="container-fluid p-0">
        <Link
          to="/"
          className="nav-link navbar-brand text-white pl-5 fw-bolder fs-4"
          style={{ textDecoration: "none", marginLeft: "40px" }}
        >
          E-Shop
        </Link>
        <button
          className="navbar-toggler custom-toggler bg-light mt-auto mr-3 mx-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse pt-1"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav m-auto mb-2 gap-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link text-white"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
              {href === "/" && <div className="tab-indicator"></div>}
            </li>
            {currentUser !== "null" && currentUser?.role === "admin" && (
              <li className="nav-item">
                <Link
                  to="/admin/products"
                  className="nav-link text-white"
                  style={{ textDecoration: "none" }}
                >
                  Dashboard
                </Link>
                {href === "/admin/products" && (
                  <div className="tab-indicator"></div>
                )}
              </li>
            )}
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-link text-white"
                style={{ textDecoration: "none" }}
              >
                Products
              </Link>
              {href === "/products" && <div className="tab-indicator"></div>}
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className="nav-link text-white"
                style={{ textDecoration: "none" }}
              >
                Cart
              </Link>
              {href === "/cart" && <div className="tab-indicator"></div>}
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link text-white"
                style={{ textDecoration: "none" }}
              >
                Contact Us
              </Link>
              {href === "/contact" && <div className="tab-indicator"></div>}
            </li>
          </ul>

          <div className="hello-user">
            {currentUser ? (
              <div
                className="col border border-0 rounded-2 px-3 py-1 d-flex justify-content-center align-items-center"
                style={{ background: "#52057B", cursor: "pointer" }}
                onClick={() => setopen(!open)}
              >
                <div className="m-1" style={{ color: "white" }}>
                  {`Hello  ${currentUser.firstname}`}
                </div>
                {open && (
                  <div className="menu-options">
                    <Link
                      className="link text-dark"
                      to="/myorders"
                      style={{ textDecoration: "none" }}
                    >
                      My Orders
                    </Link>
                    <p
                      className="link text-dark m-0"
                      onClick={handelLogOut}
                      style={{ textDecoration: "none" }}
                    >
                      Logout
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/signIn"
                className="nav-link text-white"
                style={{ textDecoration: "none" }}
              >
                <Avatar />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
