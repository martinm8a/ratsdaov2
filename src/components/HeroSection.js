import React from "react";
import "../App.css";
import {Button, Button2} from "./Button";
import "./HeroSection.css";
import videos from "../videos/videos";
import images from "./images/images";
import {useTranslation} from "react-i18next"

function HeroSection() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="hero-container">
      {/* <video src={videos[1]} autoPlay loop muted /> */}
      
      <h1 className="title">

      {t("Welcome to Rats Dao")}
      </h1>
      <p className="sub"></p>
      <div className="hero-btns">
      <a
        href= "https://twitter.com/i/status/1502377449916706823"
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
        <a
          href= "https://www.jpg.store/collection/ratsdao"
          target="_blank"
          rel="noreferrer"
          className="btn-mobile"
        > 
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          
        >
          Shop
        </Button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
