import React, { useState } from "react";
import "./Products.css";
import Dealcards from "../../../../components/Dealcards/Dealcards";
import Pagination from "../../../../components/Pagination/Pagination";

const Products = ({ products }) => {
  const [showPerPage, setShowPerPage] = useState(12);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  return (
    <div className="container-fluid mb-2">
      <div className="mt-2">
        <div className="row">
          <div className="col-md-12">
            <div className="row row-cols-2 row-cols-md-4 row-cols-xl-4 g-4 mb-5">
              {products
                ?.slice(pagination.start, pagination.end)
                .map((product) => (
                  <Dealcards
                    key={product.id}
                    deall={{
                      icon: product.icon,
                      title: product.title,
                      price: product.price,
                      ratings: product.rating,
                    }}
                  />
                ))}
            </div>
          </div>
        </div>
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={products.length}
        />
      </div>
    </div>
  );
};

export default Products;
