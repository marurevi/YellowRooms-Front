import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import mainLogo from '../../img/YELLOW-3.png';
import './Splash.css';

const Splash = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const loginURL = 'http://localhost:3001/users';

  const userSubmit = async (e) => {
    e.preventDefault();
    axios.get(loginURL).then((response) => {
      const data = response.data
        .filter((item) => item.name === userName && item.password === userPassword);
      if (data[0]) {
        setUserName('');
        setUserPassword('');
        window.location.href = '/Rooms';
      }
    });
  };
  return (
    <div className="splash-page">
      <img src={mainLogo} alt="mainLogo" className="mainLogo" />
      <h2>Welcome to Yellow Rooms</h2>
      <ul className="registration-links">
        <form onSubmit={userSubmit}>
          <input onChange={(e) => setUserName(e.target.value)} className="loginInput" type="text" placeholder="User" required />
          <input onChange={(e) => setUserPassword(e.target.value)} className="loginInput" type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <li><NavLink className="link" to="signup">REGISTER</NavLink></li>
      </ul>
    </div>
  );
};

export default Splash;
