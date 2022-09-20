import React, { useState } from 'react';
import axios from 'axios';

const Reserve = () => {
  const [userId, setUserId] = useState('');
  const [roomId, setRoomId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDATE] = useState('');
  const [city, setCity] = useState('');
  const reservationsURL = 'http://localhost:3001/reservations';

  const reserveRoomSubmit = async (e) => {
    e.preventDefault();
    axios.post(reservationsURL, {
      user_id: userId,
      room_id: roomId,
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
        <input onChange={(e) => setRoomId(e.target.value)} className="signInput" type="number" placeholder="Room" required />
        <input onChange={(e) => setStartDate(e.target.value)} className="signInput" type="text" placeholder="Start reservation" required />
        <input onChange={(e) => setEndDATE(e.target.value)} className="signInput" type="text" placeholder="End reservation" required />
        <input onChange={(e) => setCity(e.target.value)} className="signInput" type="text" placeholder="City" required />
        <button type="submit">Create Reservation</button>
      </form>
    </div>
  );
};

export default Reserve;
