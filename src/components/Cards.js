import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import images from "./images/images";
import {Button} from "./Button.js";
import {Link} from "react-router-dom";
import {homeObjFour} from "../components/pages/Data";

function Cards() {
  return (
    <div className="padre cards">
      <div className="txt cards">
        <h2 className="none">Descubre este pequeño</h2>
        <h1> Universo</h1>
        <h2>Obras unicas, realizadas a mano</h2>
      </div>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                {...homeObjFour}
              />
              <CardItem
                {...homeObjFour}
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                {...homeObjFour}
              />
              <CardItem
                {...homeObjFour}
              />
              <CardItem
                {...homeObjFour}
              />
            </ul>
          </div>
        </div>
      </div>
        <div className="center"> 
          <Link to={"/AllProducts"} target="_blank">
             <Button buttonSize="btn-wide" buttonColor="blue" buttonStyle="btn--outline">
                 Ver más
             </Button>
          </Link>
        </div>
    </div>
  );
}

export default Cards;
