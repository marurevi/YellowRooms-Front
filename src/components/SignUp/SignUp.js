import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { ImCross } from 'react-icons/im';
import { registerUser } from '../../Redux/Authenticate/authentication';
import '../Splash/Splash.css';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialForm = {
    user: {
      username: '',
      email: '',
      password: '',
    },
  };
  const [styleRegister, setStyleRegister] = useState('modalInactive');
  const [user, setUser] = useState(initialForm);

  // NOTE: handle user data changes inside the form
  const handleUserChange = (e) => {
    setUser((old) => ({
      ...old,
      user: { ...old.user, [e.target.name]: e.target.value },
    }));
  };

  // NOTE: Navigate to rooms on success sign in
  const changeNavigation = () => {
    navigate('/rooms');
  };

  // NOTE: start registering user
  const userSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerUser(user, changeNavigation));
  };

  const activeSignUpModal = () => {
    if (styleRegister === 'modalInactive') {
      setStyleRegister('modalActive');
    } else {
      setStyleRegister('modalInactive');
    }
  };

  return (
    <section>
      <button className="registerBtn" id="signBtn" type="button" onClick={activeSignUpModal}>
        REGISTER
      </button>
      <div className={styleRegister}>
        <div className="signupTitle">
          <h3 className="signup">SignUp</h3>
          <button type="button" className="closeBtn" onClick={activeSignUpModal}>
            <IconContext.Provider value={{ size: '24px', className: 'crossBtn' }}>
              <ImCross />
            </IconContext.Provider>
          </button>
        </div>
        <form onSubmit={userSubmit}>
          <input
            name="username"
            id="username"
            onChange={handleUserChange}
            className="loginInput"
            type="text"
            placeholder="User"
            required
          />
          <input
            name="email"
            id="email"
            onChange={handleUserChange}
            className="loginInput"
            type="email"
            placeholder="Email"
            required
          />
          <input
            name="password"
            id="password"
            onChange={handleUserChange}
            className="loginInput"
            type="password"
            placeholder="Password"
            required
          />
          <button className="registerBtn" type="submit">Register</button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
