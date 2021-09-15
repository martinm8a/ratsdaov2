import React, { useState } from "react";
import {Button} from "../Button.js";
import {Link} from "react-router-dom";
import "./ReviewSection.css";
import CardItem from "../CardItem";
import images from "../images/images"



function ShopItem({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  payLink,
  item,
  type,
  textCard,
}) {
  

  return (
    <>

      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
        >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{headline}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {topLine}{" "}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark "
                  }
                >
                  {description}
                </p>
                <Link to={{ pathname: payLink }} target="_blank">
                  <Button buttonSize="btn-wide" buttonColor="blue">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              {/* <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div> */}
              <CardItem
                src={img}
                label={type}
                text={textCard}
                path={item}
              />
            </div>-
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopItem;
