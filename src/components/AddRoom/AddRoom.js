import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createRoomActionCreator } from '../../Redux/Rooms/rooms';
import './AddRoom.css';

const AddRoom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [room, setRoom] = useState({
    name: '',
    stars: 0,
    persons_allowed: 1,
    photo: '',
    description: '',
    price: 0,
  });

  const handleInputChange = (event) => {
    setRoom((oldState) => ({
      ...oldState,
      [event.target.name]: event.target.value,
    }));
  };

  const changeNavigation = () => {
    navigate('/rooms');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(createRoomActionCreator(room, changeNavigation));
  };

  return (
    <form className="addRoomForm" action="/" onSubmit={handleSubmit}>
      <div className="divInput">
        <label htmlFor="name">
          Insert the name of the room
          <input
            className="addRoomInput"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={room.name}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="divInput">
        <label htmlFor="photo">
          Insert link to the photo (only online links are acceptable)
          <input
            className="addRoomInput"
            type="text"
            name="photo"
            id="photo"
            placeholder="Link"
            value={room.photo}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="divInput">
        <label htmlFor="stars">
          How many Stars the room has?
          <input
            className="addRoomInput"
            type="number"
            name="stars"
            id="stars"
            placeholder="Stars"
            value={room.stars}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="divInput">
        <label htmlFor="persons_allowed">
          Size of the room (Persons allowed)
          <input
            className="addRoomInput"
            type="number"
            name="persons_allowed"
            id="persons_allowed"
            placeholder="Persons"
            value={room.persons_allowed}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="divInput">
        <label htmlFor="description">
          Information about the room
          <textarea
            className="addRoomInput"
            name="description"
            id="description"
            placeholder="Description"
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button className="registerBtn" type="submit">CREATE ROOM</button>
    </form>
  );
};

export default AddRoom;
