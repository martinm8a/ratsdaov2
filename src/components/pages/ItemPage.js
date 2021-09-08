import React from "react";
import ShopItem from"./ShopItem"
import {homeObjFour} from "./Data";
import "../HeroSection.css";

function ItemPage() {
  return (
    <>
      <ShopItem {...homeObjFour} />
    </>
    
  );
}

export default ItemPage;