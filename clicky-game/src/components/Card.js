import React from "react";
import "../styles/Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.onClick(props.id)} />
      </div>
    </div>
  );
}

export default Card;
