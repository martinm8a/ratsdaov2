import React from "react";
import ShopItem from"../ShopItem"
import {homeObjFive} from "../Data";
import "../../HeroSection.css";

function Item4() {
  return (
    <>
      <ShopItem {...homeObjFive} />
    </>
    
  );
}

export default Item4;