import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Redux/Authenticate/authentication';
import mainLogo from '../../img/YELLOW-3.png';
import './Splash.css';

const Splash = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const marianaGithub = 'https://github.com/marurevi';
  const andresGithub = 'https://github.com/anagudelogu';
  const axelGithub = 'https://github.com/AxelSoler';
  const tadesseGithub = 'https://github.com/Tadesse-Alemayehu';
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
      <footer className="footer">
        <li className="profile">Microverse Final Capstone Team</li>
        <ul className="ulProfile">
          <li>
            <a
              className="profile"
              href={marianaGithub}
              target="_blank"
              rel="noopener noreferrer"
            >
              Mariana
            </a>
          </li>
          <li>
            <a
              className="profile"
              href={andresGithub}
              target="_blank"
              rel="noopener noreferrer"
            >
              Andres
            </a>
          </li>
          <li>
            <a
              className="profile"
              href={axelGithub}
              target="_blank"
              rel="noopener noreferrer"
            >
              Axel
            </a>
          </li>
          <li>
            <a
              className="profile"
              href={tadesseGithub}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tadesse
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Splash;
