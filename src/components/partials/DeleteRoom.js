import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteRoomActionCreator } from '../../Redux/Rooms/rooms';

const DeleteRoom = ({ id = null }) => {
  const dispatch = useDispatch();
  const deleteRoom = () => {
    dispatch(deleteRoomActionCreator(id));
  };
  return (
    <button type="button" onClick={deleteRoom}>
      Delete room
    </button>
  );
};

DeleteRoom.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteRoom;
