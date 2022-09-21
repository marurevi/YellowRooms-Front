import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Reserve = () => {
  let { room_id: roomId } = useParams();
  roomId = roomId?.split('=')[1];
  const room = useSelector(
    (state) => state.rooms.filter((room) => room.id === Number(roomId))[0],
  );
  const reservationsURL = 'http://localhost:3001/reservations';
  const [form, setForm] = useState({
    user_id: 0,
    firstName: '',
    start_date: '',
    end_date: '',
    city: '',
  });

  const reserveRoomSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(reservationsURL, {
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

  return room ? (
    <div>
      <h2>Reserve Room</h2>
      <form onSubmit={reserveRoomSubmit}>
        <input
          onChange={onChange}
          name="user_id"
          className="signInput"
          type="number"
          placeholder="User"
          required
        />
        <input type="text" name="room_id" disabled value={room.name} />
        <input
          onChange={onChange}
          name="start_date"
          className="signInput"
          type="text"
          placeholder="Start reservation"
          required
        />
        <input
          onChange={onChange}
          name="end_date"
          className="signInput"
          type="text"
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
        <button
          disabled={form.room_id === 0 || form.room_id === 'SELECT OPTION'}
          type="submit"
        >
          Create Reservation
        </button>
      </form>
    </div>
  ) : (
    <div> No room is set to reserve</div>
  );
};

export default Reserve;
