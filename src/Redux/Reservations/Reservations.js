import { sendGet } from "../../API/api";

const GET_RESERVATIONS = "reservations/reservations/SET_RESERVATIONS";
export const getReservations = () => async (dispatch, getState) => {
  const { token } = getState().user;
  const reservations = await sendGet("reservations", token).catch((error) => {
    console.error(error);
  });
  console.log(reservations.data);
  dispatch({ type: GET_RESERVATIONS, payload: reservations.data });
};

const reservationsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.payload;
    default:
      return state;
  }
};

export default reservationsReducer;
