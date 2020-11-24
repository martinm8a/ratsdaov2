import React from "react";
import "../App.css";
import {Button, Button2} from "./Button";
import "./HeroSection.css";
import videos from "../videos/videos";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={videos[1]} autoPlay loop muted />
      <h1 className="title">Fin del Mundo</h1>
      <p className="sub">el comienzo de todo</p>
      <div className="hero-btns">
        <Button2
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("asi es ;)")}
        >
          VER TRAILER <i className="far fa-play-circle" />
        </Button2>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          RESERVA AHORA
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
