import React from "react";
import Dealcards from "../../components/Dealcards/Dealcards";
import Filters from "../../components/Filters/Filters";
import SearchBar from "../../components/SearchBar/SearchBar";
import BookData from "../../Data.json";
import "./products.css";
import map from "lodash/map";
import range from "lodash/range";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  return (
    <div className="App">
      <SearchBar placeholder="Search in Eshop" data={BookData} />
      <div className="grid-section">
        <Filters />
        <div className="lists">
          <div className="product-list">
            {map(range(16), (_) => (
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
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                {/* <FontAwesomeIcon icon={faAngleLeft} /> */}
              </li>
              {map(range(5), (index) => (
                <li className="page-item">
                  <p>{index + 1}</p>
                </li>
              ))}
              <li className="page-item">
                {/* <FontAwesomeIcon icon={faAngleRight} /> */}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Products;
