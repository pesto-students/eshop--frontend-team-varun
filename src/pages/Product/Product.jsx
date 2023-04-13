import React, { useEffect, useState } from "react";
import Dealcards from "../../components/Dealcards/Dealcards";
import Filters from "../../components/Filters/Filters";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { getProductsUsingFilters } from "../../Redux/Actions/productActions";
import InfiniteScroll from "react-infinite-scroll-component";

const Product = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(9999999);

  const fetchMoreData = () => {
    dispatch(getProductsUsingFilters("", "", [0, 9999999], currentPage + 1));
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    dispatch(getProductsUsingFilters());
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  const { products, productsLoading, productsCount } = useSelector(
    (state) => state.products
  );

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      searchSubmitHandler();
    } else {
      return;
    }
  };

  const searchSubmitHandler = (e) => {
    if (keyword.trim()) {
      dispatch(getProductsUsingFilters(keyword));
    }
  };

  const childToParent = (category, minPrice, maxPrice, brand) => {
    setCategory(category);
    setBrand(brand);
    console.log(minPrice);
    console.log(maxPrice);
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
    dispatch(
      getProductsUsingFilters("", category, [minPrice, maxPrice], 0, brand)
    );
  };

  return (
    <section className="product-list">
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

        <div className="container-fluid m-0 p-0">
          <div className="input-group border rounded-2 w-50">
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
              onKeyDown={handleEnter}
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
          <InfiniteScroll
            dataLength={products?.length}
            next={fetchMoreData}
            hasMore={
              keyword || category || minPrice > 0 || maxPrice < 999999 || brand
                ? false
                : products?.length !== productsCount
            }
            loader={<Loader />}
          >
            <div className="container p-0">
              <div className="row mt-3 mx-auto">
                {productsLoading ? (
                  <>
                    <Loader />
                  </>
                ) : products?.length > 0 ? (
                  products?.map((product) => (
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-4 p-0 text-dark">
                      <Dealcards deall={product} />
                    </div>
                  ))
                ) : (
                  <p className="noproducts">No Products Found</p>
                )}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </section>
  );
};

export default Product;
