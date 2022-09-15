import React from 'react';
import './Header.css';

const Header = () => (
  <nav className="nav">
    <h2>navbar logo</h2>
    <ul className="ulMenu">
      <li className="link">ROOMS</li>
      <li className="link">RESERVATIONS</li>
      <li className="link">NEW</li>
      <li className="link">DELETE</li>
    </ul>
  </nav>
);

export default Header;
