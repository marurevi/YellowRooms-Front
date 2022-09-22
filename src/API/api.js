import axios from "axios";

export const baseUrl = "https://yellow-rooms.herokuapp.com/api/v1/";

// custom is to alternate the endpoint
export async function sendGet(custom = "") {
  return axios.get(baseUrl + custom).then((response) => response.data);
}

// Custom route must be provided with ID for destroy to find the room
export async function sendDelete(custom) {
  return axios.delete(baseUrl + custom).then((response) => response.status);
}

export async function sendPost(custom, data) {
  const response = await axios.post(baseUrl + custom, data, {
    headers: { "Content-Type": "application/json" },
  });
  return response;
}
