import React from "react";

const Card = ({ accomodation }) => {
  return (
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
