import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SignUp() {
  return (
    <div>
      <div>SignUp</div>
      <li><NavLink className="link" to="/Rooms">ROOMS</NavLink></li>
    </div>
  );
}
