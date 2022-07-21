import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

import NavBar from './components/nav-bar/navBar.jsx';

function App() {


  return (
    <div classNme = 'container'>
      <NavBar />
    </div>
  );
}

export default App;



/* 

    useEffect(() =>{
    async function apiBridge(){
      const response = await axios.get('http://localhost:8080/ayoo')
      console.log(response.data)
    }
    apiBridge()
  }
  , [])



*/