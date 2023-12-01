import React from "react";
import logoBW from "../assets/img/logo-B&W.png";

// Création du composant Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img
          className="footer__content-img"
          src={logoBW}
          alt="logo de Kasa"
          height={"41px"}
          width={"123px"}
        />
        <p className="footer__content-text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
