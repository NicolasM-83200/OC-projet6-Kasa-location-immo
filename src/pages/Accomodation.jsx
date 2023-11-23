import React from "react";
import data from "../assets/logements.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";

const Accomodation = () => {
  const { accomodationId } = useParams();

  const accomodationData = data.find((item) => item.id === accomodationId);

  return (
    <div className="wrapper">
      <Header />
      <Carousel slides={accomodationData.pictures} />
      <div className="accomodation-infos"></div>
      <Footer />
    </div>
  );
};

export default Accomodation;
