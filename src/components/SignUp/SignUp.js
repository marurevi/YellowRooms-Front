import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../Redux/Authenticate/authentication";
import { useDispatch, useSelector } from "react-redux";
const SignUp = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
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

  const changeNavigation = () => {
    navigate("/rooms");
  };
  const userSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerUser(user, changeNavigation));
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
