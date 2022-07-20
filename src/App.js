import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {


  useEffect(() =>{
    async function apiBridge(){
      const response = await axios.get('http://localhost:8080/ayoo')
      console.log(response.data)
    }
    apiBridge()
  }
  , [])



  return (
    <div >
      <h1>Hello team!</h1>
    </div>
  );
}

export default App;
