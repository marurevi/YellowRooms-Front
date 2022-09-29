import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import DeleteReservation from '../partials/DeleteReservation';

const Reservation = ({ reservationId }) => {
  const reservation = useSelector((store) => store.reservations.find(
    (reservation) => reservation.id === reservationId,
  ));
  const reservedRoom = useSelector((store) => store.rooms.rooms.find(
    (room) => Number(room.id) === reservation.attributes.room_id,
  ));
  return (
    <div
      className="reservation"
      style={{ backgroundImage: `url(${reservedRoom.attributes.photo})` }}
    >
      <div className="container">
        <p>
          <span className="label">Reserved Room Name: </span>
          {reservedRoom.attributes.name}
        </p>
        <p>
          <span className="label">Reservation city: </span>
          {reservation.attributes.city}
        </p>
        <p>
          <span className="label">Reservation start date: </span>
          {reservation.attributes.start_date}
        </p>
        <p>
          <span className="label">Reservation end date: </span>
          {reservation.attributes.end_date}
        </p>
        <DeleteReservation id={reservation.id} />
      </div>
    </div>
  );
};

export default Reservation;

Reservation.propTypes = {
  reservationId: PropTypes.string.isRequired,
};
