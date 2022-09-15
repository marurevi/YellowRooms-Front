import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <nav className="nav">
    <h2>navbar logo</h2>
    <ul className="ulMenu">
      <li><NavLink className="link" to="/Rooms">ROOMS</NavLink></li>
      <li><NavLink className="link" to="/Reservations">RESERVATIONS</NavLink></li>
      <li><NavLink className="link" to="/AddRoom">NEW</NavLink></li>
      <li><NavLink className="link" to="/DeleteRoom">DELETE</NavLink></li>
    </ul>
  </nav>
);

export default Header;
