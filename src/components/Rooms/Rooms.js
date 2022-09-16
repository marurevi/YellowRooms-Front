import React from "react";
import { NavLink } from "react-router-dom";
const Rooms = () => {
  const value = `/Rooms/id=${1}`;
  return (
    <>
      <h2>Rooms</h2>
      <NavLink className="link" to={value}>
        Detail
      </NavLink>
    </>
  );
};

export default Rooms;
