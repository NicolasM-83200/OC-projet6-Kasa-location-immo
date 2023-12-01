import data from "../assets/logements.json";
import Card from "./Card";

const Gallery = () => {
  return (
    <div className="gallery">
      <ul className="gallery__list">
        {data.map((accomodation) => (
          <Card key={accomodation.id} accomodation={accomodation} />
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
