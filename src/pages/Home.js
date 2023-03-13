import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import Category from '../components/ChoiceCategory/Category'
import { data } from '../components/constants'
import Recommends from '../components/Recommends/Recommends'
import Services from '../components/Services/Services'
import TodaysDeal from '../components/TodaysDeal/TodaysDeal'
import TopBrands from '../components/TopBrands/TopBrands'

const Home = () => {
  return (
    <>
      <Carousel />
      <TodaysDeal title= "Today's Deals" isEnd="true" deals={data.dailyDeals}/>
      <Category cates={data.cates}/>
      <TodaysDeal title= "Deals of the Month" deals={data.monthlyDeals}/>
      <Services />
      <TopBrands />
      <Recommends />
    </>
  )
}

export default Home
