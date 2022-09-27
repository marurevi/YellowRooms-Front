import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { sendPost } from '../../API/api';

const AllReserves = () => {
  const rooms = useSelector((state) => state.rooms.rooms);

  const userId = useSelector((state) => state.user.id);
  const [form, setForm] = useState({
    user_id: userId,
    room_id: 0,
    start_date: '',
    end_date: '',
    city: '',
  });

  const reserveRoomSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    await sendPost('reservations', form).catch((error) => {
      console.error(error);
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
        <select onChange={onChange} name="room_id" required>
          <option>SELECT OPTION</option>
          {rooms.map((room) => (
            <option key={room.id} value={room.id}>
              {room.name}
            </option>
          ))}
        </select>
        <input
          onChange={onChange}
          name="start_date"
          className="signInput"
          type="date"
          placeholder="Start reservation"
          required
        />
        <input
          onChange={onChange}
          name="end_date"
          className="signInput"
          type="date"
          placeholder="End reservation"
          required
        />
        <input
          onChange={onChange}
          name="city"
          className="signInput"
          type="text"
          placeholder="City"
          required
        />
        <button type="submit">Create Reservation</button>
      </form>
    </div>
  );
};

export default AllReserves;
