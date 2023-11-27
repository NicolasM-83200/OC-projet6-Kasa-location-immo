import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="wrapper">
      <div className="main">
        <Header />
        <div className="error-container">
          <div className="error-container__content">
            <h1 className="error-container__title">404</h1>
            <p className="error-container__text">
              Oups ! La page que vous demandez n'existe pas
            </p>
            <Link className="error-container__link" to="/">
              Retourner sur la page d'acceuil
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
