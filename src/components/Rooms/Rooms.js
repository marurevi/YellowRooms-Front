import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getRoomsActionCreator } from '../../Redux/Rooms/rooms';
import { getReservations } from '../../Redux/Reservations/Reservations';

const Rooms = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoomsActionCreator());
    dispatch(getReservations());
  });
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
