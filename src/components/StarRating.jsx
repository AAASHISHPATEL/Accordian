import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ noOfStar = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    
    setRating(index);
  };
  const handleMouseMove = (index) => {
    
    setHover(index)
  };

  const handleMouseLeave = () => {
   
    setHover(rating)
  };

  return (
    <div className="flex  justify-center  mt-3 ">
      {[...Array(noOfStar)].map((_, index) => {
        index++;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "text-yellow-500" : null}
            size={40}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
