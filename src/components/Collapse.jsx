// Import React, useEffect, useRef and useState
import React, { useEffect, useRef, useState } from "react";
import arrowUp from "../assets/img/arrow_up.png";

// Création du composant Collapse
const Collapse = (props) => {
  // On utilise le hook useState pour créer une variable d'état qui va nous permettre de savoir si le texte est déplié ou non
  const [isOpen, setIsOpen] = useState(false);
  // On utilise le hook useRef pour créer une référence vers le texte à déplier
  const textRef = useRef(null);

  const toogleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // On utilise le hook useEffect pour définir la hauteur du texte à déplier
  useEffect(() => {
    const contentHeight = textRef.current.scrollHeight;
    textRef.current.style.height = isOpen ? `${contentHeight}px` : "0px";
  }, [isOpen]);

  return (
    <div className="collapse-item">
      <div className="collapse-item-title">
        <span>{props.title}</span>
        <img
          className={`arrow ${isOpen ? "open" : ""}`}
          src={arrowUp}
          alt="Flèche pour déplier item"
          onClick={toogleCollapse}
        />
      </div>
      {/* // On utilise la référence pour définir la hauteur du texte à déplier */}
      <div
        className={`collapse-item-text-container ${isOpen ? "open" : "closed"}`}
        ref={textRef}
      >
        <div className="collapse-item-text">{props.text}</div>
      </div>
    </div>
  );
};

export default Collapse;
