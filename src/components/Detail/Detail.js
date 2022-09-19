import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Detail = () => {
  let { id } = useParams();
  id = id?.split("=")[1];
  console.log(`param is ${id}`);
  const room = useSelector(
    (state) => state.rooms.filter((room) => room.id == id)[0]
  );
  return room ? <div>Detail</div> : <div>No room found</div>;
};

export default Detail;
