import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ currentPage }) => {
  return (
    <div className="container border border-1 rounded-1 mb-5 bg-white">
      <div className=" d-flex flex-column pt-4 align-items-center align-items-sm-start">
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 justify-content-center align-items-start align-items-sm-start"
          id="menu"
        >
          <li className="nav-item">
            <Link
              to="/admin/products"
              className="nav-link align-start"
              style={{ textDecoration: "none" }}
            >
              <>
                <i
                  className="fas fa-store mx-3"
                  style={
                    currentPage === "products"
                      ? { color: "#52057B", fontWeight: "bold" }
                      : { color: "black" }
                  }
                ></i>
                <span
                  className="d-none d-sm-inline"
                  style={
                    currentPage === "products"
                      ? { color: "#52057B", fontWeight: "bold" }
                      : { color: "black" }
                  }
                >
                  Products
                </span>
              </>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/admin/orders"
              className="nav-link align-start"
              style={{ textDecoration: "none" }}
            >
              <i
                className="fas fa-list mx-3"
                style={
                  currentPage === "orders"
                    ? { color: "#52057B", fontWeight: "bold" }
                    : { color: "black" }
                }
              ></i>
              <span
                className="d-none d-sm-inline"
                style={
                  currentPage === "orders"
                    ? { color: "#52057B", fontWeight: "bold" }
                    : { color: "black" }
                }
              >
                Orders
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/admin/users"
              className="nav-link align-start"
              style={{ textDecoration: "none" }}
            >
              <i
                className="fas fa-user mx-3 "
                style={
                  currentPage === "users"
                    ? { color: "#52057B", fontWeight: "bold" }
                    : { color: "black" }
                }
              ></i>
              <span
                className="d-none d-sm-inline"
                style={
                  currentPage === "users"
                    ? { color: "#52057B", fontWeight: "bold" }
                    : { color: "black" }
                }
              >
                Users
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/admin/reviews"
              className="nav-link align-start"
              style={{ textDecoration: "none" }}
            >
              <i
                className="fas fa-comments mx-3"
                style={
                  currentPage === "reviews"
                    ? { color: "#52057B", fontWeight: "bold" }
                    : { color: "black" }
                }
              ></i>
              <span
                className="d-none d-sm-inline"
                style={
                  currentPage === "reviews"
                    ? { color: "#52057B", fontWeight: "bold" }
                    : { color: "black" }
                }
              >
                Reviews
              </span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
