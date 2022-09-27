import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from '../../img/YELLOW.png';
import './Navbar.css';
import { logoutUser } from '../../Redux/Authenticate/authentication';

const Navbar = () => {
  const dispatch = useDispatch();

  const toggleMobileMenu = () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="nav-logo" />
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            onClick={toggleMobileMenu}
            onKeyPress={toggleMobileMenu}
            to="/Rooms"
          >
            ROOMS
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            onClick={toggleMobileMenu}
            onKeyPress={toggleMobileMenu}
            to="/Reserve"
          >
            RESERVE
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            onClick={toggleMobileMenu}
            onKeyPress={toggleMobileMenu}
            to="/Reservations"
          >
            RESERVATIONS
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            onClick={toggleMobileMenu}
            onKeyPress={toggleMobileMenu}
            to="/AddRoom"
          >
            NEW
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            onClick={toggleMobileMenu}
            onKeyPress={toggleMobileMenu}
            to="/DeleteRoom"
          >
            DELETE
          </NavLink>
        </li>
        <li className="nav-item">
          <button onClick={handleLogout} type="button">
            Logout
          </button>
        </li>
      </ul>
      <button
        type="button"
        className="hamburger"
        onClick={toggleMobileMenu}
        onKeyDown={toggleMobileMenu}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </nav>
  );
};

export default Navbar;
