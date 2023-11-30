// Importation des librairies et fichiers nécessaires
import React from "react";
import Ratings from "./Ratings";
import Collapse from "./Collapse";

const AccomodationInfos = ({ infos }) => {
  // Récupération du prénom et nom de l'hôte dans deux variables distincts
  const surnameUser = infos.host.name.split(" ")[0];
  const lastnameUser = infos.host.name.split(" ")[1];

  // Renvoie le code HTML
  return (
    <div className="accomodation-infos">
      <div className="accomodation-infos-up">
        <div className="accomodation-infos-up__info-left">
          <h2 className="accomodation-infos-up__title">{infos.title}</h2>
          <p className="accomodation-infos-up__location">{infos.location}</p>
          <div className="accomodation-infos-up__tags-container">
            {/* // On parcours le tableau tags de l'objet infos pour afficher les tags */}
            {infos.tags.map((tag, index) => (
              <div className="accomodation-infos-up__tag" key={index}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="accomodation-infos-up__info-right">
          <div className="accomodation-infos-up__user-infos">
            <div className="accomodation-infos-up__user-name">
              <p>{surnameUser}</p>
              <p>{lastnameUser}</p>
            </div>
            <div className="accomodation-infos-up__user-avatar">
              {/* // On affiche l'avatar de l'hôte */}
              <img
                className="accomodation-infos-up__avatar"
                src={infos.host.picture}
                alt={`Avatar de ${infos.host.name}`}
              />
            </div>
          </div>
          {/* // On affiche le nombre d'étoiles en fonction de la note de l'hôte */}
          <Ratings stars={infos.rating} />
        </div>
      </div>
      <div className="collapse-item-container accomodation">
        {/* // On affiche les descriptions et les équipements */}
        <Collapse
          className="accomodation left"
          title="Description"
          text={infos.description}
        />
        {/* // On parcours le tableau equipments de l'objet infos pour afficher les équipements */}
        <Collapse
          className="accomodation right"
          title="Equipements"
          text={infos.equipments.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        />
      </div>
    </div>
  );
};

export default AccomodationInfos;
