import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { MdOutlineHotel } from 'react-icons/md';
import { BsArrowRightCircle } from 'react-icons/bs';
import './Detail.css';

const Detail = () => {
  const navigator = useNavigate();
  const { id } = useParams();

  const room = useSelector((state) => state.rooms.rooms.find((room) => room.id === id));

  const { attributes } = room;
  return room ? (
    <div className="room">
      <img src={attributes.photo} alt="Room" className="roomPicture" />
      <aside className="roomDetails">
        <div className="roomName">
          {attributes.name}
        </div>
        <div className="roomStars">
          <span>Stars</span>
          <span>{attributes.stars}</span>
        </div>
        <div className="roomGuests">
          <span>Ideal for </span>
          <span>{attributes.persons_allowed}</span>
          <span> people</span>
        </div>
        <div className="roomDescription">
          <span>{attributes.description}</span>
        </div>
        <div className="roomPrice">
          <span>Price:</span>
          <span>
            $
            {' '}
            {attributes.price}
          </span>
        </div>
        <div className="roomButton">
          <button
            type="button"
            className="reserveBtn"
            onClick={() => navigator(`/Reserve/${room.id}`)}
          >
            <IconContext.Provider
              value={{ size: '24px' }}
            >
              <MdOutlineHotel />
            </IconContext.Provider>
            Reserve Room
            <IconContext.Provider
              value={{ size: '24px' }}
            >
              <BsArrowRightCircle />
            </IconContext.Provider>
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
