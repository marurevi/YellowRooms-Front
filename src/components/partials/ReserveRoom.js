import React from "react";
import { useNavigate } from "react-router-dom";
export default function ReserveRoom({ roomId }) {
  const navigator = useNavigate();
  const reserveRoom = () => navigator(`/Reserve/room_id=${roomId}`);
  return (
    <button type="button" onClick={reserveRoom}>
      Reserve Room
    </button>
  );
}
