import React from 'react';
import { NavLink } from 'react-router-dom';
import mainLogo from '../../img/YELLOW-3.png';
import './Splash.css';

const Splash = () => (
  <div className="splash-page">
    <img src={mainLogo} alt="mainLogo" className="mainLogo" />
    <h2>Welcome to Yellow Rooms</h2>
    <ul className="registration-links">
      <li><NavLink className="link" to="/login">LOG IN</NavLink></li>
      <li><NavLink className="link" to="signup">REGISTER</NavLink></li>
    </ul>
  </div>
);

export default Splash;
