import React from "react";

// On crée un composant Card qui prend en paramètre un objet props
const Card = ({ accomodation }) => {
  return (
    // On affiche l'image et le titre de chaque logement
    <li className="gallery__list-item">
      <figure className="gallery__list-item-figure">
        <img
          className="gallery__list-item-img"
          src={accomodation.cover}
          alt={accomodation.title}
        />
        <figcaption className="gallery__list-item-caption">
          {accomodation.title}
        </figcaption>
      </figure>
    </li>
  );
};

export default Card;
