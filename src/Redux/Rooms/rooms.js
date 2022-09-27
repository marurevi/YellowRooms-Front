import { sendGet, sendDelete, sendPost } from '../../API/api';

const GET_ROOMS_STARTED = 'details/rooms/GET_ROOMS_STARTED';
const GET_ROOMS_SUCCEEDED = 'details/rooms/GET_ROOMS_SUCCEEDED';
const GET_ROOMS_FAILED = 'details/rooms/GET_ROOMS_FAILED';

const DELETE_ROOM = 'details/rooms/DELETE_ROOM';
const CREATE_ROOM = 'details/rooms/CREATE_ROOM';

export const getRoomsActionCreator = () => async (dispatch) => {
  dispatch({ type: GET_ROOMS_STARTED });
  try {
    const rooms = await sendGet('rooms');
    dispatch({
      type: GET_ROOMS_SUCCEEDED,
      payload: [...rooms.data],
    });
  } catch (error) {
    dispatch({ type: GET_ROOMS_FAILED, payload: error });
  }
};

// REVIEW: delete method
// NOTE: his method is not tested yet
export const deleteRoomActionCreator = (id) => async (dispatch) => {
  await sendDelete(`rooms/${id}`);
  dispatch({ type: DELETE_ROOM, payload: id });
};

export const createRoomActionCreator = (room, navigate) => async (dispatch) => {
  try {
    const response = await sendPost('rooms', room);
    dispatch({
      type: CREATE_ROOM,
      payload: response.data.data,
    });
    navigate();
  } catch (error) {
    console.error('Error creating the room', error);
  }
};

const initialState = {
  pending: true,
  rooms: [],
  status: 'idle',
  errors: null,
};

const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROOMS_STARTED:
      return { ...state, status: 'loading', errors: null };
    case GET_ROOMS_SUCCEEDED:
      return {
        ...state,
        rooms: action.payload,
        pending: false,
        status: 'succeeded',
      };
    case GET_ROOMS_FAILED:
      return { ...state, errors: action.payload, status: 'failed' };
    case DELETE_ROOM: {
      const filteredRooms = state.rooms.filter(
        (room) => room.id !== action.payload,
      );
      return { ...state, rooms: filteredRooms };
    }
    case CREATE_ROOM:
      return { ...state, pending: true };
    default:
      return state;
  }
};

export default roomsReducer;
