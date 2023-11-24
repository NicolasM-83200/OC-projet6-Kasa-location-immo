import React from "react";

const Ratings = ({ stars }) => {
  //Calcul des étoiles rouges et grises
  const ratingArray = [];
  for (let i = 1; i <= stars; i++) {
    ratingArray.push(i);
  }
  const greyStarsArray = [];
  for (let i = 1; i <= 5 - stars; i++) {
    greyStarsArray.push(i);
  }

  return (
    <div className="user-ratings">
      {ratingArray.map((index) => (
        <i key={index} className="fa-solid fa-star redStars"></i>
      ))}
      {greyStarsArray.map((index) => (
        <i key={index} className="fa-solid fa-star greyStars"></i>
      ))}
    </div>
  );
};

export default Ratings;
