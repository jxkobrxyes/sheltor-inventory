import React, {useState} from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function PetForm() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [ageYears, setAgeYears] = useState('');
    const [gender, setGender ] = useState('');
    const [image, setImage ] = useState('');
    const [description, setDescription ] = useState('');
    const [status, setStatus ] = useState('');
    const [fee, setFee ] = useState('');

    const createPet = async (newPet) => {
        try {
            const response = await fetch('http://localhost:8080/api/pets/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'SameSite': 'None'
                },
                body: JSON.stringify(newPet)
            });

            const data = await response.json();

            console.log('Pet Created!', data);

            navigate(`/pet/${data.createdPet.id}`)
            toast.success('Pet successfully created!');


        } catch (error) {
            console.log(error.message);
            toast.error(`Pet did not update - error: ${error.message}`)
        }
    
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newPet = {
            name,
            ageYears,
            gender,
            image,
            description,
            status,
            fee
        }
        createPet(newPet);

        setName('');
        setAgeYears('');
        setGender('');
        setImage('');
        setDescription('');
        setStatus('');
        setFee('');
    }

  return (
    <div className="container">
        <div className='pet-form'>
            <h2>Details:</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter name' value={name} onChange={(event) => setName(event.target.value)} required/>
                <input type="number" placeholder='Enter age' value={ageYears} onChange={(event) => setAgeYears(event.target.value)} required/>
                <input type="text" placeholder='Enter gender' value={gender} onChange={(event) => setGender(event.target.value)} required/>
                <input type="text" placeholder='Enter image url' value={image} onChange={(event) => setImage(event.target.value)} required/>
                <input type="text" placeholder='Enter status' value={status} onChange={(event) => setStatus(event.target.value)} required/>
                <input type="number" placeholder='Enter fee' value={fee} onChange={(event) => setFee(event.target.value)} required/>
                <textarea type="text" placeholder='Enter description' value={description} onChange={(event) => setDescription(event.target.value)} required></textarea>
                <button className='form-button'>Create Pet</button>
            </form>

        </div>
    </div>

  )
}

export default PetForm