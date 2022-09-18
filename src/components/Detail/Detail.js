import React from "react";
import { useSelector } from "react-redux";

const Detail = () => {
  const room = useSelector((state) => state.rooms);
  return <div>Detail</div>;
};

export default Detail;
