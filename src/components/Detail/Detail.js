import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const Detail = () => {
  const navigator = useNavigate();
  const { id } = useParams();

  const room = useSelector((state) => state.rooms.rooms.find((room) => room.id === id));

  const { attributes } = room;
  return room ? (
    <div>
      <img src={attributes.photo} alt="Room" />
      <aside>
        <div>
          <span>Stars</span>
          <span>{attributes.stars}</span>
        </div>
        <div>
          <span>Room name</span>
          <span>{attributes.name}</span>
        </div>
        <div>
          <span>max number of guest</span>
          <span>{attributes.persons_allowed}</span>
        </div>
        <div>
          <span>price</span>
          <span>{attributes.price}</span>
        </div>
        <div>
          <span>description</span>
          <span>{attributes.description}</span>
        </div>
        <div>
          <button
            type="button"
            onClick={() => navigator(`/Reserve/${room.id}`)}
          >
            Reserve Room
          </button>
        </div>
      </aside>
    </div>
  ) : (
    // if no room is found with the given id
    <div>No room found</div>
  );
};

export default Detail;
