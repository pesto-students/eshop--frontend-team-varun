import React, { useEffect, useState } from "react";
import "./Products.css";
import Dealcards from "../../../../components/Dealcards/Dealcards";
import Loader from "../../../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getProductsUsingFilters } from "../../../../Redux/Actions/productActions";
import InfiniteScroll from "react-infinite-scroll-component";

const Products = ({ keyword, searchSubmitHandler }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMoreData = () => {
    dispatch(getProductsUsingFilters("", "", [0, 9999999], currentPage + 1));
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (keyword) {
      searchSubmitHandler();
    } else {
      dispatch(getProductsUsingFilters());
      setCurrentPage(currentPage + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    products,
    productsLoading,
    productsCount,
  } = useSelector((state) => state.products);

  return (
    <div className="container-fluid m-0 p-0">
      <div className="m-0">
        <InfiniteScroll
          dataLength={products.length}
          next={fetchMoreData}
          hasMore={keyword ? false : products.length !== productsCount}
          loader={<Loader />}
        >
        <div className="container">
          <div className="row">
            {productsLoading === true ? (
              <Loader />
            ) : products.length > 0 ? (
              products?.map((product) => (
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-4 p-0 text-dark">
                  <Dealcards deall={product} />
                </div>
              ))
            ) : (
              <p className="text-center">No Products Found</p>
            )}
          </div>
        </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Products;
