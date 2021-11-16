import React from "react";
import "../styles/Card.css";
function Card({ imgUri, title }) {
  return (
    <div className="card">
      <img className="cardimg" src={imgUri} alt="Img_Card" />
      <div className="title_container">
        <p className="title">{title}</p>
      </div>
    </div>
  );
}

export default Card;
