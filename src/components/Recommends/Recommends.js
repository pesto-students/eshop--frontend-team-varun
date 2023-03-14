import React from "react";
import "./recommends.css";
import map from "lodash/map";
import range from "lodash/range";

const Recommends = () => {
  return (
    <div className="recommend">
      <p className="rec_title">Our Recommendation For You</p>
      <div className="rows_recom">
        {map(range(7), (_) => (
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
        ))}
      </div>
    </div>
  );
};

export default Recommends;
