import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const loginURL = 'http://localhost:3001/users';

  const userSubmit = async (e) => {
    e.preventDefault();
    axios.post(loginURL, {
      name: userName,
      password: userPassword,
    })
      .then(() => {
        window.location.href = '/Rooms';
      });
  };

  return (
    <div className="signup-page">
      <div>SignUp</div>
      <form onSubmit={userSubmit}>
        <input onChange={(e) => setUserName(e.target.value)} className="signInput" type="text" placeholder="User" required />
        <input onChange={(e) => setUserPassword(e.target.value)} className="signInput" type="text" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignUp;
