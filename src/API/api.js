import axios from 'axios';

export const baseUrl = 'https://yellow-rooms.herokuapp.com/api/v1/';
const myAxios = () => axios.create({
  baseURL: 'https://yellow-rooms.herokuapp.com/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// user is set by calling this method
export const setCurrentUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

// user is destroyed by calling this method
export const destroyCurrentUser = () => {
  localStorage.removeItem('user');
};

// user is taken by calling this method
export const getCurrentUser = () => JSON.parse(localStorage.getItem('user'));

// custom is to alternate the endpoint
export async function sendGet(custom = '', token) {
  return myAxios()
    .get(custom, { headers: { Authorization: token } })
    .then((response) => response.data);
}

// Custom route must be provided with ID for destroy to find the room
export async function sendDelete(custom, token) {
  return myAxios()
    .delete(custom, { headers: { Authorization: token } })
    .then((response) => response.status);
}

export async function sendPost(custom, data, token = '') {
  return myAxios().post(custom, data, {
    headers: { Authorization: token },
  });
}
