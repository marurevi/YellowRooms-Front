import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendPost } from '../../API/api';
import '../Reserve/Reserve.css';

const AllReserves = () => {
  const navigate = useNavigate();
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
    await sendPost('reservations', form)
      .then(() => {
        navigate('/reservations');
      })
      .catch((error) => {
        console.error(error); // eslint-disable-line no-console
      });
  };

  const onChange = (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="reserveRoom">
      <h2 className="reserveRoomName">Reserve Room</h2>
      <form className="selectRoomForm" onSubmit={reserveRoomSubmit}>
        <select className="selectRoomSelect" onChange={onChange} name="room_id" required>
          <option className="selectRoomOption">SELECT ROOM</option>
          {rooms.map((room) => (
            <option className="selectRoomOption" key={room.id} value={room.id}>
              {room.attributes.name}
            </option>
          ))}
        </select>
        <input
          onChange={onChange}
          name="city"
          className="selectCityReserve"
          type="text"
          placeholder="City"
          required
        />
        <label className="labelSelectReserveInput" htmlFor="start_date">
          Start Journey
          <input
            onChange={onChange}
            name="start_date"
            className="selectRoomInput"
            type="date"
            required
          />
        </label>
        <label className="labelSelectReserveInput" id="endLabel" htmlFor="end_date">
          The End
          <input
            onChange={onChange}
            name="end_date"
            className="selectRoomInput"
            type="date"
            required
          />
        </label>
        <button className="bookRoom" type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default AllReserves;
