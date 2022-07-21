import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import Card from "../components/card/Card";
import CardList from "../components/card-list/Card-list";

function Pets() {
    const [pets, setPets] = useState([]);
  
    const getData = async () => {
      const response = await fetch(`http://localhost:8000/api/pets`);
      const data = await response.json();
  
      console.log("Data: ", data);
      const { pets } = data;
      setPets(pets);
      console.log("Pets: ", pets);
    };
  
    useEffect(() => {
      getData();
    }, []);

    return (
        
          <div className="container">
            {pets.length > 0
              ? pets.map((pet) => (
                  <Card key={pet.id} pet={pet} />
                ))
              : 'Loading'}
          </div>
      );
}

export default Pets;

