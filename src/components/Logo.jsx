import React from "react";
import logoDesktop from "../assets/img/logo-desktop.png";
import logoMobile from "../assets/img/logo-mobile.png";

const Logo = () => {
  return (
    <div className="header-wrapper__logo">
      <img
        className="header-wrapper__logo--desktop"
        src={logoDesktop}
        alt="Logo de Kasa"
      />
      <img
        className="header-wrapper__logo--mobile"
        src={logoMobile}
        alt="Logo de Kasa"
      />
    </div>
  );
};

export default Logo;
