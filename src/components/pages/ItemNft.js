import React from "react";
import {Button} from "../Button.js";
import {Link} from "react-router-dom";
import "./ReviewSection.css";
import CardItem from "../CardItem";
import images from "../images/images"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"


function ItemNft({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  imgDesc,
  img2,
  img2Desc,
  img3,
  img3Desc,
  img4,
  img4Desc,
  img5,
  img5Desc,
  img6,
  img6Desc,
  img7,
  img7Desc,
  img8,
  img8Desc,
  img9,
  img9Desc,
  img10,
  img10Desc,
  img11,
  img11Desc,
  img12,
  img12Desc,
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
                <div className="metering">{}</div>
                
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
                    <p className="legend">{imgDesc}</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">{img2Desc}</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">{img3Desc}</p>
                </div>
                <div>
                    <img src={img4} />
                    <p className="legend">{img4Desc}</p>
                </div>
                <div>
                    <img src={img5} />
                    <p className="legend">{img5Desc}</p>
                </div><div>
                    <img src={img6} />
                    <p className="legend">{img6Desc}</p>
                </div><div>
                    <img src={img7} />
                    <p className="legend">{img7Desc}</p>
                </div><div>
                    <img src={img8} />
                    <p className="legend">{img8Desc}</p>
                </div><div>
                    <img src={img9} />
                    <p className="legend">{img9Desc}</p>
                </div><div>
                    <img src={img10} />
                    <p className="legend">{img10Desc}</p>
                </div><div>
                    <img src={img11} />
                    <p className="legend">{img11Desc}</p>
                </div><div>
                    <img src={img12} />
                    <p className="legend">{img12Desc}</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemNft;
