import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { deleteRoomActionCreator } from "../../Redux/Rooms/rooms";

const DeleteRoom = ({ id = null, name = "Delete Room" }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteRoom = (e) => {
    e.preventDefault();
    dispatch(deleteRoomActionCreator(id));
    navigate("/DeleteRoom");
  };
  return (
    <button type="button" onClick={deleteRoom}>
      {name}
    </button>
  );
};

DeleteRoom.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default DeleteRoom;
