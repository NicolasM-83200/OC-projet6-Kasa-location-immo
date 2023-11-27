import { Link } from "react-router-dom";
import data from "../assets/logements.json";
import Card from "./Card";

const Gallery = () => {
  return (
    <div className="gallery">
      <ul className="gallery__list">
        {data.map((accomodation) => (
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
