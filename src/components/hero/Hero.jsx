import React from "react";
import "./hero.scss";
import Navbar from "../navbar/Navbar";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="titles">
          <h1>Start your own Game</h1>
        </div>
        <div className="hero-content">
          <img src="/main-bg.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
