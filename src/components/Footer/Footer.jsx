import React from "react";
// import Copyright from "../Copyright/Copyright";
import "./Footer.css";

const Footer = () => {
  return (
    <footer
      class="text-center text-lg-start text-white"
      style={{ backgroundColor: "#000000" }}
    >
      <section
        class="d-flex justify-content-between p-4"
        style={{
          backgroundColor: "#000000",
          borderBottom: "1px solid #6351ce",
        }}
      >
        <div class="me-5">
          <span>Get connected with us on social networks</span>
        </div>
        <div>
          <a href="..." class="text-white me-4">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="..." class="text-white me-4">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="..." class="text-white me-4">
            <i class="fab fa-google"></i>
          </a>
          <a href="..." class="text-white me-4">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="..." class="text-white me-4">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="..." class="text-white me-4">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </section>
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold">E-Shop</h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
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
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold">Contact</h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#52057B",
                  height: "2px",
                }}
              />
              {/* <p>e-shop Co., Ltd</p> */}
              <p>
                <i class="fas fa-home mr-3"></i>
                1658 Rosewood Lane
                <br />
                New York city, NY
              </p>
              <p>
                <i class="fas fa-envelope mr-3"></i> admin@e-shope.com
              </p>
              <p>
                <i class="fas fa-phone mr-3"></i> 212 929 9953
              </p>
              <p>
                <i class="fas fa-print mr-3"></i> +01 234 567 89
              </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold">Co-operation - Association</h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#52057B",
                  height: "2px",
                }}
              />
              <p>
                <a
                  href="#!"
                  class="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Operation Regulation of EC-Exchange
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  class="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Return Policy
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  class="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Privacy Policy
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  class="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Selling With e-shope
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  class="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Help
                </a>
              </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold">Customer Support</h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#52057B",
                  height: "2px",
                }}
              />
              <p>
                <a
                  href="#!"
                  class="text-white"
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
                  class="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Frequently asked Questions
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  class="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Submit Support Request
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  class="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Ordering Guide
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  class="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Shipping Methods
                </a>
              </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold">Others</h6>
              {/* <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#52057B",
                  height: "2px",
                }}
              /> */}
              <p>
                <a
                  href="#!"
                  class="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Installment Purchase Guide
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  class="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Import Policy
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  class="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Customer Support <br />
                  customer@e-shope.com
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  class="text-white"
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

      <div class="text-left p-3" style={{ backgroundColor: "white" }}>
        <a class="text-black" href="..." style={{ textDecoration: "none" }}>
          Copyright 2023 © E-Shop
        </a>
      </div>
    </footer>
  );
};

export default Footer;
