import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createRoomActionCreator } from '../../Redux/Rooms/rooms';

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
    <form action="/" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="photo">
          Photo
          <input
            type="text"
            name="photo"
            id="photo"
            value={room.photo}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            value={room.name}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div>
        <label htmlFor="stars">
          Stars
          <input
            type="number"
            name="stars"
            id="stars"
            value={room.stars}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div>
        <label htmlFor="persons_allowed">
          Persons allowed
          <input
            type="number"
            name="persons_allowed"
            id="persons_allowed"
            value={room.persons_allowed}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div>
        <label htmlFor="description">
          Description
          <textarea
            name="description"
            id="description"
            onChange={handleInputChange}
          />
        </label>
      </div>

      <button type="submit">Create Room</button>
    </form>
  );
};

export default AddRoom;
