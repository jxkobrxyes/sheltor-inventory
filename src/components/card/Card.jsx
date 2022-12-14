import "./card.styles.scss";

import axios from "axios";
import { useEffect } from "react";

function Card({ pet }) {
  return (
    <div className="card">
        <img className="photo" src={pet.image} alt={pet.name} />
      <div className="card-title">
        <h3>{pet.name}</h3>
      </div>
    </div>
  );
}

export default Card;
