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
      <form className="login-form" onSubmit={userSubmit}>
        <div className="title-splash">
          <h2 className="welcome">WELCOME</h2>
          <NavLink className="register-link" to="signup">REGISTER</NavLink>
        </div>
        <input onChange={(e) => setUserName(e.target.value)} className="loginInput" type="text" placeholder="User" required />
        <input onChange={(e) => setUserPassword(e.target.value)} className="loginInput" type="text" placeholder="Password" required />
        <button className="loginBtn" type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Splash;
