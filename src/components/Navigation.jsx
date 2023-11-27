import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navigation__list">
        <NavLink
          to="/"
          className={(nav) =>
            nav.isActive
              ? "nav-active navigation__list-item-link"
              : "navigation__list-item-link"
          }
        >
          <li className="navigation__list-item">Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) =>
            nav.isActive
              ? "nav-active navigation__list-item-link"
              : "navigation__list-item-link"
          }
        >
          <li className="navigation__list-item">A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
