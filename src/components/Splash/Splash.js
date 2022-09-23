import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { loginUser } from '../../Redux/Authenticate/authentication';
import SignUp from '../SignUp/SignUp';
import Footer from '../Footer/Footer';
// import axios from 'axios';
import mainLogo from '../../img/YELLOW-3.png';
import './Splash.css';

const Splash = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [userName, setUserName] = useState("");
  // const [userPassword, setUserPassword] = useState("");
  // const loginURL = 'http://localhost:3001/users';
  const initialForm = {
    user: {
      login: '',
      password: '',
    },
  };
  const [user, setUser] = useState(initialForm);
  const handleUserChange = (e) => {
    setUser((old) => ({
      ...old,
      user: { ...old.user, [e.target.name]: e.target.value },
    }));
  };
  // NOTE: Navigate to rooms on success log in
  const changeNavigation = () => {
    navigate('/rooms');
  };
  const userSubmit = async (e) => {
    e.preventDefault();
    // axios.get(loginURL).then((response) => {
    //   const data = response.data
    //     .filter((item) => item.name === userName && item.password === userPassword);
    //   if (data[0]) {
    //     setUserName('');
    //     setUserPassword('');
    //     window.location.href = '/Rooms';
    //   }
    // });
    dispatch(loginUser(user, changeNavigation));
  };
  return (
    <div className="splash-page">
      <img src={mainLogo} alt="mainLogo" className="mainLogo" />
      <form className="login-form" onSubmit={userSubmit}>
        <div className="title-splash">
          <h2 className="welcome">WELCOME</h2>
          <NavLink className="register-link" to="signup">
            REGISTER
          </NavLink>
        </div>
        <input
          onChange={handleUserChange}
          className="loginInput"
          name="login"
          value={user.user.login}
          type="text"
          placeholder="User"
          required
        />
        <input
          onChange={handleUserChange}
          className="loginInput"
          type="password"
          name="password"
          value={user.user.password}
          placeholder="Password"
          required
        />
        <button className="loginBtn" type="submit">
          LOGIN
        </button>
      </form>
      <SignUp />
      <Footer />
    </div>
  );
};

export default Splash;
