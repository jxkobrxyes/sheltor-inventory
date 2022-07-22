import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.scss';

const NavBar = () =>{
    return(
        <>
        {/*  */}
            <nav className="navbar">
                <div className="nav-container">
                    <img classname ='logo' src="/images/animal-shelter.png" alt="pet shelter" width={40} height={40}/>
                    <ul className='menu'>
                        <li className='item'>
                            <Link to='/'classname='link'>Home</Link>
                        </li>
                        <li className='item'>
                            <Link to='/pets'classname='link'>Pets</Link>
                        </li>
                        <li className='item'>
                            <Link to='/'classname='link'>About</Link>
                        </li>
                        <Link to="/"><button id='Admin'>Admin</button></Link>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default NavBar
