import React, { useState } from "react";
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

const ProductInfo = ({ currentProduct }) => {
  const [color, chooseColor] = useState("");
  const [memory, chooseMemory] = useState("");
  const [qty, setQty] = useState(1);

  return (
    <div>
      <p className="fw-semibold fs-5 m-0">{currentProduct.name}</p>
      <section className="d-flex align-items-center mt-2">
        <img src="../assets/productDetails/ratings.png" alt="" />
        <p className="m-0 ms-2 p-0">
          ({currentProduct.ratings}) - {currentProduct.numOfReviews} ratings
        </p>
      </section>
      <section>
        <h2 className="mt-3 fw-bold">₹{currentProduct.price}</h2>
        <p className="m-0 text-secondary mt-1">Inclusive of all taxes</p>
        <p className="m-0 text-secondary">
          EMI starts at ₹2,842. No Cost EMI available EMI options
        </p>
      </section>

      <div className="choose-memory d-flex align-items-center border-top border-bottom mt-3 me-3">
        <p className="m-0 p-0 me-auto">Memory (RAM)</p>
        <div className="memory-box d-flex gap-2">
          <p
            className="px-3 py-1 mb-0"
            onClick={() => chooseMemory("8GB")}
            style={{
              border:
                memory === "8GB" ? "2px solid #52057B" : "2px solid #E2E2E2",
              borderRadius: "4px",
              cursor: "Pointer",
            }}
          >
            8GB
          </p>
          
          <p
            className="px-3 py-1 mb-0"
            onClick={() => chooseMemory("16GB")}
            style={{
              border:
                memory === "16GB" ? "2px solid #52057B" : "2px solid #E2E2E2",
              borderRadius: "4px",
              cursor: "Pointer",
            }}
          >
            16GB
          </p>
        </div>
      </div>
      <div className="quantity d-flex align-items-center border-bottom me-3">
        <p className="m-0 p-0 me-auto">Quantity</p>
        <div className="quantity-box d-flex gap-3 align-items-center">
          <FontAwesomeIcon
            icon={faPlus}
            style={{ backgroundColor: "#DEDEDE", padding: "5px", cursor: "Pointer"}}
            onClick={() => setQty(qty + 1)}
          />
          <p className="m-0 p-0">{qty}</p>
          <FontAwesomeIcon
            icon={faMinus}
            style={{ backgroundColor: "#DEDEDE", padding: "5px", cursor: "Pointer"}}
            onClick={() => setQty(qty - 1)}
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
