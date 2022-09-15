import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <div>Login</div>
      <li><NavLink className="link" to="/Rooms">ROOMS</NavLink></li>
    </div>
  );
}
