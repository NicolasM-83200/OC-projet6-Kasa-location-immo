import React, { useEffect, useRef, useState } from "react";
import arrowUp from "../assets/img/arrow_up.png";

const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const textRef = useRef(null);

  const toogleCollapse = () => {
    setIsOpen(!isOpen);
  };

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
