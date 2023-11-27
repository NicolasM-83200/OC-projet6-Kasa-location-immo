import React from "react";
import Ratings from "./Ratings";
import Collapse from "./Collapse";

const AccomodationInfos = ({ infos }) => {
  // Récupération du prénom et nom de l'hôte dans deux variables distincts
  const surnameUser = infos.host.name.split(" ")[0];
  const lastnameUser = infos.host.name.split(" ")[1];

  return (
    <div className="accomodation-infos">
      <div className="accomodation-infos-up">
        <div className="accomodation-infos-up__info-left">
          <h2 className="accomodation-infos-up__title">{infos.title}</h2>
          <p className="accomodation-infos-up__location">{infos.location}</p>
          <div className="accomodation-infos-up__tags-container">
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
              <img
                className="accomodation-infos-up__avatar"
                src={infos.host.picture}
                alt={`Avatar de ${infos.host.name}`}
              />
            </div>
          </div>
          <Ratings stars={infos.rating} />
        </div>
      </div>
      <div className="collapse-item-container accomodation">
        <Collapse
          className="accomodation left"
          title="Description"
          text={infos.description}
        />
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
