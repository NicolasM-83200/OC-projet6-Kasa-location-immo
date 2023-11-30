import { Link } from "react-router-dom";
import data from "../assets/logements.json";
import Card from "./Card";

const Gallery = () => {
  return (
    <div className="gallery">
      <ul className="gallery__list">
        {data.map((accomodation) => (
          // On utilise le composant Link de react-router-dom pour créer un lien vers la page de détail de chaque logement
          <Link
            className="gallery__list-item-link"
            to={`/accomodation/${accomodation.id}`}
            key={accomodation.id}
          >
            <Card accomodation={accomodation} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
