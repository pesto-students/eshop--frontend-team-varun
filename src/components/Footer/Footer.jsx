import React from "react";
// import Copyright from "../Copyright/Copyright";
import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#000000" }}
    >
      <section
        className="d-flex justify-content-between p-4"
        style={{
          backgroundColor: "#000000",
          borderBottom: "1px solid #6351ce",
        }}
      >
        <div className="me-5">
          <span>Get connected with us on social networks</span>
        </div>
        <div>
          <a href="..." className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="..." className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="..." className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="..." className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="..." className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="..." className="text-white me-4">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fs-4 fw-bold">E-Shop</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#52057B",
                  height: "2px",
                }}
              />
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-semibold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#52057B",
                  height: "2px",
                }}
              />
              {/* <p>e-shop Co., Ltd</p> */}
              <p>
                <i className="fas fa-home mr-3"></i>
                1658 Rosewood Lane
                <br />
                New York city, NY
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> admin@e-shope.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> 212 929 9953
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> +01 234 567 89
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-semibold">
                Co-operation - Association
              </h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#52057B",
                  height: "2px",
                }}
              />
              <p>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Operation Regulation of EC-Exchange
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Return Policy
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Privacy Policy
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Selling With e-shope
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Help
                </a>
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-semibold">Customer Support</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#52057B",
                  height: "2px",
                }}
              />
              <p>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Hotline Customer Service
                  <br />
                  212 929 9953
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Frequently asked Questions
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Submit Support Request
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Ordering Guide
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Shipping Methods
                </a>
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-semibold">Others</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#52057B",
                  height: "2px",
                }}
              />
              <p>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Installment Purchase Guide
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Import Policy
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Customer Support <br />
                  customer@e-shope.com
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Security Error Report:
                  <br />
                  admin@e.shope.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-left p-3" style={{ backgroundColor: "white" }}>
        <a className="text-black" href="..." style={{ textDecoration: "none" }}>
          Copyright 2023 © E-Shop
        </a>
      </div>
    </footer>
  );
};

export default Footer;
