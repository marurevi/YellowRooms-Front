import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Reserve = () => {
  const rooms = useSelector((state) => state.rooms);
  const [userId, setUserId] = useState(0);
  const [roomId, setRoomId] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDATE] = useState('');
  const [city, setCity] = useState('');
  const reservationsURL = 'http://localhost:3001/reservations';

  const reserveRoomSubmit = async (e) => {
    e.preventDefault();
    axios.post(reservationsURL, {
      user_id: parseInt(userId, 10),
      room_id: parseInt(roomId, 10),
      start_date: startDate,
      end_date: endDate,
      city,
    })
      .then((response) => {
        if (response.status === 201) {
          window.location.href = '/Reservations';
        }
      });
  };

  return (
    <div>
      <h2>Reserve Form</h2>
      <form onSubmit={reserveRoomSubmit}>
        <input onChange={(e) => setUserId(e.target.value)} className="signInput" type="number" placeholder="User" required />
        <select onChange={(e) => setRoomId(e.target.value)} required>
          {rooms.map((room) => (
            <option key={room.id} value={room.id}>{room.name}</option>
          ))}
        </select>
        <input onChange={(e) => setStartDate(e.target.value)} className="signInput" type="text" placeholder="Start reservation" required />
        <input onChange={(e) => setEndDATE(e.target.value)} className="signInput" type="text" placeholder="End reservation" required />
        <input onChange={(e) => setCity(e.target.value)} className="signInput" type="text" placeholder="City" required />
        <button type="submit">Create Reservation</button>
      </form>
    </div>
  );
};

export default Reserve;
