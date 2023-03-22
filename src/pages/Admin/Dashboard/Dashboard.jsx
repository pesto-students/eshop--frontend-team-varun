import React from "react";
import Sidebar from "../components/Sidebar";
import Products from "../pages/Products/Products";

import { products } from "../../../localFiles/ProductsFile";
import { Orders } from "../../../localFiles/OrdersFile";
import { Users } from "../../../localFiles/UsersFile";
import { Comments } from "../../../localFiles/CommentsFile";

import "./Dashboard.css";
import ListView from "../pages/ListView/ListView";
import { Link } from "react-router-dom";
import AddProduct from "../pages/AddProduct/AddProduct";

const Dashboard = ({ currentPage }) => {
  const pageName = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  return (
    <div class="row dashboard m-0" style={{ backgroundColor: "#f2f4f7" }}>
      <div class="row">
        <div class="col-3">
          <section class="">
            <div class="row d-flex justify-content-start align-items-start h-100">
              <div class="col-lg-11  col-xl-11">
                <div class="card-body">
                  <div class="row justify-content-start mx-md-4">
                    <div class="col-md-12 col-lg-12 col-xl-12 order-2 order-lg-1">
                      <p class="text-left h1 fw-bold mb-5 mt-4 ">{pageName}</p>
                      <div class="mx-2">
                        <Sidebar currentPage={currentPage} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="col-9">
          <section class="">
            <div class="row d-flex justify-content-start align-items-start h-100">
              <div class="col-lg-12  col-xl-12">
                <div class="card-body" style={{ width: "100%" }}>
                  <div class="row justify-content-start mx-2">
                    {/* SearchBar and Add button implementation */}
                    {currentPage !== "Add Product" ? (
                      <div class="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                        <div class="container justify-content-center mt-4 mb-3">
                          <div class="row">
                            <div class="col-md-10 d-flex justify-content-start ">
                              <div class="input-group mb-3 bg-light border border-1 rounded">
                                <input
                                  type="text"
                                  class="form-control input-text border border-0 shadow-none"
                                  placeholder={`Search  ${currentPage.slice(
                                    0,
                                    currentPage.length - 1
                                  )}... `}
                                  aria-label="Recipient's username"
                                  aria-describedby="basic-addon2"
                                />

                                <div class="input-group-append">
                                  <button
                                    class="btn btn-lg border border-0 bg-light"
                                    style={{
                                      outline: "#52057B",
                                      backgroundColor: "white",
                                    }}
                                    type="button"
                                  >
                                    <i
                                      class="fa fa-search"
                                      style={{ color: "#52057B" }}
                                    ></i>
                                  </button>
                                </div>
                              </div>
                              {currentPage === "products" && (
                                <div class="mx-4">
                                  <Link to="/admin/addProduct">
                                    <button
                                      class="btn border border-0 "
                                      style={{
                                        backgroundColor: "#52057B",
                                        color: "white",
                                        width: "120px",
                                        height: "2.8rem",
                                      }}
                                    >
                                      {`Add ${currentPage.slice(
                                        0,
                                        currentPage.length - 1
                                      )}`}
                                    </button>
                                  </Link>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div class="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1 py-4 my-4"></div>
                    )}
                  </div>
                </div>
              </div>
              <div class="col-lg-12  col-xl-12">
                {(pageName === "Products" && (
                  <Products products={products} page="Products" />
                )) ||
                  (pageName === "Orders" && (
                    <ListView rawData={Orders} page="Orders" />
                  )) ||
                  (pageName === "Users" && (
                    <ListView rawData={Users} page="Users" />
                  )) ||
                  (pageName === "Reviews" && (
                    <ListView rawData={Comments} page="Reviews" />
                  )) ||
                  (pageName === "Add Product" && <AddProduct />)}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
