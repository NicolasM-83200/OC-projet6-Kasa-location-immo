import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
