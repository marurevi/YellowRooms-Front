import React from "react";
import { useDispatch } from "react-redux";
import { deleteRoomActionCreator } from "../../Redux/Rooms/rooms";
export default function DeleteRoom(props) {
  const dispatch = useDispatch();
  const { id, name, type } = props;
  const deleteRoom = (e) => {
    e.preventDefault();
    dispatch(deleteRoomActionCreator(id));
    <Redirect to="/rooms" />;
    console.log("deleting room");
  };
  return type == "button" ? (
    <button type="button" onClick={deleteRoom}>
      {name}
    </button>
  ) : (
    <a href="#" onClick={deleteRoom}>
      {name}
    </a>
  );
}