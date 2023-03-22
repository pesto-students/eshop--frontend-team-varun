import React from "react";
import CarouselSlider from "../../components/Carousel/Carousel";
import Category from "../../components/ChoiceCategory/Category";
import {
  cates,
  monthlyDeals,
} from "../../components/constants/constants";
import Recommends from "../../components/Recommends/Recommends";
import Services from "../../components/Services/Services";
import TodaysDeal from "../../components/TodaysDeal/TodaysDeal";
import TopBrands from "../../components/TopBrands/TopBrands";
import { Products } from "../../localFiles/ProductsFile";

const Home = () => {
  return (
    <>
      <CarouselSlider />
      <TodaysDeal title="Today's Deals" isEnd="true" deals={Products} />
      <Category cates={cates} />
      <TodaysDeal title="Deals of the Month" deals={monthlyDeals} />
      <Services />
      <TopBrands />
      <Recommends />
    </>
  );
};

export default Home;
