import React, { useState } from 'react';
import axios from 'axios';
import Reservation from './Reservation';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const reservationsURL = 'http://localhost:3001/reservations';

  React.useEffect(() => {
    axios.get(reservationsURL).then((response) => {
      setReservations(response.data);
    });
  }, []);

  if (!reservations[0]) return null;

  return (
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
  );
};

export default Reservations;
