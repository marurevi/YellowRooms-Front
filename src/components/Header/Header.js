import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <nav className="nav">
    <h2>navbar logo</h2>
    <ul className="ulMenu">
      <li><NavLink className="link" to="/ROOMS">ROOMS</NavLink></li>
      <li><NavLink className="link" to="/RESERVATIONS">RESERVATIONS</NavLink></li>
      <li><NavLink className="link" to="/NEWROOM">NEW</NavLink></li>
      <li><NavLink className="link" to="/DELETEROOM">DELETE</NavLink></li>
    </ul>
  </nav>
);

export default Header;
