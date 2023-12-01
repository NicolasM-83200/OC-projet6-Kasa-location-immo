import React from "react";

// On crée un composant Banner qui prend en paramètre un objet props
const Banner = (props) => {
  return (
    <div className="banner">
      <img
        className="banner__img"
        src={props.bannerImg}
        alt="Bannière"
        height={"223px"}
        width={"1240px"}
      />
      {props.title && (
        <div className="banner__title">
          <h1 className="banner__title--desktop">{props.title}</h1>
          {/* // On split le titre pour afficher la virgule sur mobile */}
          <h1 className="banner__title--mobile">
            {`${props.title.split(",")[0]},`}
            <br></br>
            {`${props.title.split(",")[1]}`}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Banner;
