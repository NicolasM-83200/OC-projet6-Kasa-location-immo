import React from "react";
import logoBW from "../assets/img/logo-B&W.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <img src={logoBW} alt="logo de Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
