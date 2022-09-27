import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { MdOutlineHotel } from 'react-icons/md';
import { BsArrowRightCircle } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import './Detail.css';

const Detail = () => {
  const navigator = useNavigate();
  const { id } = useParams();

  const room = useSelector((state) => state.rooms.rooms.find((room) => room.id === id));

  const { attributes } = room;
  return room ? (
    <div>
      <div className="roomName1">
        {attributes.name}
      </div>
      <div className="room">
        <img src={attributes.photo} alt="Room" className="roomPicture" />
        <aside className="roomDetails">
          <div className="roomName2">
            {attributes.name}
          </div>
          <div className="roomStars">
            <ul className="stars">
              {(() => {
                const rows = [];
                for (let i = 0; i < attributes.stars; i += 1) {
                  rows.push(<AiFillStar color="#ffde59" size="32px" className="iconBtn" key={i} />);
                }
                return rows;
              })()}
            </ul>
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
                value={{ size: '24px', className: 'iconBtn' }}
              >
                <MdOutlineHotel />
              </IconContext.Provider>
              Reserve Room
              <IconContext.Provider
                value={{ size: '24px', className: 'iconBtn' }}
              >
                <BsArrowRightCircle />
              </IconContext.Provider>
            </button>
          </div>
        </aside>
      </div>
    </div>
  ) : (
    // if no room is found with the given id
    <div>No room found</div>
  );
};

export default Detail;
