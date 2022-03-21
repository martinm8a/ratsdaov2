import React from "react";
import ShopItem from"../ShopItem"
import {homeObjNine} from "../PagesData";
import "../../HeroSection.css";

function Item4() {
  return (
    <>
      <ShopItem {...homeObjNine} />
    </>
    
  );
}

export default Item4;