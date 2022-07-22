import {useParams} from 'react-router-dom';
import Form from '../components/EditForm'

function EditPet() {

    const { id } = useParams();

  return (

    <div className='container' style={{flexDirection: 'column'}}>
      <h1>Update/Edit Pet:</h1>
      <Form petId={id}/>
    </div>

  )
}

export default EditPet