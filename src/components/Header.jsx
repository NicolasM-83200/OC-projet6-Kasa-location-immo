import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";

// Création du composant Header
const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        {/* // On importe le composant Logo et Navigation */}
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
