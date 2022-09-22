import React, { useState } from 'react';

const SignUp = () => {
  const [user, setUser] = useState({
    user: {
      username: '',
      email: '',
      password: '',
    },
  });
  const handleUserChange = (e) => {
    setUser((old) => ({
      ...old,
      user: { ...old.user, [e.target.name]: e.target.value },
    }));
  };

  const userSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(user));
    const result = await fetch(
      'https://yellow-rooms.herokuapp.com/api/v1/register',
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      },
    );
    console.log(result.json());
  };

  return (
    <div className="signup-page">
      <div>SignUp</div>
      <form onSubmit={userSubmit}>
        <input
          name="username"
          id="username"
          onChange={handleUserChange}
          className="signInput"
          type="text"
          placeholder="User"
          required
        />
        <input
          name="email"
          id="email"
          onChange={handleUserChange}
          className="signInput"
          type="email"
          placeholder="Email"
          required
        />
        <input
          name="password"
          id="password"
          onChange={handleUserChange}
          className="signInput"
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignUp;
