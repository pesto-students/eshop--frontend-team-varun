// import React from "react";
// import "./ProductDetail.css";
// import { paths } from "../../localFiles/bredcrumPath";
// const ProductDetail = () => {
//   console.log(paths);
//   return (
//     <div className="productDetail" style={{ backgroundColor: "#f5f5f5" }}>
//       <div className="row">
//         {/* BreadCrum Section */}
//         <div className="col-12">
//           <div className="card border-0" style={{ backgroundColor: "#f5f5f5" }}>
//             <div className="card-block mt-5 mx-md-5 mx-sm-5">
//               <div className="page-header-breadcrumb">
//                 <ul className="breadcrumb">
//                   <li className="breadcrumb-item">
//                     <a href="#!" data-abc="true">
//                       <i className="fa fa-home"></i>
//                     </a>
//                   </li>
//                   {paths?.map((path) => (
//                     <li className="breadcrumb-item">
//                       <a href="#!" data-abc="true">
//                         {path.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* other section */}
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
import React, { useEffect, useState } from "react";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import Description from "../../components/Description/Description";
import ProductReview from "../../components/ProductReview/ProductReview";
import Dealcards from "../../components/Dealcards/Dealcards";
import map from "lodash/map";
import range from "lodash/range";
import "./ProductDetail.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ProductDetail = ({ currentPage }) => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/v1/product/${id}`
        );
        setData(res.data.product);
      } catch (error) {}
    };
    fetchProductDetails();
  }, []);

  console.log("This is written in Product Detail page", data);

  return (
    <>
      {currentPage === "productDetails" ? (
        <div className="product-details">
          <section className="container-fluid p-0 m-0">
            <div className="row m-0">
              <div className="product-images col-lg-4 col-xs-12 my-4">
                <img
                  src="../assets/productDetails/laptop.png"
                  alt=""
                  className="img-fluid border"
                />
                <div className="img-row d-flex align-items-center my-3">
                  <img
                    src="../assets/productDetails/laptop1.png"
                    alt=""
                    className="img-fluid col-4"
                  />
                  <img
                    src="../assets/productDetails/laptop2.png"
                    alt=""
                    className="img-fluid col-4"
                  />
                  <img
                    src="../assets/productDetails/laptop3.png"
                    alt=""
                    className="img-fluid col-4"
                  />
                </div>
              </div>
              <div className="col-lg-7 col-xs-12 mt-3">
                {/* Send data and update productInfo */}
                <ProductInfo />
              </div>
            </div>
          </section>
          <section className="container-fluid p-0 m-0">
            <div className="row m-0">
              <div className="col-lg-9 col-sm-12">
                {/* Send data and update descriptiona and productReview */}
                <Description />
                <ProductReview allReviews={false} />
              </div>
              {/* <div className="col-lg-3 mt-4">
                {map(range(5), (_) => (
                  <div className="mb-3">
                    <Dealcards
                      deall={{
                        icon: "../assets/productDetails/laptop.png",
                        title:
                          "Canon EOS 1500D 24.1 Digital SLR Camera (Black)...",
                        price: "₹36,990",
                        ratings: "4.9",
                      }}
                    />
                  </div>
                ))}
              </div> */}
            </div>
          </section>
        </div>
      ) : (
        <ProductReview allReviews={true} />
      )}
    </>
  );
};

export default ProductDetail;
