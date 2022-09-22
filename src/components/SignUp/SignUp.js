import React, { useState } from "react";
import { sendPost } from "../../API/api";
const SignUp = () => {
  const [user, setUser] = useState({
    user: {
      username: "",
      email: "",
      password: "",
    },
  });
  const handleUserChange = (e) => {
    setUser((old) => ({
      ...old,
      user: { ...old.user, [e.target.name]: e.target.value },
    }));
    console.log(user);
  };

  const userSubmit = async (e) => {
    e.preventDefault();
    const result = await sendPost("register", user);
    console.log(result);
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
