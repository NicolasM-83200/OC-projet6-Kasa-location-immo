import React from "react";

const Banner = (props) => {
  return (
    <div className="banner">
      <img className="banner__img" src={props.bannerImg} alt="Bannière" />
      {props.title && (
        <div className="banner__title">
          <h1 className="banner__title--desktop">{props.title}</h1>
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
