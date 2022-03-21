import React from "react";
import ShopItem from"../ShopItem"
import {homeObjSix} from "../PagesData";
import "../../HeroSection.css";

function Item4() {
  return (
    <>
      <ShopItem {...homeObjSix} />
    </>
    
  );
}

export default Item4;