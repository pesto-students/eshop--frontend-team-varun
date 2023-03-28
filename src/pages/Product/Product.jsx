import React, { useEffect, useState } from "react";
import Dealcards from "../../components/Dealcards/Dealcards";
import Filters from "../../components/Filters/Filters";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/Loader/Loader";
import axios from "axios";
import Paginate from "../../components/Pagination/Pagination";
import {
  getProductsUsingFilters,
  getUserCoordinates,
} from "../../Redux/Actions/productActions";

const Product = () => {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => {
    dispatch(getProductsUsingFilters("", "", [0, 9999999], pageNumber));
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      dispatch(getProductsUsingFilters("", "", [0, 9999999], currentPage - 1));
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(productsCount / resultPerPage)) {
      dispatch(getProductsUsingFilters("", "", [0, 9999999], currentPage + 1));
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setUserAddress(getUserCoordinates());
    dispatch(getProductsUsingFilters());
  }, []);

  const {
    products,
    productsError,
    productsLoading,
    productsCount,
    resultPerPage,
  } = useSelector((state) => state.products);

  const searchSubmitHandler = (e) => {
    if (keyword.trim()) {
      dispatch(getProductsUsingFilters(keyword));
    }
  };

  const childToParent = (category, minPrice, maxPrice, brand) => {
    console.log(brand);
    dispatch(
      getProductsUsingFilters("", category, [minPrice, maxPrice], 0, brand)
    );
  };

  return (
    <section className="product-list mt-5">
      <div className="product-list-header pt-5">
        <div className="user-loc d-flex align-items-center gap-2">
          <img src="../assets/location.svg" alt="" />
          <p className="m-0 p-0">{userAddress}</p>
        </div>
        <div className="input-group border rounded-2">
          <input
            type="text"
            className="form-control border-0 shadow-none"
            placeholder="Search Product"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => {
              if (e.target.value === "") {
                dispatch(getProductsUsingFilters());
              }

              return setKeyword(e.target.value);
            }}
          />
          <span
            className="input-group-text bg-white border-0"
            id="basic-addon2"
          >
            <img
              src="../assets/search.svg"
              alt=""
              onClick={searchSubmitHandler}
            />
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
            <Filters childToParent={childToParent} />
          </div>
        </div>
        <div className="product-filters">
          <Filters childToParent={childToParent} />
        </div>

        <div className="container-fluid m-0 p-0 d-flex flex-column justify-content-between">
          <div className="row">
            {productsLoading ? (
              <>
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
          {!productsLoading && (
            <Paginate
              postsPerPage={resultPerPage}
              totalPosts={productsCount}
              currentPage={currentPage}
              paginate={paginate}
              previousPage={previousPage}
              nextPage={nextPage}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
