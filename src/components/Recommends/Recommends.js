import React from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./recommends.css";

const Recommends = ({ products, loading, error }) => {
  return (
    <div className="recommend">
      <p className="rec_title">Our Recommendation For You</p>
      <div className="rows_recom">
        {loading ? (
          <>
            {/* Make loading component here */}
            <Loader />
          </>
        ) : (
          products?.map((product, index) => {
            console.log(products[index + 1]);
            return (
              <div className="rec_rows">
                {index < products.length / 2 && (
                  <div className="deal-card me-2">
                    <Link
                      to={`/product/${product._id}`}
                      className="text-decoration-none text-dark"
                    >
                      <div className="deal-image p-2">
                        <img
                          src={product.images[0].url}
                          alt="Not found"
                          className="img-fluid "
                        />
                      </div>
                      <div className="deal-content px-2">
                        <button className="btn btn-primary mt-3">
                          Add to cart
                        </button>
                        <p className="deal-title">{product.name}</p>
                        <div className="deal-body">
                          <h5 className="deal-price mb-0">{`₹ ${product.Price}`}</h5>
                          <div className="deal-rating d-flex gap-1 align-items-center">
                            <img src="../assets/star.png" alt="" />
                            <p className="m-0">{product.ratings}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
                {index < products.length - 5 && (
                  <div className="deal-card">
                    <Link
                      to={`/product/${product._id}`}
                      className="text-decoration-none text-dark"
                    >
                      <div className="deal-image p-2">
                        <img
                          src={products[index + 5].images[0].url}
                          alt="Not found"
                          className="img-fluid "
                        />
                      </div>
                      <div className="deal-content px-2">
                        <button className="btn btn-primary mt-2">
                          Add to cart
                        </button>
                        <p className="deal-title">{products[index + 5].name}</p>
                        <div className="deal-body">
                          <h5 className="deal-price mb-0">{`₹ ${
                            products[index + 5].Price
                          }`}</h5>
                          <div className="deal-rating d-flex gap-1 align-items-center">
                            <img src="../assets/star.png" alt="" />
                            <p className="m-0">{products[index + 5].ratings}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Recommends;
