import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Rooms.css';
import { getRoomsActionCreator } from '../../Redux/Rooms/rooms';
import RoomList from './RoomList';

const Rooms = () => {
  const dispatch = useDispatch();
  const roomsState = useSelector((store) => store.rooms);
  /* eslint-disable */
  useEffect(() => {
    if (roomsState.pending) {
      dispatch(getRoomsActionCreator());
    }
  }, [dispatch]);
  /* eslint-enable */
  return (
    <>
      <section>
        <h1>We have the luxuries</h1>
        <h4>Please select your match</h4>
        <div className="rooms-container">
          {roomsState.status === 'loading' && <div>Loading...</div>}
          {roomsState.status === 'succeeded' && roomsState.rooms && <RoomList rooms={roomsState.rooms} />}
          {roomsState.status === 'failed' && <div>Failed to load rooms</div>}
        </div>
      </section>
    </>
  );
};

export default Rooms;

// import { TiSocialFacebook } from 'react-icons/ti';
// import { RiTwitterFill } from 'react-icons/ri';
// import { SiInstagram } from 'react-icons/si';
// <h3>{room.room_name}</h3>
// <p>{room.description}</p>

// <div className="card">
//   <div id={room.id}>
//     <img src={room.photo} alt={room.room_name} />
//   </div>
//   <div>
//     <h3>{room.room_name}</h3>
//     <p>{room.description}</p>
//     <section>
//       <span>
//         <TiSocialFacebook />
//       </span>
//       <span>
//         <RiTwitterFill />
//       </span>
//       <span>
//         <SiInstagram />
//       </span>
//     </section>
//   </div>
