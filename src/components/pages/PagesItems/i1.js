import React from "react";
import ShopItem from"../ShopItem"
import {homeObjOne} from "../Data";
import "../../HeroSection.css";

function Item4() {
  return (
    <>
      <ShopItem {...homeObjOne} />
    </>
    
  );
}

export default Item4;