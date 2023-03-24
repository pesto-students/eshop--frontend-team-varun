import React, { useEffect, useState } from "react";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import Description from "../../components/Description/Description";
import ProductReview from "../../components/ProductReview/ProductReview";
import Dealcards from "../../components/Dealcards/Dealcards";
import map from "lodash/map";
import range from "lodash/range";
import "./ProductDetail.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  getCurrentProductFailure,
  getCurrentProductRequestStart,
  getCurrentProductSuccess,
} from "../../Redux/currentProductSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = ({ currentPage }) => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductDetails = async () => {
      dispatch(getCurrentProductRequestStart());
      try {
        const res = await axios.get(
          `http://localhost:4000/api/v1/product/${id}`
        );

        dispatch(getCurrentProductSuccess(res.data));
      } catch (error) {
        dispatch(getCurrentProductFailure(error));
      }
    };
    fetchProductDetails();
  }, []);

  const { currentProduct } = useSelector((state) => state.currentProduct);

  return (
    <>
      {currentPage === "productDetails" ? (
        <div className="product-details">
          <section className="container-fluid p-0 m-0">
            <div className="row m-0">
              <div
                className="product-images col-lg-4 col-xs-12 my-4"
                style={{ width: "493px" }}
              >
                <img
                  src="../assets/productDetails/laptop.png"
                  alt=""
                  className="img-fluid border"
                />
                <div className="img-row d-flex align-items-center my-3 justify-content-between">
                  <img
                    src="../assets/productDetails/laptop1.png"
                    alt=""
                    className="img-fluid col-3"
                  />
                  <img
                    src="../assets/productDetails/laptop2.png"
                    alt=""
                    className="img-fluid col-3"
                  />
                  <img
                    src="../assets/productDetails/laptop3.png"
                    alt=""
                    className="img-fluid col-3"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-xs-12 mt-3">
                {/* Send currentProduct and update productInfo */}
                <ProductInfo currentProduct={currentProduct}/>
              </div>
            </div>
          </section>
          <section className="container-fluid p-0 m-0">
            <div className="row m-0">
              <div className="col-lg-9 col-sm-12">
                {/* Send currentProduct and update descriptiona and productReview */}
                <Description desc={currentProduct.description}/>
                <ProductReview allReviews={false} />
              </div>
              {/* <div className="recommend-cards col-lg-2 mt-4">
                {map(range(5), (_) => (
                  <div className="mb-3 mx-auto">
                    <Dealcards
                      deall={{
                        icon: "../assets/productDetails/laptop.png",
                        title:
                          "Canon EOS 1500D 24.1 Digital SLR Camera (Black)...",
                        price: "₹36,990",
                        ratings: "4.9",
                      }}
                    />
                  </div>
                ))}
              </div> */}
            </div>
          </section>
        </div>
      ) : (
        <ProductReview allReviews={true} />
      )}
    </>
  );
};

export default ProductDetail;
