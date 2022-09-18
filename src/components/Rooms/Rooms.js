import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRoomsActionCreator } from "../../Redux/Rooms/rooms";
const Rooms = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("dispatching action");
    dispatch(getRoomsActionCreator());
  }, []);
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
