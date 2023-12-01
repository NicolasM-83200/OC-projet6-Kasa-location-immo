import React from "react";
import logoDesktop from "../assets/img/logo-desktop.png";
import logoMobile from "../assets/img/logo-mobile.png";

// Création du composant Logo
const Logo = () => {
  return (
    // On importe les images du logo
    <div className="header-wrapper__logo">
      <img
        className="header-wrapper__logo--desktop"
        src={logoDesktop}
        alt="Logo de Kasa"
        height={"68px"}
        width={"211px"}
      />
      <img
        className="header-wrapper__logo--mobile"
        src={logoMobile}
        alt="Logo de Kasa pour mobile"
        height={"48px"}
        width={"146px"}
      />
    </div>
  );
};

export default Logo;
