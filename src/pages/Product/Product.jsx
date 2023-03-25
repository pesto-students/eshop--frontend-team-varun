import React, { useEffect, useState } from "react";
import Dealcards from "../../components/Dealcards/Dealcards";
import Filters from "../../components/Filters/Filters";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../Redux/Actions/productActions";
import Loader from "../../components/Loader/Loader";
import {
  addProductsFailure,
  addProductsRequest,
  addProductsSuccess,
} from "../../Redux/Reducers/productSlice";
import axios from "axios";
import { toast } from "react-toastify";
import { Pagination } from "react-bootstrap";

const Product = () => {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  

  // Fetch all products from api
  const fetchTopDeals = async (keyword = "", category = "") => {
    dispatch(addProductsRequest());
    try {
      if (category) {
        const res = await axios.get(
          `http://localhost:4000/api/v1/products?keyword=${keyword}&category=${category}`
        );
        dispatch(addProductsSuccess(res.data));
      } else {
        const res = await axios.get(
          `http://localhost:4000/api/v1/products?keyword=${keyword}`
        );
        dispatch(addProductsSuccess(res.data));
      }
    } catch (error) {
      // console.log(error);
      toast.error(`${productsError}`);
      dispatch(addProductsFailure(error));
    }
  };

  useEffect(() => {
    fetchTopDeals();
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
      fetchTopDeals(keyword);
    } else {
      fetchTopDeals("");
    }
  };

  const childToParent = (childdata) => {
    fetchTopDeals("", childdata);
  };

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

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
            className="form-control border-0 shadow-none"
            placeholder="Search Product"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => {
              // if (e.target.value === "") {
              //   fetchTopDeals("");
              // }
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
            <Filters />
          </div>
        </div>
        <div className="product-filters">
          <Filters childToParent={childToParent} />
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
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextpagetext="Next"
                prevpagetext="Prev"
                firstpagetext="1st"
                lastpagetext="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
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
