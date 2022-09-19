import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRoomsActionCreator } from "../../Redux/Rooms/rooms";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterFill } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";
const Rooms = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((store) => store.rooms);
  useEffect(() => {
    dispatch(getRoomsActionCreator());
  }, []);
  const value = `/Rooms/id=${1}`;
  return (
    <>
      <main>
        <h1>We have the luxuries</h1>
        <h4>Please select your match</h4>
      </main>
      {rooms.map((room) => {
        return (
          <article key={room.id}>
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
        );
      })}
      <h2>Rooms</h2>
      <NavLink className="link" to={value}>
        Detail
      </NavLink>
    </>
  );
};

export default Rooms;
