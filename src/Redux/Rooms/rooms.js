import axios from "axios";

const GET_ROOMS = "details/rooms/GET_ROOMS";

export const getRoomsActionCreator = () => (dispatch) => {
  axios.get("http://localhost:3001/rooms").then((response) => {
    const rooms = response.data;
    dispatch({ type: GET_ROOMS, payload: rooms });
  });
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
