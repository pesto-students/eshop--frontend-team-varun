import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ currentPage }) => {
  return (
    <div class="container border border-1 rounded-1 mb-5 bg-white">
      <div class=" d-flex flex-column pt-4 align-items-center align-items-sm-start">
        <ul
          class="nav nav-pills flex-column mb-sm-auto mb-0 justify-content-center align-items-start align-items-sm-start"
          id="menu"
        >
          <li class="nav-item">
            <Link
              to="/admin/products"
              class="nav-link align-start"
              style={{ textDecoration: "none" }}
            >
              <>
                <i
                  class="fas fa-store mx-3"
                  style={
                    currentPage === "products"
                      ? { color: "#52057B", fontWeight: "bold" }
                      : { color: "black" }
                  }
                ></i>
                <span
                  class="d-none d-sm-inline"
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

          <li class="nav-item">
            <Link
              to="/admin/orders"
              class="nav-link align-start"
              style={{ textDecoration: "none" }}
            >
              <i
                class="fas fa-list mx-3"
                style={
                  currentPage === "orders"
                    ? { color: "#52057B", fontWeight: "bold" }
                    : { color: "black" }
                }
              ></i>
              <span
                class="d-none d-sm-inline"
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
          <li class="nav-item">
            <Link
              to="/admin/users"
              class="nav-link align-start"
              style={{ textDecoration: "none" }}
            >
              <i
                class="fas fa-user mx-3 "
                style={
                  currentPage === "users"
                    ? { color: "#52057B", fontWeight: "bold" }
                    : { color: "black" }
                }
              ></i>
              <span
                class="d-none d-sm-inline"
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
          <li class="nav-item">
            <Link
              to="/admin/reviews"
              class="nav-link align-start"
              style={{ textDecoration: "none" }}
            >
              <i
                class="fas fa-comments mx-3"
                style={
                  currentPage === "reviews"
                    ? { color: "#52057B", fontWeight: "bold" }
                    : { color: "black" }
                }
              ></i>
              <span
                class="d-none d-sm-inline"
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
