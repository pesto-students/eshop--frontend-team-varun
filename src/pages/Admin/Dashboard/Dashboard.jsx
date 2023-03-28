import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Products from "../pages/Products/Products";
import "./Dashboard.css";
import ListView from "../pages/ListView/ListView";
import { Link } from "react-router-dom";
import AddProduct from "../pages/AddProduct/AddProduct";
import { useDispatch } from "react-redux";

const Dashboard = ({ currentPage }) => {
  const pageName = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
  const dispatch = useDispatch();

  return (
    <div className="row dashboard m-0" style={{ backgroundColor: "#f2f4f7" }}>
      <div className="row">
        <div className="col-3">
          <section className="">
            <div className="row d-flex justify-content-start align-items-start h-100">
              <div className="col-lg-11  col-xl-11">
                <div className="card-body">
                  <div className="row justify-content-start mx-md-3">
                    <div className="col-md-12 col-lg-12 col-xl-12 order-2 order-lg-1">
                      <p className="text-left h3 fw-semibold mb-5 mt-4 ">
                        {pageName}
                      </p>
                      <div className="me-4">
                        <Sidebar currentPage={currentPage} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-9">
          <section className="">
            <div className="row d-flex justify-content-start align-items-start h-100">
              <div className="col-lg-12  col-xl-12">
                <div className="card-body" style={{ width: "100%" }}>
                  <div className="row justify-content-start mx-2">
                    {/* SearchBar and Add button implementation */}
                    {currentPage !== "Add Product" ? (
                      <div className="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                        <div className="container justify-content-center mt-4 mb-3">
                          <div className="row">
                            <div className="col-md-10 d-flex justify-content-start ">
                              <div className="input-group mb-3 bg-light border border-1 rounded">
                                <input
                                  type="text"
                                  className="form-control input-text border border-0 shadow-none"
                                  placeholder={`Search  ${currentPage.slice(
                                    0,
                                    currentPage.length - 1
                                  )}... `}
                                  aria-label="Recipient's username"
                                  aria-describedby="basic-addon2"
                                />

                                <div className="input-group-append">
                                  <button
                                    className="btn btn-lg border border-0 bg-light"
                                    style={{
                                      outline: "#52057B",
                                      backgroundColor: "white",
                                    }}
                                    type="button"
                                  >
                                    <i
                                      className="fa fa-search"
                                      style={{ color: "#52057B" }}
                                    ></i>
                                  </button>
                                </div>
                              </div>
                              {currentPage === "products" && (
                                <div className="mx-4">
                                  <Link to="/admin/addProduct">
                                    <button
                                      className="btn border border-0 "
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
                      <div className="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1 py-4 my-4"></div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-12  col-xl-12">
                {(pageName === "Products" && <Products page="Products" />) ||
                  (pageName === "Orders" && <ListView page="orders" />) ||
                  (pageName === "Users" && <ListView page="users" />) ||
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
