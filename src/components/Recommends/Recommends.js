import React from "react";
import Dealcards from "../Dealcards/Dealcards";
import Loader from "../Loader/Loader";
import "./recommends.css";
// import map from "lodash/map";
// import range from "lodash/range";

const Recommends = ({ products, loading, error }) => {
  return (
    <div className="recommend">
      <p className="rec_title">Our Recommendation For You</p>
      <div className="rows_recom">
        {/* {map(range(7), (_) => (
          <div className="rec_rows">
            <div className="card" style={{ width: "18rem" }}>
              <img src="../assets/c2.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <a href="!#" className="btn btn-primary">
                  Add to cart
                </a>
                <p className="card-text mt-3">
                  Appartamento in affitto a VINHOMES CENTRAL PARK 1,2,3,4 PN and
                  LANDMARL 81
                </p>
                <h5 className="card-title mt-3">₹549</h5>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src="../assets/c2.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <a href="!#" className="btn btn-primary">
                  Add to cart
                </a>
                <p className="card-text mt-3">
                  Appartamento in affitto a VINHOMES CENTRAL PARK 1,2,3,4 PN and
                  LANDMARL 81
                </p>
                <h5 className="card-title mt-3">₹549</h5>
              </div>
            </div>
          </div>
        ))} */}

        {loading ? (
          <>{/* Make loading component here */}
          <Loader/></>
        ) : (
          products?.map((product) => (
            <div className="rec_rows">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={product.images[0].url}
                  className="card-img-top"
                  alt="not found"
                />
                <div className="card-body">
                  <button className="btn btn-primary">Add to cart</button>
                  <p className="card-text mt-3">{product.name}</p>
                  <h5 className="card-title mt-3">{`₹ ${product.normalPrice}`}</h5>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={product.images[0].url}
                  className="card-img-top"
                  alt="not found"
                />
                <div className="card-body">
                  <button className="btn btn-primary">Add to cart</button>
                  <p className="card-text mt-3">
                    Appartamento in affitto a VINHOMES CENTRAL PARK 1,2,3,4 PN
                    and LANDMARL 81
                  </p>
                  <h5 className="card-title mt-3">₹549</h5>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Recommends;
