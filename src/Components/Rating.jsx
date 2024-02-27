import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = () => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i}>
          <AiFillStar fontSize="15px" />
        </span>
      ))}
    </>
  );
};

export default Rating;
