import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Reservation from './Reservation';
import { getReservations } from '../../Redux/Reservations/Reservations';
import './reservations.css';

const Reservations = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReservations());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const userReservations = useSelector((state) => state.reservations.filter(
    (reservation) => reservation.attributes.user_id === state.user.id,
  ));
  return userReservations.length ? (
    <div>
      <h2>MY RESERVATIONS</h2>
      {userReservations.map((reservation) => (
        <Reservation reservationId={reservation.id} key={reservation.id} />
      ))}
    </div>
  ) : (
    <h2>There are not any reservations</h2>
  );
};

export default Reservations;
