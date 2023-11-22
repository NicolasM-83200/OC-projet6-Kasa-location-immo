import { Link } from "react-router-dom";
import data from "../assets/logements.json";
import Card from "./Card";

const Gallery = () => {
  return (
    <div className="gallery">
      <ul>
        {data.map((accomodation) => (
          <Link to={`/accomodation/${accomodation.id}`} key={accomodation.id}>
            <Card accomodation={accomodation} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
