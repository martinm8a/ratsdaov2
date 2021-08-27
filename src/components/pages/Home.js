import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";
import HeroSection from "../HeroSection.js";
import Review from "../pages/Review";
import ItemPage from "./ItemPage";

function Home() {
  return (
    <>
      <HeroSection />
      <Review />
      <Cards />
      <ItemPage />
      
      <Footer />
    </>
  );
}

export default Home;
