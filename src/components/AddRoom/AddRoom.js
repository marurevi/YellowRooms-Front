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

  const placeholders = {
    name: 'Room Name',
    stars: 'Room Stars',
    persons_allowed: 'Persons Allowed',
    photo: 'Photo URL',
    price: 'Price',
    description: 'Room Description',
  };

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
      <h1 className="addRoomTitle">ADD NEW ROOM</h1>
      {
        Object.entries(placeholders).map((key) => {
          const property = key[0];
          const value = key[1];
          return (
            <div key={value} className="divInput">
              <label className="labelInput" htmlFor={key}>
                <input
                  className="addRoomInput"
                  type="text"
                  name={property}
                  id={property}
                  placeholder={value.toUpperCase()}
                  value={room.property}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          );
        })
      }
      <button className="createRoomBtn" type="submit">CREATE ROOM</button>
    </form>
  );
};

export default AddRoom;
