import React from "react";
import map from "lodash/map";
import range from "lodash/range";
import "./Products.css";
import Dealcards from "../../../../components/Dealcards/Dealcards";

const Products = () => {
  return (
    <div className="container-fluid mb-2">
      <div className="mt-2">
        <div className="row">
          <div className="col-md-12">
            <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
              {map(range(14), (_) => (
                <Dealcards
                  deall={{
                    icon: "../assets/camera.png",
                    title: "Canon EOS 1500D 24.1 Digital SLR Camera (Black)...",
                    price: "₹36,990",
                    ratings: "4.9",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
