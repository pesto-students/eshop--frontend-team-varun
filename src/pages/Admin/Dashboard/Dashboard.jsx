import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Products from "../pages/Products/Products";
import "./Dashboard.css";
import ListView from "../pages/ListView/ListView";
import { Link, useNavigate } from "react-router-dom";
import AddProduct from "../pages/AddProduct/AddProduct";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = ({ currentPage }) => {
  const pageName = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser === "null" || currentUser?.role !== "admin") {
      navigate("/");
    }
  });

  return (
    <div
      className="row dashboard m-0 p-0"
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
                      <></>
                    ) : (
                      <div className="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1 py-4 my-4"></div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-xl-12 mt-3">
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
