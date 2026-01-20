import React from "react";
import HeroSite from "./hero/HeroSite";
import Welcome from "./welcome/Welcome";
import FamousVideo from "./famousVideo/FamousVideo";

const HomePage = () => {
  return (
    <div>
      <HeroSite />
      <Welcome />
      <FamousVideo />
    </div>
  );
};

export default HomePage;
