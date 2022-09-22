import axios from 'axios';

export const baseUrl = 'https://yellow-rooms.herokuapp.com/api/v1/';

// custom is to alternate the endpoint
export async function sendGet(custom = '') {
  return axios
    .get(baseUrl + custom)
    .then((response) => response.data);
}

// Custom route must be provided with ID for destroy to find the room
export async function sendDelete(custom) {
  return axios
    .delete(baseUrl + custom)
    .then((response) => response.status);
}

export async function sendPost(custom, data) {
  const stringUser = JSON.stringify(data);
  console.log(stringUser);
  return fetch(
    `https://cors-anywhere.herokuapp.com/${baseUrl}${custom}`,
    {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: stringUser,
    },
  ).catch((error) => console.log(error));
  // return axios.post(baseUrl + custom, {}).then((response) => response);
}
