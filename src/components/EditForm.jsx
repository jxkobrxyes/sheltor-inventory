import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function UpdateForm({petId}) {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [ageYears, setAgeYears] = useState('');
    const [gender, setGender ] = useState('');
    const [image, setImage ] = useState('');
    const [description, setDescription ] = useState('');
    const [status, setStatus ] = useState('');
    const [fee, setFee ] = useState('');

    const getPet = async (petId) => {

        const response = await fetch(`http://localhost:8080/api/pets/${petId}`, {
            headers: {
                'SameSite': 'None'
              }
        });
        const data = await response.json();
        const {pet} = data;
    
        setName(pet.name);
        setAgeYears(pet.ageYears);
        setGender(pet.gender);
        setImage(pet.image);
        setDescription(pet.description);
        setStatus(pet.status);
        setFee(pet.fee);
    }

    const updatePet = async (petId, updatedPet) => {
        try {
            const response = await fetch(`http://localhost:8080/api/pets/update/${petId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'SameSite': 'None'
                },
                body: JSON.stringify(updatedPet)
            });

            const data = await response.json();
            navigate(`/pets/${data.updatedPet.id}`)
            toast.success('Pet successfully updated!');

        } catch (error) {
            console.log(error.message);
            toast.error(`Pet did not update - error: ${error.message}`)
        }
    
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedPet = {
            name,
            ageYears,
            gender,
            image,
            description,
            status,
            fee
        }
        updatePet(petId, updatedPet);
    }

    useEffect(() => {
        getPet(petId);
    }, [petId]);

  return (
    <div className="container">
        <div className='edit-form'>
            <h2>Details:</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter name' value={name} onChange={(event) => setName(event.target.value)} required/>
                <input type="number" placeholder='Enter age' value={ageYears} onChange={(event) => setAgeYears(event.target.value)} required/>
                <input type="text" placeholder='Enter gender' value={gender} onChange={(event) => setGender(event.target.value)} required/>
                <input type="text" placeholder='Enter image url' value={image} onChange={(event) => setImage(event.target.value)} required/>
                <input type="text" placeholder='Enter status' value={status} onChange={(event) => setStatus(event.target.value)} required/>
                <input type="number" placeholder='Enter fee' value={fee} onChange={(event) => setFee(event.target.value)} required/>
                <textarea type="text" placeholder='Enter description' value={description} onChange={(event) => setDescription(event.target.value)} required></textarea>
                <button className='form-button'>Update Pet</button>
            </form>

        </div>
    </div>

  )
}

export default UpdateForm