import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.scss';

const NavBar = () =>{
    return(
        <>
            <nav className="navbar">
                <div className="nav-container">
                    {/* cat logo */}
                    <img classname ='logo' src="/images/catLogo.png" alt="pet shelter" width={60} height={60}/>
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
