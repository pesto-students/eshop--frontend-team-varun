import React, { useEffect, useState } from "react";
import "./Products.css";
import Dealcards from "../../../../components/Dealcards/Dealcards";
import useFetch from "../../../../hooks/useFetch";
import Loader from "../../../../components/Loader/Loader";

const Products = () => {
  const { data, loading, error } = useFetch(
    `http://localhost:4000/api/v1/products`
  );

  return (
    <div className="container-fluid mb-2">
      <div className="m-0">
        <div className="row">
          <div className="col-md-12">
            {loading === true ? (
              <Loader />
            ) : (
              <div className="row row-cols-2 row-cols-md-4 row-cols-xl-4 gap-4 mb-5">
                {data.products?.map((product) => (
                  <Dealcards key={product.id} deall={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
