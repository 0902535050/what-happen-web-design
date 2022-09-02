import React from "react";
import BestSeller from "../components/BestSeller";
import Brand from "../components/Brand";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Issue from "../components/Issue";
import ProductList from "../components/ProductList";
import Story from "../components/Story";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Intro />
      <BestSeller />
      <ProductList />
      <Brand />
      <Issue />
      <Story />
      <Footer />
    </div>
  );
};

export default Home;
