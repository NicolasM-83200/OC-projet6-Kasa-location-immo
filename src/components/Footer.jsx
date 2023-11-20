import React from "react";
import logo_BW from "../assets/img/LOGO.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <img src={logo_BW} alt="logo de Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
