import React from 'react';
import { useSelector } from 'react-redux';
import DeleteButton from '../partials/DeleteRoom';
import './DeleteRoom.css';

const DeleteRoom = () => {
  const rooms = useSelector((store) => store.rooms.rooms);
  return rooms.length > 0 ? (
    <div className="deleteRoomPage">
      {rooms.map((room) => (
        <div key={room.id} className="deleteDiv">
          <img src={room.attributes.photo} alt="Room" className="deleteRoomPicture" />
          <div className="deleteSection">
            <p className="roomName">{room.attributes.name}</p>
            <DeleteButton id={room.id} />
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div> There are no rooms to delete</div>
  );
};

export default DeleteRoom;
