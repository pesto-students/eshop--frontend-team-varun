import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import "./productInfo.css";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const ProductInfo = () => {
  return (
    <div>
      <p className="fw-semibold fs-5 m-0">
        Lenovo IdeaPad Slim 5 Intel Core i5 11th Gen 15.6" (39.62cm) FHD IPS
        Thin & Light Laptop (16GB/512GB SSD/Windows 11/Office
        2021/Backlit/FPR/3months Game Pass/Graphite Grey/1.66Kg), 82FG01B5IN
      </p>
      <section className="d-flex align-items-center mt-2">
        <img src="../assets/productDetails/ratings.png" alt="" />
        <p className="m-0 ms-2 p-0">(4.7) - 81 ratings</p>
      </section>
      <section>
        <h2 className="mt-3 fw-bold">₹59,490</h2>
        <p className="m-0 text-secondary mt-1">Inclusive of all taxes</p>
        <p className="m-0 text-secondary">
          EMI starts at ₹2,842. No Cost EMI available EMI options
        </p>
      </section>
      <div className="choose-color d-flex align-items-center border-top mt-3 me-3">
        <p className="m-0 p-0 me-auto">Choose Color</p>
        <div className="color-box d-flex gap-2">
          <p className="border rounded px-3 py-1 mb-0">Black</p>
          <p className="border rounded px-3 py-1 mb-0">Gray</p>
          <p className="border rounded px-3 py-1 mb-0">White</p>
          <p className="border rounded px-3 py-1 mb-0">Red</p>
        </div>
      </div>
      <div className="choose-memory d-flex align-items-center border-top border-bottom me-3">
        <p className="m-0 p-0 me-auto">Memory (RAM)</p>
        <div className="memory-box d-flex gap-2">
          <p className="border rounded px-3 py-1 mb-0">4GB</p>
          <p className="border rounded px-3 py-1 mb-0">8GB</p>
          <p className="border rounded px-3 py-1 mb-0">12GB</p>
          <p className="border rounded px-3 py-1 mb-0">16GB</p>
        </div>
      </div>
      <div className="quantity d-flex align-items-center border-bottom me-3">
        <p className="m-0 p-0 me-auto">Quantity</p>
        <div className="quantity-box d-flex gap-3 align-items-center">
          <FontAwesomeIcon
            icon={faPlus}
            style={{ backgroundColor: "#DEDEDE", padding: "5px" }}
          />
          <p className="m-0 p-0">1</p>
          <FontAwesomeIcon
            icon={faMinus}
            style={{ backgroundColor: "#DEDEDE", padding: "5px" }}
          />
        </div>
      </div>
      <section className="d-flex mt-3 gap-3 me-3">
        <button
          type="button"
          className="btn text-light w-100 p-3"
          style={{ background: "#52057B" }}
        >
          Buy Now
        </button>
        <button
          type="button"
          className="btn d-flex text-dark w-100 border-dark rounded-2 justify-content-center gap-1 m-0 p-3"
        >
          <img src="../assets/productDetails/cart.svg" alt="" /> Add to cart
        </button>
      </section>
      <div
        className="container mt-3 p-0"
        style={{ borderBottom: "1px solid #E2E2E2", margin: "0" }}
      >
        <div className="row gy-1 mt-3">
          <div className="col-lg-6 mb-3">
            <img
              src="../assets/productDetails/original.png"
              alt=""
              style={{ width: "24px", marginRight: "8px" }}
            />{" "}
            Original store product
          </div>
          <div className="col-lg-6 mb-3">
            <img
              src="../assets/productDetails/warranty.png"
              alt=""
              style={{ width: "24px", marginRight: "8px" }}
            />{" "}
            Long term warranty
          </div>
          <div className="col-lg-6 mb-3">
            <img
              src="../assets/productDetails/trusted.png"
              alt=""
              style={{ width: "24px", marginRight: "8px" }}
            />{" "}
            100% trusted shop
          </div>
          <div className="col-lg-6 mb-3">
            <img
              src="../assets/productDetails/monthly.png"
              alt=""
              style={{ width: "24px", marginRight: "8px" }}
            />{" "}
            Monthly installment
          </div>
        </div>
      </div>
      <div className="m-0 mt-3 d-flex align-items-center gap-2 justify-content-center">
        <p className="m-0 p-0 me-3 fs-6 fw-normal">Share</p>
        <FacebookShareButton>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <WhatsappShareButton url={"https://web.whatsapp.com/"}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <Link to="instagram://user?username='_darshil_shah_'">
          <img
            src="../assets/productDetails/insta.png"
            alt=""
            style={{ width: "32px", marginRight: "8px" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default ProductInfo;
