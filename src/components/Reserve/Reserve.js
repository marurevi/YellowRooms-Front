import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { sendPost } from '../../API/api';
import './Reserve.css';

const Reserve = () => {
  const { room_id: roomId } = useParams();
  const room = useSelector((state) => state.rooms.rooms.find((room) => room.id === roomId));
  const userId = useSelector((state) => state.user.id);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    user_id: userId,
    room_id: roomId,
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
        console.error(error);
      });
  };

  const onChange = (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  return room ? (
    <div className="reserveRoom">
      <p className="reserveRoomName">{room.attributes.name}</p>
      <p className="reserveRoomDescription">{room.attributes.description}</p>
      <form className="reserveRoomForm" onSubmit={reserveRoomSubmit}>
        <label htmlFor="start_date">
          Start Your Journey
          <input
            onChange={onChange}
            name="start_date"
            className="signInput"
            id="start_date"
            type="date"
            required
          />
        </label>
        <label htmlFor="end_date">
          The End
          <input
            onChange={onChange}
            name="end_date"
            id="end_date"
            className="signInput"
            type="date"
            required
          />
        </label>
        <input
          onChange={onChange}
          name="city"
          className="selectCityReserve"
          type="text"
          placeholder="City"
          required
        />
        <button className="bookRoom" type="submit">Book Now</button>
      </form>
    </div>
  ) : (
    <div> No room is set to reserve</div>
  );
};

export default Reserve;
