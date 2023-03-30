import React, { useEffect, useState } from "react";

import ProductInfo from "../../components/ProductInfo/ProductInfo";
import Description from "../../components/Description/Description";
import ProductReview from "../../components/ProductReview/ProductReview";
import "./ProductDetail.css";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../Redux/Actions/productActions";
import Loader from "../../components/Loader/Loader";
import { toast } from "react-toastify";
import { addReview } from "../../Redux/Actions/reviewActions";

const ProductDetail = ({ currentPage }) => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(id);
    if (currentProductError) {
      toast.error(`${currentProductError}`);
    }

    // Fetch Product Details
    dispatch(getProductDetails(id));
  }, [dispatch]);

  const { currentProduct, currentProductLoading, currentProductError } =
    useSelector((state) => state.currentProduct);

  return (
    <>
      {currentPage === "productDetails" && currentProduct ? (
        currentProductLoading ? (
          <Loader />
        ) : (

          <div className="product-details container-xxl mt-5" style={{ backgroundColor: "#f2f4f7" }}>
            <section className="container-fluid pt-3 m-0">
              <div className="row m-0 mx-5">
                <div
                  className="product-images col-lg-4 col-xs-12 my-4 p-0"
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
                <div className="col-lg-7 col-xs-12 mt-3 ">
                  <ProductInfo currentProduct={currentProduct} />
                </div>
              </div>
            </section>
            <section className="container-fluid p-0 m-0">
              <Description desc={currentProduct.description} />
              <div className="row mt-4 mxP-1">
                <div className="col-lg-12 col-sm-12">
                  <ProductReview allReviews={false} id={id}/>
                </div>
              </div>
            </section>
          </div>
        )
      ) : (
        <ProductReview allReviews={true} />
      )}
    </>
  );
};

export default ProductDetail;