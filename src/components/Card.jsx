import React from "react";
import { Link } from "react-router-dom";

// On crée un composant Card qui prend en paramètre un objet props
const Card = ({ accomodation }) => {
  return (
    // On affiche l'image et le titre de chaque logement
    <li className="gallery__list-item">
      {/* // On utilise le composant Link de react-router-dom pour créer un lien vers la page de détail de chaque logement */}
      <Link
        className="gallery__list-item-link"
        to={`/accomodation/${accomodation.id}`}
      >
        <figure className="gallery__list-item-figure">
          <img
            className="gallery__list-item-img"
            src={accomodation.cover}
            alt={`${accomodation.title} - Id: ${accomodation.id}}`}
            height={"340px"}
            width={"340px"}
          />
          <figcaption className="gallery__list-item-caption">
            {accomodation.title}
          </figcaption>
        </figure>
      </Link>
    </li>
  );
};

export default Card;
