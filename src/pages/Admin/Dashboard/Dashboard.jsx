import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Products from "../pages/Products/Products";
import "./Dashboard.css";
import ListView from "../pages/ListView/ListView";
import { Link } from "react-router-dom";
import AddProduct from "../pages/AddProduct/AddProduct";
import { useDispatch } from "react-redux";
import { getProductsUsingFilters } from "../../../Redux/Actions/productActions";

const Dashboard = ({ currentPage }) => {
  const pageName = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const searchSubmitHandler = (e) => {
    if (keyword.trim()) {
      dispatch(getProductsUsingFilters(keyword));
    }
  };

  return (
    <div
      className="row dashboard m-0 p-0 mt-5"
      style={{ backgroundColor: "#f2f4f7" }}
    >
      <div className="row pt-3">
        <div className="col-3">
          <div className="row d-flex justify-content-start align-items-start h-100">
            <div className="col-lg-11  col-xl-11">
              <div className="card-body">
                <div className="row justify-content-start mx-md-3">
                  <div className="col-md-12 col-lg-12 col-xl-12 order-2 order-lg-1">
                    <p className="text-left h3 fw-semibold mb-5 mt-4 ">
                      {pageName}
                    </p>
                    <div className="">
                      <Sidebar currentPage={currentPage} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-9">
          <section className="">
            <div className="row d-flex justify-content-start align-items-start h-100">
              <div className="col-lg-12 col-xl-12">
                <div className="card-body" style={{ width: "100%" }}>
                  <div className="row justify-content-start">
                    {/* SearchBar and Add button implementation */}
                    {currentPage !== "Add Product" ? (
                      <div className="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                        <div className="container justify-content-center mt-4 mb-3">
                          <div className="row">
                            <div className="col-md-10 d-flex justify-content-start m-0 p-0">
                              {currentPage === "products" ? (
                                <div className="input-group mb-3 bg-white border border-1 rounded py-1">
                                  <input
                                    type="text"
                                    className="form-control input-text border border-0 shadow-none"
                                    placeholder={`Search  ${currentPage.slice(
                                      0,
                                      currentPage.length - 1
                                    )}... `}
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    onChange={(e) => {
                                      if (e.target.value === "") {
                                        dispatch(getProductsUsingFilters());
                                      }
                                      return setKeyword(e.target.value);
                                    }}
                                  />

                                  <span
                                    className="input-group-text bg-white border-0"
                                    id="basic-addon2"
                                  >
                                    <img
                                      src="../assets/search.svg"
                                      alt=""
                                      onClick={searchSubmitHandler}
                                    />
                                  </span>
                                </div>
                              ) : (
                                <div className="col-md-10 col-lg-10 col-xl-10 p-4 mt-3"></div>
                              )}
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
                      <div className="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1 py-4 m-0"></div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-xl-12 m-0">
                {(pageName === "Products" && (
                  <Products
                    page="Products"
                    keyword={keyword}
                    searchSubmitHandler={searchSubmitHandler}
                  />
                )) ||
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
