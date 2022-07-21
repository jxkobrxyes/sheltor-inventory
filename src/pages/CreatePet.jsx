import React from "react";
import { Link } from 'react-router-dom';
//import { createPet } from "../../backend/src/controllers";

function CreatePet() {
  return (
    <div>
      <h1>Create Pet Page</h1>
      <Link to='/' text={'Back to Home'} />
    </div>
  );
}

export default CreatePet