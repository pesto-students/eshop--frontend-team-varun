import React, { useState } from "react";
import "./Products.css";
import Dealcards from "../../../../components/Dealcards/Dealcards";
import Pagination from "../../../../components/Pagination/Pagination";

const Products = ({ products }) => {
  return (
    <div className="container-fluid mb-2">
      <div className="mt-2">
        <div className="row">
          <div className="col-md-12">
            <div className="row row-cols-2 row-cols-md-4 row-cols-xl-4 g-4 mb-5">
              {products?.map((product) => (
                <Dealcards key={product.id} deall={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
