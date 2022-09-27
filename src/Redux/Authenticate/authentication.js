import {
  sendPost,
  setCurrentUser,
  getCurrentUser,
} from '../../API/api';

const REGISTER_USER = 'Authentication/authentication/REGISTER_USER';
const LOAD_EXISTING_USER = 'Authentication/authentication/LOAD_EXISTING_USER';

export const registerUser = (data, navigation) => (dispatch) => {
  sendPost('register', data).then((response) => {
    const token = response.headers.authorization;
    const { user } = response.data.data;
    if (token) {
      dispatch({ type: REGISTER_USER, payload: { ...user, token } });
      setCurrentUser({ ...user, token });
      navigation();
    }
  });
};

export const loginUser = (data, navigation) => (dispatch) => {
  sendPost('login', data).then((response) => {
    const token = response.headers.authorization;
    const { user } = response.data.data;
    if (token) {
      dispatch({ type: REGISTER_USER, payload: { ...user, token } });
      setCurrentUser({ ...user, token });
      navigation();
    }
  });
};

export const loadUser = () => {
  const currentUser = getCurrentUser();
  return { type: LOAD_EXISTING_USER, payload: currentUser };
};

const handleUser = (state = null, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return action.payload;
    case LOAD_EXISTING_USER:
      return action.payload;
    default:
      return state;
  }
};

export default handleUser;
