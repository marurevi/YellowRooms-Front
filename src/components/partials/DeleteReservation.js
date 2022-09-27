import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteReservation } from '../../Redux/Reservations/Reservations';

const DeleteRoom = ({ id = null, name = 'Delete Reservation' }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteRoom = (e) => {
    e.preventDefault();
    dispatch(deleteReservation(id));
    navigate('/reservations');
  };
  return (
    <button type="button" onClick={deleteRoom}>
      {name}
    </button>
  );
};

DeleteRoom.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default DeleteRoom;
