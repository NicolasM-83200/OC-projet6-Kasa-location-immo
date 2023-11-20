import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="error-container">
        <div className="error-content">
          <h1>404</h1>
          <p>Oups ! La page que vous demandez n'existe pas</p>
          <NavLink to="/">Retourner sur la page d'acceuil</NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error;