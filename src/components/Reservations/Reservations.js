import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Reservation from './Reservation';
import { getReservations } from '../../Redux/Reservations/Reservations';
import { getRoomsActionCreator } from '../../Redux/Rooms/rooms';

const Reservations = () => {
  const reservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoomsActionCreator());
    dispatch(getReservations());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const userReservations = reservations.filter((reserve) => reserve.user_id === 4);

  return userReservations[0] ? (
    <div>
      <h2>MY RESERVATIONS</h2>
      {userReservations.map((room) => (
        <Reservation
          key={room.id}
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
