import React, { useState } from "react";
import arrowLeft from "../assets/img/Arrow-left.png";
import arrowRight from "../assets/img/Arrow-right.png";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };
  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <img
          className={`carousel__arrow-left${
            slides.length - 1 === 0 ? "--hidden" : ""
          }`}
          src={arrowLeft}
          alt="bouton précédent"
          onClick={prevSlide}
        />
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
