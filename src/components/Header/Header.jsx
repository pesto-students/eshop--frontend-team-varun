import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/userSlice";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelLogOut = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-black">
      <div className="container-fluid">
        <Link
          to="/"
          className="nav-link navbar-brand text-white mx-5 pl-5 fw-bolder fs-4"
          style={{ textDecoration: "none" }}
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
            </li>
            <li className="nav-item">
              <Link
                to="/admin/products"
                className="nav-link text-white"
                style={{ textDecoration: "none" }}
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-link text-white"
                style={{ textDecoration: "none" }}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className="nav-link text-white"
                style={{ textDecoration: "none" }}
              >
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link text-white"
                style={{ textDecoration: "none" }}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="me-5">
            {currentUser ? (
              <div
                className="col border border-2 rounded-4 px-3 d-flex justify-content-center align-items-center"
                style={{ background: "#52057B", cursor: "pointer" }}
                onClick={handelLogOut}
              >
                <div className="m-1" style={{ color: "white" }}>
                  {`Hello ${currentUser.name}`}
                </div>
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
