import React from "react";
import "../App.css";
import {Button, Button2} from "./Button";
import "./HeroSection.css";
import videos from "../videos/videos";
import images from "./images/images";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src={videos[1]} autoPlay loop muted /> */}
      
      <h1 className="title">

        Nurive Ferrareto
      </h1>
      <p className="sub"></p>
      <div className="hero-btns">
      <a
      href= "https://mpago.la/2qg7LET"
      target="_blank"
      rel="noreferrer"
      className="btn-mobile"
    > 
        <Button2
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          VER TRAILER <i className="far fa-play-circle" /> 
        </Button2>
        </a>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          
        >
          Shop
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
