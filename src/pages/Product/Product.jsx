import React, { useEffect, useState } from "react";
import Dealcards from "../../components/Dealcards/Dealcards";
import Filters from "../../components/Filters/Filters";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../Redux/Actions/productActions";
import Loader from "../../components/Loader/Loader";
import {
  addProductsFailure,
  addProductsRequest,
  addProductsSuccess,
} from "../../Redux/Reducers/productSlice";
import axios from "axios";
import Geocode from "react-geocode";

const Product = () => {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const geolocationAPI = navigator.geolocation;
  Geocode.setApiKey("AIzaSyCZzjQKv4zcMZkeUCzze8iRlSYnPmrzXtI");

  const fetchTopDeals = async (
    keyword = "",
    category = "",
    price = [0, 2500000]
  ) => {
    dispatch(addProductsRequest());
    try {
      if (category) {
        const res = await axios.get(
          `http://localhost:4000/api/v1/products?keyword=${keyword}&category=${category}&price[gte]=${price[0]}&price[lte]=${price[1]}`
        );
        dispatch(addProductsSuccess(res.data));
      } else {
        const res = await axios.get(
          `http://localhost:4000/api/v1/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}`
        );
        dispatch(addProductsSuccess(res.data));
      }
    } catch (error) {
      console.log(error);
      dispatch(addProductsFailure(error));
    }
  };

  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      console.log("Geolocation API is not available in your browser!");
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Geocode.fromLatLng(latitude, longitude).then(
          //   (response) => {
          //     const address = response.results[0].formatted_address;
          //     console.log(address);
          //   },
          //   (error) => {
          //     console.error(error);
          //   }
          // );
          const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: {q: `${latitude}, ${longitude}`},
            headers: {
              'X-RapidAPI-Key': '1ed03d24b6msh0cffdeb65a12596p112460jsn2f800ae326cd',
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
            console.log(response.data);
            setUserAddress(`${response.data.location.name}, ${response.data.location.region}`);
          }).catch(function (error) {
            console.error(error);
          });
          console.log(latitude, longitude);
        },
        (error) => {
          console.log("Something went wrong getting your position!");
        }
      );
    }
  };

  useEffect(() => {
    getUserCoordinates();
    fetchTopDeals();
  }, []);

  const { products, productsError, productsLoading } = useSelector(
    (state) => state.products
  );

  const searchSubmitHandler = (e) => {
    if (keyword.trim()) {
      fetchTopDeals(keyword);
    } else {
      fetchTopDeals("");
    }
  };

  const childToParent = (childdata, minPrice, maxPrice) => {
    fetchTopDeals("", childdata, [minPrice, maxPrice]);
  };

  return (
    <section className="product-list">
      <div className="product-list-header">
        <div className="user-loc d-flex align-items-center gap-2">
          <img src="../assets/location.svg" alt="" />
          <p className="m-0 p-0">{userAddress}</p>
        </div>
        <div className="input-group border rounded-2">
          <input
            type="text"
            className="form-control border-0 shadow-none"
            placeholder="Search Product"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => {
              if (e.target.value === "") {
                fetchTopDeals("");
              }
              return setKeyword(e.target.value);
            }}
          />
          <span
            className="input-group-text bg-white border-0"
            id="basic-addon2"
          >
            <img
              src="../assets/search.svg"
              alt=""
              onClick={searchSubmitHandler}
            />
          </span>
        </div>
      </div>
      <div className="product-list-body">
        <div className="product-filter-mobile">
          <p>
            <a
              className="text-dark text-decoration-none"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <p className="fw-semibold mb-0">
                Filters
                <span>
                  <FontAwesomeIcon icon={faAngleDown} />
                </span>
              </p>
            </a>
          </p>
          <div className="collapse" id="collapseExample">
            <Filters />
          </div>
        </div>
        <div className="product-filters">
          <Filters childToParent={childToParent} />
        </div>
        <div className="container-fluid m-0 p-0">
          <div className="row">
            {productsLoading ? (
              <>
                {/* Add Loadding component  */}
                <Loader />
              </>
            ) : (
              products?.map((product) => (
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-4 p-0 text-dark">
                  <Dealcards deall={product} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      {/* <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={products.length}
      /> */}
    </section>
  );
};

export default Product;
