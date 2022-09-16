import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../img/YELLOW.png';
import './Header.css';

const Header = () => {
  const location = useLocation();
  if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }
  return (
    <nav className="nav">
      <img src={logo} alt="logo" className="logo" />
      <ul className="ulMenu">
        <li><NavLink className="link" to="/Rooms">ROOMS</NavLink></li>
        <li><NavLink className="link" to="/Reserve">RESERVE</NavLink></li>
        <li><NavLink className="link" to="/Reservations">RESERVATIONS</NavLink></li>
        <li><NavLink className="link" to="/AddRoom">NEW</NavLink></li>
        <li><NavLink className="link" to="/DeleteRoom">DELETE</NavLink></li>
      </ul>
    </nav>
  );
};

export default Header;
