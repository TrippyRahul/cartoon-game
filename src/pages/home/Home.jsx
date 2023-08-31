import React from "react";
import "./home.scss";
import Hero from "../../components/hero/Hero";
import Explore from "../../components/explore/Explore";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Explore />
    </>
  );
};

export default Home;
