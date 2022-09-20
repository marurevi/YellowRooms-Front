import React from 'react';
import { useSelector } from 'react-redux';
import DeleteButton from '../partials/DeleteRoom';

const DeleteRoom = () => {
  const rooms = useSelector((store) => store.rooms);
  return rooms.length > 0 ? (
    <div>
      {rooms.map((room) => (
        <div key={room.id}>
          <p>{room.name}</p>
          <div>
            <DeleteButton name="Delete room" id={room.id} />
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div> There are no rooms to delete</div>
  );
};

export default DeleteRoom;
