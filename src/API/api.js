import axios from 'axios';

export const baseUrl = 'https://yellow-rooms.herokuapp.com/api/v1/';
let token = '';
const myAxios = () => axios.create({
  baseURL: 'https://yellow-rooms.herokuapp.com/api/v1/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: token,
  },
});

// token is set by calling this method
export const setToken = (newToken) => {
  token = newToken;
  localStorage.setItem('token', token);
};

// token is destroyed by calling this method
export const DestroyToken = () => {
  localStorage.removeItem('token');
};

// custom is to alternate the endpoint
export async function sendGet(custom = '') {
  return myAxios()
    .get(custom)
    .then((response) => response.data);
}

// Custom route must be provided with ID for destroy to find the room
export async function sendDelete(custom) {
  return myAxios()
    .delete(custom)
    .then((response) => response.status);
}

export async function sendPost(custom, data) {
  return myAxios().post(custom, data);
}
