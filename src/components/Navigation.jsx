// Import navigation component
import React from "react";
import { NavLink } from "react-router-dom";

// Création du composant Navigation
const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navigation__list">
        {/* // On utilise le composant NavLink de react-router-dom pour créer un lien vers la page d'accueil et la page à propos */}
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
