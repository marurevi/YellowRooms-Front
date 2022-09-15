import React from 'react';
import { NavLink } from 'react-router-dom';

const Splash = () => (
  <div>
    <h2>Splash</h2>
    <NavLink className="link" to="/login">LOG IN</NavLink>
    <NavLink className="link" to="signup">REGISTER</NavLink>
  </div>
);

export default Splash;
