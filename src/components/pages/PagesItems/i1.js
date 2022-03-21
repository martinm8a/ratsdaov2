import React from "react";
import ShopItem from"../ShopItem"
import {homeObjOne} from "../PagesData";
import "../../HeroSection.css";

function Item1() {
  return (
    <>
      <ShopItem {...homeObjOne} />
    </>
    
  );
}

export default Item1;