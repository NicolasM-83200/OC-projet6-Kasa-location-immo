import React from "react";

const Banner = (props) => {
  return (
    <div className="banner">
      <img src={props.bannerImg} alt="Bannière" />
      {props.title && <h1>{props.title}</h1>}
    </div>
  );
};

export default Banner;
