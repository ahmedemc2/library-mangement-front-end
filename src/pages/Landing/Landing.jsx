import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ExploreCategories from "./ExploreCategories";
import FeaturedBooks from "./FeaturedBooks";

const Landing = () => {
  return (
    <div className="bg-[rgba(33,37,41,0.95)]">
      <Navbar />
      <HeroSection />
      <div className="w-[75%] m-auto ">
        <ExploreCategories />
        <FeaturedBooks />
      </div>
    </div>
  );
};

export default Landing;
