import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarouselSlider from "../../components/Carousel/Carousel";
import Category from "../../components/ChoiceCategory/Category";

import { cates } from "../../components/Constants/constants";
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
import { toast } from "react-toastify";
import produce from "immer";

const Home = () => {
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (topDealsError || dealsOfMonthError || recommendationsError) {
      toast.error(`${dealsOfMonthError}`);
    }

    // Fetch TopDeals products { products above 4.0 rating }
    dispatch(getTopDeals());
    // Fetch deals of month products { products above 4.0 rating and current month }
    dispatch(getDealsOfMonth());
    // Fetch recommendations products { products above 4.0 rating }
    dispatch(getRecommendations());
  }, [dispatch]);

  return (
    <div className="mt-5">
      <CarouselSlider />

      {topDealsLoading ? (
        <Loader />
      ) : (
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
    </div>
  );
};

export default Home;
