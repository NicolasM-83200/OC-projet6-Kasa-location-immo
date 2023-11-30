// Importation des composants React
import React from "react";
import data from "../assets/logements.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Navigate, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import AccomodationInfos from "../components/AccomodationInfos";

const Accomodation = () => {
  //Hook permettant de récupérer les paramètres de l'URL
  const { accomodationId } = useParams();

  //On parcours le tableau data pour trouver l'élément dont l'id correspond a l'id récupéré en paramètres
  const accomodationData = data.find((item) => item.id === accomodationId);

  //S'il n'y a pas de données dans accomodationData on est redirigé vers la page Error
  if (!accomodationData) {
    return <Navigate to="/error" />;
  }

  // Renvoie le code HTML
  return (
    <div className="wrapper">
      <div className="main">
        <Header />
        {/* On passe les données de l'élément trouvé à nos composants */}
        <Carousel slides={accomodationData.pictures} />
        <AccomodationInfos infos={accomodationData} />
      </div>
      <Footer />
    </div>
  );
};

export default Accomodation;
