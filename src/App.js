import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/nav-bar/navBar.jsx';
import Home from './pages/Home';
import PetInfo from './pages/PetInfo';
import CreatePet from './pages/CreatePet';


function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pets/:id' element={<PetInfo/>} />
          <Route path='/pets/create' element={<CreatePet/>} />
        </Routes>
      </main>
    </Router>
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