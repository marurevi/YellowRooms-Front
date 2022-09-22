import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPost } from "../../API/api";
const SignUp = () => {
  const navigate = useNavigate();
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
  };

  const userSubmit = async (e) => {
    e.preventDefault();
    const response = await sendPost("register", user);
    const token = response.headers.authorization;
    if (token) {
      localStorage.setItem("token", token);
      navigate("/rooms");
    } else {
      // TODO: Error handling
    }
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
