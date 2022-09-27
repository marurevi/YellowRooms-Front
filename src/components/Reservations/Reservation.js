import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import DeleteReservation from '../partials/DeleteReservation';

const Reservation = ({ reservationId }) => {
  console.log(reservationId);
  const reservation = useSelector((store) => store.reservations.find(
    (reservation) => reservation.id === reservationId,
  ));
  return (
    <div className="reservation">
      <p>{`Reservation city: ${reservation.attributes.city}`}</p>
      <p>{`Reservation start date: ${reservation.attributes.start_date}`}</p>
      <p>{`Reservation end date: ${reservation.attributes.end_date}`}</p>
      <DeleteReservation id={reservation.id} />
    </div>
  );
};

export default Reservation;

Reservation.propTypes = {
  reservationId: PropTypes.string.isRequired,
};
