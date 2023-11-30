// import React from "react";
import React, { useState } from "react";
import arrowLeft from "../assets/img/Arrow-left.png";
import arrowRight from "../assets/img/Arrow-right.png";

// On crée un composant Carousel qui prend en paramètre un objet props
const Carousel = ({ slides }) => {
  // On utilise le hook useState pour créer une variable d'état qui va nous permettre de savoir quelle slide est affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  // On crée deux fonctions qui vont nous permettre de changer la slide affichée
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };
  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {/* // On affiche les flèches de navigation et le numéro de la slide */}
        <img
          className={`carousel__arrow-left${
            slides.length - 1 === 0 ? "--hidden" : ""
          }`}
          src={arrowLeft}
          alt="bouton précédent"
          onClick={prevSlide}
        />
        {/* // On parcours le tableau slides de l'objet props pour afficher les images */}
        {slides.map((slide, index) => (
          <img
            className={
              currentIndex === index
                ? "carousel__slide"
                : "carousel__slide hidden"
            }
            src={slide}
            alt={`Slide carousel ${index + 1}`}
            key={index}
          />
        ))}
        <img
          className={`carousel__arrow-right${
            slides.length - 1 === 0 ? "--hidden" : ""
          }`}
          src={arrowRight}
          alt="bouton suivant"
          onClick={nextSlide}
        />
        <span
          className={`carousel__indicator${
            slides.length - 1 === 0 ? "--hidden" : ""
          }`}
        >
          {currentIndex + 1}/{slides.length}
        </span>
      </div>
    </div>
  );
};

export default Carousel;
