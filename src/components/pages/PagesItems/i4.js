import React from "react";
import ShopItem from"../ShopItem"
import {homeObjFour} from "../Data";
import "../../HeroSection.css";

function Item4() {
  return (
    <>
      <ShopItem {...homeObjFour} />
    </>
    
  );
}

export default Item4;