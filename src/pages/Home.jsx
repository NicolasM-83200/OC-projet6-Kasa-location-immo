import React from "react";
import background_1 from "../assets/img/background-1.webp";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <Banner bannerImg={background_1} title="Chez vous, partout et ailleurs" />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
