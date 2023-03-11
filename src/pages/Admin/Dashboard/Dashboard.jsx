import React from "react";
import Sidebar from "../components/Sidebar";
import Users from "../pages/Users/Users";
import Orders from "../pages/Orders/Orders";
import Products from "../pages/Products/Products";
import Reviews from "../pages/Reviews/Reviews";
import "./Dashboard.css";

const Dashboard = ({ currentPage }) => {
  const pageName = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
  return (
    <div class="row dashboard" style={{ backgroundColor: "#f2f4f7" }}>
      <div class="row">
        <div class="col-3">
          <section class="">
            <div class="row d-flex justify-content-start align-items-start h-100">
              <div class="col-lg-12  col-xl-10">
                <div class="card-body">
                  <div class="row justify-content-start mx-md-4">
                    <div class="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                      <p class="text-left h1 fw-bold mb-5 mt-4">{pageName}</p>
                      <div>
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
                  <div class="row justify-content-start mx-1">
                    {/* SearchBar and Add button implementation */}
                    <div class="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">
                      <div class="container justify-content-center mt-4">
                        <div class="row">
                          <div class="col-md-10 d-flex justify-content-start ">
                            <div class="input-group mb-3 bg-light border border-1 rounded">
                              <input
                                type="text"
                                class="form-control input-text border border-0"
                                placeholder={`Search  ${currentPage}... `}
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                              />
                              <div class="input-group-append">
                                <button
                                  class="btn btn-lg border border-0"
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
                            <div class="mx-4">
                              <button
                                class="btn border border-0 "
                                style={{
                                  backgroundColor: "#52057B",
                                  color: "white",
                                  width: "110px",
                                  height: "2.8rem",
                                }}
                              >
                                {`Add ${currentPage}`}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12  col-xl-12">
                {(pageName === "Products" && <Products />) ||
                  (pageName === "Users" && <Users />) ||
                  (pageName === "Orders" && <Orders />) ||
                  (pageName === "Reviews" && <Reviews />)}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
