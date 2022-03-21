import React from "react";
import ShopItem from"../ShopItem"
import {homeObjTen} from "../PagesData";
import "../../HeroSection.css";

function Item4() {
  return (
    <>
      <ShopItem {...homeObjTen} />
    </>
    
  );
}

export default Item4;