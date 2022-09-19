import { sendGet } from "../../API/api";
const GET_ROOMS = "details/rooms/GET_ROOMS";
const DELETE_ROOM = "details/rooms/DELETE_ROOM";
export const getRoomsActionCreator = () => async (dispatch) => {
  const rooms = await sendGet("rooms");
  dispatch({ type: GET_ROOMS, payload: rooms });
};

// REVIEW: delete method
// NOTE: his method is not tested yet
export const deleteRoomActionCreator = (id) => async (dispatch) => {
  const status = await sendDelete(`rooms/${id}`);
  dispatch({ type: DELETE_ROOM, payload: { status, id } });
};

const roomsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROOMS:
      return action.payload;
    case DELETE_ROOM:
      return action.payload.status
        ? [...state].filter((room) => room.id !== action.payload.id)
        : state;
    default:
      return state;
  }
};

export default roomsReducer;
