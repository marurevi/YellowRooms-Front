import React from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { sendDelete } from "../../API/api";
const DeleteRoom = ({ id = null, name = "Delete Reservation" }) => {
  const navigate = useNavigate();
  // const token = useSelector((state) => state.user.token);
  const deleteRoom = (e) => {
    e.preventDefault();
    sendDelete(`reservations/${id}`).catch((error) => {
      console.log(error);
    });
    navigate("/reservations");
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
