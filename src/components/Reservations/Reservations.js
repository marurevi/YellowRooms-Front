import React from 'react';
import { useSelector } from 'react-redux';
import Reservation from './Reservation';

const Reservations = () => {
  const reservations = useSelector((state) => state.reservations);

  return reservations[0] ? (
    <div>
      <h2>MY RESERVATIONS</h2>
      {reservations.map((room) => (
        <Reservation
          key={room.Id}
          roomId={room.room_id}
          userId={room.user_id}
          startDate={room.start_date}
          endDate={room.end_date}
          city={room.city}
        />
      ))}
    </div>
  ) : (
    <h2>There are not any reservations</h2>
  );
};

export default Reservations;
