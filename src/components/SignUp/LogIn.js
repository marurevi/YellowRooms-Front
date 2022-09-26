import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { ImCross } from 'react-icons/im';
import { loginUser } from '../../Redux/Authenticate/authentication';
import '../Splash/Splash.css';

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialForm = {
    user: {
      login: '',
      password: '',
    },
  };
  const [styleLogin, setStyleLogin] = useState('inactive');
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

  const activeRegisterModal1 = () => {
    setStyleLogin('active');
    // const splashBody = document.querySelector('.mainContentSplash');
    // splashBody.classList.toggle('blur');
  };

  return (
    <section>
      <button className="registerBtn" id="loginBtn" type="button" onClick={activeRegisterModal1}>
        LOGIN
      </button>
      <div className={styleLogin}>
        <form className="login-form" onSubmit={userSubmit}>
          <div className="signupTitle">
            <h3 className="signup">LogIn</h3>
            <IconContext.Provider value={{ size: '24px', className: 'crossBtn' }}>
              <ImCross />
            </IconContext.Provider>
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
          <button className="registerBtn" type="submit">LogIn</button>
        </form>
      </div>
    </section>
  );
};

export default LogIn;
