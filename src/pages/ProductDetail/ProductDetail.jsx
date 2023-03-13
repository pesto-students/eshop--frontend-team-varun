import React from "react";
import "./ProductDetail.css";
import { paths } from "../../localFiles/bredcrumPath";
const ProductDetail = () => {
  console.log(paths);
  return (
    <div class="productDetail" style={{ backgroundColor: "#f5f5f5" }}>
      <div class="row">
        {/* BreadCrum Section */}
        <div class="col-12">
          <div class="card border-0" style={{ backgroundColor: "#f5f5f5" }}>
            <div class="card-block mt-5 mx-md-5 mx-sm-5">
              <div class="page-header-breadcrumb">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#!" data-abc="true">
                      <i class="fa fa-home"></i>
                    </a>
                  </li>
                  {paths?.map((path) => (
                    <li class="breadcrumb-item">
                      <a href="#!" data-abc="true">
                        {path.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* other section */}
      </div>
    </div>
  );
};

export default ProductDetail;
