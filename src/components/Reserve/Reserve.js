import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Reserve = () => {
  const reservationsURL = 'http://localhost:3001/reservations';
  const rooms = useSelector((state) => state.rooms);
  const [form, setForm] = useState({
    user_id: 0,
    room_id: 0,
    firstName: '',
    start_date: '',
    end_date: '',
    city: '',
  });

  const reserveRoomSubmit = async (e) => {
    e.preventDefault();
    axios.post(reservationsURL, {
      user_id: parseInt(form.user_id, 10),
      room_id: parseInt(form.room_id, 10),
      start_date: form.start_date,
      end_date: form.end_date,
      city: form.city,
    })
      .then((response) => {
        if (response.status === 201) {
          window.location.href = '/Reservations';
        }
      });
  };

  const onChange = (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <h2>Reserve Room</h2>
      <form onSubmit={reserveRoomSubmit}>
        <input onChange={onChange} name="user_id" className="signInput" type="number" placeholder="User" required />
        <select onChange={onChange} name="room_id" required>
          <option>SELECT OPTION</option>
          {rooms.map((room) => (
            <option key={room.id} value={room.id}>{room.name}</option>
          ))}
        </select>
        <input onChange={onChange} name="start_date" className="signInput" type="text" placeholder="Start reservation" required />
        <input onChange={onChange} name="end_date" className="signInput" type="text" placeholder="End reservation" required />
        <input onChange={onChange} name="city" className="signInput" type="text" placeholder="City" required />
        <button disabled={form.room_id === 0 || form.room_id === 'SELECT OPTION'} type="submit">Create Reservation</button>
      </form>
    </div>
  );
};

export default Reserve;
