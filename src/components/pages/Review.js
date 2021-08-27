import React from "react";
import ReviewSection from"./ReviewSection"
import {homeObjFour} from "./Data";

function Review() {
  return (
    <>
      <ReviewSection {...homeObjFour} />
    </>
  );
}

export default Review;