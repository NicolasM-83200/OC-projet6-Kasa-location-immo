// Import navigation component
import React from "react";
import { NavLink } from "react-router-dom";

// Création du composant Navigation
const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list-item">
          {/* // On utilise le composant NavLink de react-router-dom pour créer un lien vers la page d'accueil et la page à propos */}
          <NavLink
            to="/"
            className={(nav) =>
              nav.isActive
                ? "nav-active navigation__list-item-link"
                : "navigation__list-item-link"
            }
          >
            Accueil
          </NavLink>
        </li>
        <li className="navigation__list-item">
          <NavLink
            to="/about"
            className={(nav) =>
              nav.isActive
                ? "nav-active navigation__list-item-link"
                : "navigation__list-item-link"
            }
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
