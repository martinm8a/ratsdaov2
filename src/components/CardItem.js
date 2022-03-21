import React from "react";
import {Link} from "react-router-dom";
import "./Cards.css";


function CardItem({
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
      <li className="cards__item">
        <Link className="cards__item__link" to={item}>
          <figure className="cards__item__pic-wrap" data-category={type}>
            <img
              src={img}
              className="cards__item__img"
              alt="NFT image"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{textCard}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
