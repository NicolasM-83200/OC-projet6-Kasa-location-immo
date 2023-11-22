import React from "react";

const Card = ({ accomodation }) => {
  return (
    <li className="card">
      <figure>
        <img src={accomodation.cover} alt={accomodation.title} />
        <figcaption>{accomodation.title}</figcaption>
      </figure>
    </li>
  );
};

export default Card;
