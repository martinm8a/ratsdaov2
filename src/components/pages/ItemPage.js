import React from "react";
import ShopItem from"./ShopItem"
import {homeObjFour} from "./Data";

function ItemPage() {
  return (
    <>
      <ShopItem {...homeObjFour} />
    </>
  );
}

export default ItemPage;