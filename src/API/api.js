import axios from 'axios';

export const baseUrl = 'http://localhost:3001/';

// custom is to alternate the endpoint
export async function sendGet(custom = '') {
  return axios.get(baseUrl + custom).then((response) => response.data);
}

// Custom route must be provided with ID for destroy to find the room
export async function sendDelete(custom) {
  return axios.delete(baseUrl + custom).then((response) => response.status);
}
