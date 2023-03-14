import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Category from "../../components/ChoiceCategory/Category";
import {
  cates,
  dailyDeals,
  monthlyDeals,
} from "../../components/Constants/constants";
import Recommends from "../../components/Recommends/Recommends";
import Services from "../../components/Services/Services";
import TodaysDeal from "../../components/TodaysDeal/TodaysDeal";
import TopBrands from "../../components/TopBrands/TopBrands";

const Home = () => {
  return (
    <>
      <Carousel />
      <TodaysDeal title="Today's Deals" isEnd="true" deals={dailyDeals} />
      <Category cates={cates} />
      <TodaysDeal title="Deals of the Month" deals={monthlyDeals} />
      <Services />
      <TopBrands />
      <Recommends />
    </>
  );
};

export default Home;
