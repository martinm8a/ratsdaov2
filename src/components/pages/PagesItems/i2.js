import React from "react";
import ShopItem from"../ShopItem"
import {homeObjTwo} from "../Data";
import "../../HeroSection.css";

function Item4() {
  return (
    <>
      <ShopItem {...homeObjTwo} />
    </>
    
  );
}

export default Item4;