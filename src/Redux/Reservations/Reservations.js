import { sendGet, sendDelete } from '../../API/api';

const GET_RESERVATIONS = 'reservations/reservations/SET_RESERVATIONS';
const DELETE_RESERVATION = 'reservations/reservations/DELETE_RESERVATION';
export const getReservations = () => async (dispatch) => {
  const reservations = await sendGet('reservations').catch((error) => {
    console.error(error);
  });
  dispatch({ type: GET_RESERVATIONS, payload: reservations.data });
};

export const deleteReservation = (id) => async (dispatch) => {
  sendDelete(`reservations/${id}`)
    .then(() => {
      dispatch({ type: DELETE_RESERVATION, payload: id });
    })
    .catch((error) => {
      console.log(error);
    });
};

const reservationsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.payload;
    case DELETE_RESERVATION:
      return [...state].filter(
        (reservation) => reservation.id !== action.payload,
      );
    default:
      return state;
  }
};

export default reservationsReducer;
