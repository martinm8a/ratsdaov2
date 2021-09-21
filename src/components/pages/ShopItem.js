import React from "react";
import {Button} from "../Button.js";
import {Link} from "react-router-dom";
import "./ReviewSection.css";
import CardItem from "../CardItem";
import images from "../images/images"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"


function ShopItem({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  img2,
  img3,
  alt,
  imgStart,
  payLink,
  metering,
  price,
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
              <h1 className={lightText ? "heading" : "heading dark"}>
                  {topLine}{" "}
                </h1>
                <div className="top-line">{headline}</div>
                <div className="metering">{metering}</div>
                
                <p className={lightTextDesc ? "home__hero-subtitle" :"home__hero-subtitle dark"}>
                  {description}
                </p>
                <div className="price">{price}</div>
                <div className="center">
                <Link to={{ pathname: payLink }} target="_blank">
                  <Button buttonSize="btn-wide" buttonColor="blue" buttonStyle="btn--outline">
                    {buttonLabel}
                  </Button>
                </Link>
                </div>
              </div>
            </div>
            <div className="col">
              {/* <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div> */}
              {/* <CardItem
                src={img}
                label={type}
                text={textCard}
                path={item}
              /> */}
              <Carousel>
              <div>
                    <img src={img} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopItem;
