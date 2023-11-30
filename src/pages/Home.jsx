// Import des composants React
import React from "react";
import background_1 from "../assets/img/background-1.webp";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Banner from "../components/Banner";

// Création de la page Home
const Home = () => {
  // Renvoie le code HTML
  return (
    <div className="wrapper">
      <div className="main">
        <Header />
        <Banner
          bannerImg={background_1}
          title="Chez vous, partout et ailleurs"
        />
        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
