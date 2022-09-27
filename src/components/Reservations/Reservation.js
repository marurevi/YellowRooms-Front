import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import DeleteReservation from "../partials/DeleteReservation";
const Reservation = ({ reservationId }) => {
  console.log(reservationId);
  // const { userId, roomId, startDate, endDate, city } = props;
  const reservation = useSelector((store) => {
    return store.reservations.find(
      (reservation) => reservation.id === reservationId
    );
  });
  return (
    <div className="reservation">
      <p>{"Reservation city: " + reservation.attributes.city}</p>
      <p>{"Reservation start date: " + reservation.attributes.start_date}</p>
      <p>{"Reservation end date: " + reservation.attributes.end_date}</p>
      <DeleteReservation id={reservation.id} />
    </div>
  );
};

export default Reservation;

Reservation.propTypes = {
  reservationId: PropTypes.string.isRequired,
  // roomId: PropTypes.number,
  // startDate: PropTypes.string,
  // endDate: PropTypes.string,
  // city: PropTypes.string,
};

// Reservation.defaultProps = {
//   reservationId: "0",
// roomId: "0",
// startDate: "12/12/2000",
// endDate: "12/12/2001",
// city: "city",
// };
