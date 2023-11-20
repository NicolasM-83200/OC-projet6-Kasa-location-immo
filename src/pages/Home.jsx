import React from "react";
import background_1 from "../assets/img/background-1.webp";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="banner">
        <img src={background_1} alt="Paysage falaise" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
