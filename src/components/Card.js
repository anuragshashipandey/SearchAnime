import React from "react";
import "../styles/Card.css";
function Card({ imgUri, title }) {
  return (
    <div className="card">
      <img className="cardimg" src={imgUri} alt="Img_Card" />
      <p className="title">{title}</p>
    </div>
  );
}

export default Card;
