import React from "react";
import logoDesktop from "../assets/img/logo-desktop.png";
import logoMobile from "../assets/img/logo-mobile.png";

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo-desktop" src={logoDesktop} alt="Logo de Kasa" />
      <img className="logo-mobile" src={logoMobile} alt="Logo de Kasa" />
    </div>
  );
};

export default Logo;
