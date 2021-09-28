import React from "react";
import ShopItem from"../ShopItem"
import {homeObjThree} from "../Data";
import "../../HeroSection.css";

function Item4() {
  return (
    <>
      <ShopItem {...homeObjThree} />
    </>
    
  );
}

export default Item4;