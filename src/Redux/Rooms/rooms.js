import { sendGet } from "../../API/api";
const GET_ROOMS = "details/rooms/GET_ROOMS";
// const DELETE_ROOM = "details/rooms/DELETE_ROOM";
export const getRoomsActionCreator = () => async (dispatch) => {
  const rooms = await sendGet("this is anothereeeeee u  u  rlr");
  dispatch({ type: GET_ROOMS, payload: rooms });
};

const roomsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROOMS:
      return action.payload;
    default:
      return state;
  }
};

export default roomsReducer;
