import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarouselSlider from "../../components/Carousel/Carousel";
import Category from "../../components/ChoiceCategory/Category";
import { cates, monthlyDeals } from "../../components/Constants/constants";
import Recommends from "../../components/Recommends/Recommends";
import Services from "../../components/Services/Services";
import TodaysDeal from "../../components/TodaysDeal/TodaysDeal";
import TopBrands from "../../components/TopBrands/TopBrands";
import {
  addProductsFailure,
  addProductsRequest,
  addProductsSuccess,
} from "../../Redux/productSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(addProductsRequest());
      try {
        const res = await axios.get(`http://localhost:4000/api/v1/products`);

        dispatch(addProductsSuccess(res.data));
      } catch (error) {
        dispatch(addProductsFailure(error));
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <CarouselSlider />
      <TodaysDeal title="Today's Deals" isEnd="true" />
      <Category cates={cates} />
      <TodaysDeal title="Deals of the Month" />
      <Services />
      <TopBrands />
      <Recommends />
    </>
  );
};

export default Home;
