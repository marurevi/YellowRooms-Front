import axios from 'axios';

const GET_RESERVATIONS = 'RESERVATIONS';
const listOfReservations = [];
const reservationsURL = 'http://localhost:3001/reservations';

const reservationsReducer = (state = listOfReservations, action) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.payload;
    default:
      return state;
  }
};

export const getReservations = () => (dispatch) => {
  axios.get(reservationsURL).then((response) => {
    const reservations = response.data;
    dispatch({ type: GET_RESERVATIONS, payload: reservations });
  });
};

export default reservationsReducer;
