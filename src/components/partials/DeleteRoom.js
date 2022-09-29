import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteRoomActionCreator } from '../../Redux/Rooms/rooms';
import '../DeleteRoom/DeleteRoom.css';

const DeleteRoom = ({ id = null }) => {
  const dispatch = useDispatch();
  const deleteRoom = () => {
    dispatch(deleteRoomActionCreator(id));
  };
  return (
    <button className="deleteRoomBtn" type="button" onClick={deleteRoom}>
      DELETE ROOM
    </button>
  );
};

DeleteRoom.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteRoom;
