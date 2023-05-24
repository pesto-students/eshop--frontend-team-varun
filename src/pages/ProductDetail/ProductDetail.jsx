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
import ImageNotFound from "../../assets/image_not_found.jpeg";

const ProductDetail = ({ currentPage }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [selectedImage, setSelectedImage] = useState("");
  const { currentProduct, currentProductLoading, currentProductError } =
    useSelector((state) => state.currentProduct);

  useEffect(() => {
    if (currentProductError) {
      toast.error(`${currentProductError}`);
    }
    dispatch(getProductDetails(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {currentPage === "productDetails" ? (
        currentProductLoading ? (
          <Loader />
        ) : (
          <div
            className="product-details mt-5"
            style={{ backgroundColor: "#f2f4f7" }}
          >
            <section className="container-fluid pt-3 m-0">
              <div className="row m-0 justify-content-evenly">
                <div
                  className="product-images col-lg-4 col-xs-12 my-4 p-0"
                  style={{ width: "493px" }}
                >
                  <div className="container p-3">
                    <img
                      src={
                        selectedImage ||
                        currentProduct?.images[0]?.url ||
                        ImageNotFound
                      }
                      // src=""
                      alt=""
                      className="mainImg img-fluid border bg-light"
                      style={{
                        objectFit: "contain",
                        width: "30rem",
                        height: "30rem",
                      }}
                    />
                  </div>

                  <div className=" img-row d-flex align-items-center my-3 justify-content-around">
                    {currentProduct?.images?.map((imageItem, index) => (
                      <img
                        key={index}
                        src={imageItem?.url}
                        alt=""
                        className="img-fluid col-3 border border-1 rounded-2 p-1"
                        style={{
                          width: "5rem",
                          height: "5rem",
                          objectFit: "contain",
                        }}
                        onMouseOver={(e) => setSelectedImage(imageItem?.url)}
                      />
                    ))}
                  </div>
                </div>

                <div className="col-lg-6 col-xs-12 mt-5">
                  <ProductInfo currentProduct={currentProduct} />
                </div>
              </div>
            </section>
            <section className="container-fluid p-0 m-0">
              <Description currentProduct={currentProduct} />
              <div className="row mt-4 mxP-1">
                <div className="col-lg-12 col-sm-12">
                  <ProductReview
                    allReviews={false}
                    id={id}
                    currentProduct={currentProduct}
                  />
                </div>
              </div>
            </section>
          </div>
        )
      ) : (
        <>
          <ProductReview
            allReviews={true}
            id={id}
            currentProduct={currentProduct}
          />
        </>
      )}
    </>
  );
};

export default ProductDetail;
