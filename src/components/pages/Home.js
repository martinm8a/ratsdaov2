import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";
import HeroSection from "../HeroSection.js";
import Review from "../pages/Review";
import ItemPage from "./ItemPage";
import Paper from "./Paper"
import Acordion from "../Acordion";

function Home() {
  return (
    <>
      <HeroSection />
      {/* <Paper />
      <Acordion/> */}
      <ItemPage />
      <Cards />
      {/* <Review /> */}
      
      <Footer />
    </>
  );
}

export default Home;
