import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarouselSlider from "../../components/Carousel/Carousel";
import Category from "../../components/ChoiceCategory/Category";
import { cates, monthlyDeals } from "../../components/constants/constants";
import Loader from "../../components/Loader/Loader";
import Recommends from "../../components/Recommends/Recommends";
import Services from "../../components/Services/Services";
import TodaysDeal from "../../components/TodaysDeal/TodaysDeal";
import TopBrands from "../../components/TopBrands/TopBrands";
import {
  getDealsOfMonth,
  getRecommendations,
  getTopDeals,
} from "../../Redux/Actions/productActions";
import {
  dealsOfMonthFailure,
  dealsOfMonthRequest,
  dealsOfMonthSuccess,
} from "../../Redux/Reducers/dealsOfMonthSlice";
import {
  addRecommendationsFailure,
  addRecommendationsRequest,
  addRecommendationsSuccess,
} from "../../Redux/Reducers/recommendationSlice";
import {
  addTopDealsFailure,
  addTopDealsRequest,
  addTopDealsSuccess,
} from "../../Redux/Reducers/topDealsSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch TopDeals products { products above 4.0 rating }
    dispatch(getTopDeals());
    // Fetch deals of month products { products above 4.0 rating and current month }
    dispatch(getDealsOfMonth());
    // Fetch recommendations products { products above 4.0 rating }
    dispatch(getRecommendations());
  }, [dispatch]);

  // Get top Deals from store
  const { topDeals, topDealsLoading, topDealsError } = useSelector(
    (state) => state.topDeals
  );

  // Get deals of month from store
  const { dealsOfMonth, dealsOfMonthLoading, dealsOfMonthError } = useSelector(
    (state) => state.dealsOfMonth
  );

  // get recommandation products from store
  const { recommendations, recommendationsLoading, recommendationsError } =
    useSelector((state) => state.recommendations);
  return (
    <>
      <CarouselSlider />

      {topDealsLoading ? (
        <Loader />
      ) : (
        // <></>
        <TodaysDeal
          title="Today's Deals"
          isEnd="true"
          products={topDeals}
          loading={topDealsLoading}
          error={topDealsError}
        />
      )}
      <Category cates={cates} />
      {dealsOfMonthLoading ? (
        <Loader />
      ) : (
        <TodaysDeal
          title="Deals of the Month"
          isEnd="false"
          products={dealsOfMonth}
          loading={dealsOfMonthLoading}
          error={dealsOfMonthError}
        />
      )}
      <Services />
      <TopBrands />
      {recommendationsLoading ? (
        <Loader />
      ) : (
        <Recommends
          products={recommendations}
          loading={recommendationsLoading}
          error={recommendationsError}
        />
      )}
    </>
  );
};

export default Home;
