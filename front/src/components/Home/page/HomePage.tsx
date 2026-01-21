import React from "react";
import HeroSite from "./hero/HeroSite";
import Welcome from "./welcome/Welcome";
import HeroSecondSite from "./hero/HeroSecondSite";

const HomePage = () => {
  return (
    <div>
      <HeroSite />
      <Welcome />
      <HeroSecondSite />
    </div>
  );
};

export default HomePage;
