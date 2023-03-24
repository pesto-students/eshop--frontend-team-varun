import React, { useEffect, useState } from "react";
import Dealcards from "../../components/Dealcards/Dealcards";
import Filters from "../../components/Filters/Filters";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../Redux/Actions/productActions";
import Loader from "../../components/Loader/Loader";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { products, productsError, productsLoading } = useSelector(
    (state) => state.products
  );

  return (
    <section className="product-list">
      <div className="product-list-header">
        <div className="user-loc d-flex align-items-center gap-2">
          <img src="../assets/location.svg" alt="" />
          <p className="m-0 p-0">Surat, Gujarat</p>
        </div>
        <div className="input-group border rounded-2">
          <input
            type="text"
            className="form-control border-0"
            placeholder="Search Product"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span
            className="input-group-text bg-white border-0"
            id="basic-addon2"
          >
            <img src="../assets/search.svg" alt="" />
          </span>
        </div>
      </div>
      <div className="product-list-body">
        <div className="product-filter-mobile">
          <p>
            <a
              className="text-dark text-decoration-none"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <p className="fw-semibold mb-0">
                Filters
                <span>
                  <FontAwesomeIcon icon={faAngleDown} />
                </span>
              </p>
            </a>
          </p>
          <div className="collapse" id="collapseExample">
            <Filters />
          </div>
        </div>
        <div className="product-filters">
          <Filters />
        </div>
        <div className="container-fluid m-0 p-0">
          <div className="row">
            {productsLoading ? (
              <>
                {/* Add Loadding component  */}
                <Loader />
              </>
            ) : (
              products?.map((product) => (
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-4 p-0 text-dark">
                  <Dealcards deall={product} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      {/* <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={products.length}
      /> */}
    </section>
  );
};

export default Product;
