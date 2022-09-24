import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../img/YELLOW.png';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }

  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  const mobileMenu = (e) => {
    e.preventDefault();
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  };

  const closeMenu = () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="nav-logo" />
      <ul className="nav-menu">
        <li className="nav-item"><NavLink className="nav-link" onClick={closeMenu} onKeyPress={mobileMenu} to="/Rooms">ROOMS</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" onClick={closeMenu} onKeyPress={mobileMenu} to="/Reserve">RESERVE</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" onClick={closeMenu} onKeyPress={mobileMenu} to="/Reservations">RESERVATIONS</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" onClick={closeMenu} onKeyPress={mobileMenu} to="/AddRoom">NEW</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" onClick={closeMenu} onKeyPress={mobileMenu} to="/DeleteRoom">DELETE</NavLink></li>
      </ul>
      <button type="button" className="hamburger" onClick={mobileMenu} onKeyDown={mobileMenu}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </nav>
  );
};

export default Navbar;
