import React from "react";
import { Link } from 'react-router-dom';
import CreatePetForm  from "../components/CreatePetForm";

function CreatePet() {
  return (
    <div>
      <h1>Create Pet Page</h1>
      <CreatePetForm />
      <Link to='/' text={'Back to Home'} />
    </div>
  );
}

export default CreatePet