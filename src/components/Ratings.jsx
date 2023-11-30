import React from "react";

// Création du composant Ratings
const Ratings = ({ stars }) => {
  // On crée un tableau vide pour les étoiles rouges
  const ratingArray = [];
  // On boucle sur le nombre d'étoiles
  for (let i = 1; i <= parseInt(stars); i++) {
    // On push dans le tableau vide
    ratingArray.push(i);
  }
  const greyStarsArray = [];
  for (let i = 1; i <= 5 - parseInt(stars); i++) {
    greyStarsArray.push(i);
  }

  return (
    // On boucle sur le tableau pour afficher les étoiles
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
