import React from "react";
import ShopItem from"../ShopItem"
import {homeObjSix} from "../Data";
import "../../HeroSection.css";

function Item4() {
  return (
    <>
      <ShopItem {...homeObjSix} />
    </>
    
  );
}

export default Item4;