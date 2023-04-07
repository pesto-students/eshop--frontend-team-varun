import React, { useEffect, useState } from "react";
import "./Products.css";
import Dealcards from "../../../../components/Dealcards/Dealcards";
import useFetch from "../../../../hooks/useFetch";
import Loader from "../../../../components/Loader/Loader";
import Paginate from "../../../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getProductsUsingFilters } from "../../../../Redux/Actions/productActions";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  const fetchMoreData = () => {
    console.log(currentPage);
    dispatch(getProductsUsingFilters("", "", [0, 9999999], currentPage + 1));
    setCurrentPage(currentPage + 1);
  };

  const searchSubmitHandler = (e) => {
    if (keyword.trim()) {
      dispatch(getProductsUsingFilters(keyword));
    }
  };

  useEffect(() => {
    dispatch(getProductsUsingFilters());
    setCurrentPage(currentPage + 1);
  }, []);

  const {
    products,
    productsError,
    productsLoading,
    productsCount,
    resultPerPage,
  } = useSelector((state) => state.products);

  return (
    <div className="container-fluid mb-5 m-0 p-0">
      <div className="m-0">
        <div className="d-flex w-75">
          <div className="input-group border rounded-2 mb-5">
            <input
              type="text"
              className="form-control border-0 shadow-none p-2"
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
          <div className="mx-4">
            <Link to="/admin/addProduct">
              <button
                className="btn border border-0 p-2"
                style={{
                  backgroundColor: "#52057B",
                  color: "white",
                  width: "120px",
                }}
              >
                Add Product
              </button>
            </Link>
          </div>
        </div>
        <InfiniteScroll
          dataLength={products.length}
          next={fetchMoreData}
          hasMore={keyword ? false : products.length !== productsCount}
          loader={<Loader />}
        >
          <div className="container">
            <div className="row">
              {productsLoading == true ? (
                <Loader />
              ) : products.length > 0 ? (
                products?.map((product) => (
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-4 p-0 text-dark">
                    <Dealcards deall={product} />
                  </div>
                ))
              ) : (
                <p className="text-center">No Products Found</p>
              )}
            </div>
          </div>
        </InfiniteScroll>
        {/* {!productsLoading && products.length > 0 && (
          <Paginate
            postsPerPage={resultPerPage}
            totalPosts={productsCount}
            currentPage={currentPage}
            paginate={paginate}
            previousPage={previousPage}
            nextPage={nextPage}
          />
        )} */}
      </div>
    </div>
  );
};

export default Products;
