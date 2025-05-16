import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ExploreCategories from "./ExploreCategories";
import FeaturedBooks from "./FeaturedBooks";
import ContactSection from "./Contact";
import Footer from "./Footer";
import PopularAuthors from "./author";

const Landing = () => {
  return (
    <div className="bg-[#1e1e2f]">
      <Navbar />
      <HeroSection />
      <div className="w-[75%] m-auto ">
        <ExploreCategories />
        <FeaturedBooks />
        <PopularAuthors />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
