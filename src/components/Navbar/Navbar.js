import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../img/YELLOW.png';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }

  const toggleMobileMenu = () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="nav-logo" />
      <ul className="nav-menu">
        <li className="nav-item"><NavLink className="nav-link" onClick={toggleMobileMenu} onKeyPress={toggleMobileMenu} to="/Rooms">ROOMS</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" onClick={toggleMobileMenu} onKeyPress={toggleMobileMenu} to="/Reserve">RESERVE</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" onClick={toggleMobileMenu} onKeyPress={toggleMobileMenu} to="/Reservations">RESERVATIONS</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" onClick={toggleMobileMenu} onKeyPress={toggleMobileMenu} to="/AddRoom">NEW</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" onClick={toggleMobileMenu} onKeyPress={toggleMobileMenu} to="/DeleteRoom">DELETE</NavLink></li>
      </ul>
      <button type="button" className="hamburger" onClick={toggleMobileMenu} onKeyDown={toggleMobileMenu}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </nav>
  );
};

export default Navbar;
