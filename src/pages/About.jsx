import React from "react";
import background_2 from "../assets/img/background-2.webp";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="banner">
        <img src={background_2} alt="Paysage montagne" />
      </div>
      <Footer />
    </div>
  );
};

export default About;
