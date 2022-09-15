import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => (
  <div>
    <div>Login</div>
    <li><NavLink className="link" to="/Rooms">ROOMS</NavLink></li>
  </div>
);

export default Login;
