import React from "react";

const Ratings = ({ stars }) => {
  //Calcul des étoiles rouges et grises
  const ratingArray = [];
  for (let i = 1; i <= parseInt(stars); i++) {
    ratingArray.push(i);
  }
  const greyStarsArray = [];
  for (let i = 1; i <= 5 - parseInt(stars); i++) {
    greyStarsArray.push(i);
  }
  return (
    <div className="user-ratings">
      {ratingArray.map((index) => (
        <i key={index} className="fa-solid fa-star user-ratings__redStars"></i>
      ))}
      {greyStarsArray.map((index) => (
        <i key={index} className="fa-solid fa-star user-ratings__greyStars"></i>
      ))}
    </div>
  );
};

export default Ratings;
