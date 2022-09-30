import axios from 'axios';

// user is taken by calling this method
export const getCurrentUser = () => JSON.parse(localStorage.getItem('user'));

export const baseUrl = 'https://yellow-rooms.fly.dev/api/v1/';
let token = getCurrentUser()?.token || '';
const myAxios = () => axios.create({
  baseURL: 'https://yellow-rooms.fly.dev/api/v1/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: token,
  },
});

// user is set in LocalStorage by calling this method
// token is set locally to all requests
export const setCurrentUser = (user) => {
  token = user.token;
  localStorage.setItem('user', JSON.stringify(user));
};

// user is destroyed by calling this method
// token is removed locally from all requests
export const destroyCurrentUser = () => {
  token = '';
  localStorage.removeItem('user');
};

// custom is to alternate the endpoint
export async function sendGet(custom = '') {
  return myAxios()
    .get(custom)
    .then((response) => response.data);
}

// Custom route must be provided with ID for destroy to find the room
export async function sendDelete(custom) {
  return myAxios().delete(custom);
}

export async function sendPost(custom, data) {
  return myAxios().post(custom, data);
}
