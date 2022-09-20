import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DeleteRoom from "../partials/DeleteRoom";

const Detail = () => {
  let { id } = useParams();
  id = id?.split("=")[1];
  const room = useSelector(
    (state) => state.rooms.filter((room) => room.id === Number(id))[0]
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
          <span>{room.name}</span>
        </div>
        <div>
          <span>max number of guest</span>
          <span>{room.persons_allowed}</span>
        </div>
        <div>
          <span>price</span>
          <span>{room.price}</span>
        </div>
        <div>
          <span>description</span>
          <span>{room.description}</span>
        </div>
        <div>
          <DeleteRoom name="Delete room" id={room.id} />
        </div>
      </aside>
    </div>
  ) : (
    // if no room is found with the given id
    <div>No room found</div>
  );
};

export default Detail;
