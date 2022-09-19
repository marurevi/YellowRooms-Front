import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TiSocialFacebook } from 'react-icons/ti';
import { RiTwitterFill } from 'react-icons/ri';
import { SiInstagram } from 'react-icons/si';
import { getRoomsActionCreator } from '../../Redux/Rooms/rooms';

const Rooms = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((store) => store.rooms);
  useEffect(() => {
    dispatch(getRoomsActionCreator());
  }, [dispatch]);
  return (
    <>
      <main>
        <h1>We have the luxuries</h1>
        <h4>Please select your match</h4>
      </main>
      {rooms.map((room) => (
        <NavLink className="link" to={`/Rooms/id=${room.id}`} key={room.id}>
          <article>
            <div>
              <img src={room.photo} alt={room.room_name} />
            </div>
            <h3>{room.room_name}</h3>
            <p>{room.description}</p>
            <section>
              <span>
                <TiSocialFacebook />
              </span>
              <span>
                <RiTwitterFill />
              </span>
              <span>
                <SiInstagram />
              </span>
            </section>
          </article>
        </NavLink>
      ))}
    </>
  );
};

export default Rooms;
