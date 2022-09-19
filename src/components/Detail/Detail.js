import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
  let { id } = useParams();
  id = id?.split('=')[1];
  const room = useSelector(
    (state) => state.rooms.filter((room) => room.id === Number(id))[0],
  );
  return room ? (
    <div>
      <img src={room.photo} alt="Room" />
      <aside>
        <div>
          <span>Stars</span>
          <span>{room.stars}</span>
        </div>
        <div>
          <span>Room name</span>
          <span>{room.room_name}</span>
        </div>
        <div>
          <span>max number of guest</span>
          <span>{room.person_allowed}</span>
        </div>
        <div>
          <span>price</span>
          <span>{room.price}</span>
        </div>
      </aside>
    </div>
  ) : (
    // if no room is found with the given id
    <div>No room found</div>
  );
};

export default Detail;
