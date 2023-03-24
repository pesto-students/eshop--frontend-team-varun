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
  dealsOfMonthFailure,
  dealsOfMonthRequest,
  dealsOfMonthSuccess,
} from "../../Redux/dealsOfMonthSlice";
import {
  addRecommendationsFailure,
  addRecommendationsRequest,
  addRecommendationsSuccess,
} from "../../Redux/recommendationSlice";
import {
  addTopDealsFailure,
  addTopDealsRequest,
  addTopDealsSuccess,
} from "../../Redux/topDealsSlice";

const Home = () => {
  const dispatch = useDispatch();

  // Fetch all TopDeals products { products above 4.0 rating }
  useEffect(() => {
    const fetchTopDeals = async () => {
      dispatch(addTopDealsRequest());
      try {
        const res = await axios.get(`http://localhost:4000/api/v1/products`);

        dispatch(addTopDealsSuccess(res.data));
      } catch (error) {
        dispatch(addTopDealsFailure(error));
      }
    };
    fetchTopDeals();
  }, []);

  // Fetch all Deals of the month products { product above 4.0 of currently added month}
  useEffect(() => {
    const fetchDealsOfMonth = async () => {
      dispatch(dealsOfMonthRequest());
      try {
        const res = await axios.get(`http://localhost:4000/api/v1/products`);

        dispatch(dealsOfMonthSuccess(res.data));
      } catch (error) {
        dispatch(dealsOfMonthFailure(error));
      }
    };
    fetchDealsOfMonth();
  }, []);

  // Fetch recommandation products
  useEffect(() => {
    const fetchRecommendation = async () => {
      dispatch(addRecommendationsRequest());
      try {
        const res = await axios.get(`http://localhost:4000/api/v1/products`);

        dispatch(addRecommendationsSuccess(res.data));
      } catch (error) {
        dispatch(addRecommendationsFailure(error));
      }
    };
    fetchRecommendation();
  }, []);

  // Get top Deals from store
  const { topDeals } = useSelector((state) => state.topDeals);

  // Get deals of month from store
  const { dealsOfMonth } = useSelector((state) => state.dealsOfMonth);

  // get recommandation products from store
  const { recommendations } = useSelector((state) => state.recommendations);
  return (
    <>
      <CarouselSlider />
      <TodaysDeal title="Today's Deals" isEnd="true" products={topDeals} />
      <Category cates={cates} />
      <TodaysDeal title="Deals of the Month" products={dealsOfMonth} />
      <Services />
      <TopBrands />
      <Recommends products={recommendations} />
    </>
  );
};

export default Home;
