import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import images from "./images/images";
import {Button} from "./Button.js";
import {Link} from "react-router-dom";
import { homeObjOne,  homeObjTwo, homeObjThree, homeObjFive, homeObjSix, } from "./pages/PagesData";

function Cards() {
  return (
    <div className="padre cards">
      <div className="txt cards">
        <h2 className="none">Discover the power of</h2>
        <h1>Rats DAO</h1>
        <h2>A treasure with the most valuable NFTs of the Cardano network</h2>
      </div>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                {...homeObjOne}
              />
              <CardItem
                {...homeObjTwo}
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                {...homeObjThree}
              />
              <CardItem
                {...homeObjFive}
              />
              <CardItem
                {...homeObjSix}
              />
            </ul>
          </div>
        </div>
      </div>
        <div className="centerplusbottom"> 
          <a href="https://pool.pm/addr1q9alg4uys4qqg0307jpu0esxf3wwr6epfqxmrjrl2jmegsqwmdvdph87hh8yfxkax8zfths9vmzr78xl56ejtdu33h4qlmkr4x" target="_blank">
             <Button buttonSize="btn-wide" buttonColor="blue" buttonStyle="btn--outline">
                 See full treasury
             </Button>
          </a>
        </div>
    </div>
  );
}

export default Cards;
