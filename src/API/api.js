import axios from "axios";
export const baseUrl = "https://yellow-rooms.herokuapp.com/api/v1/";
let token = "";
const myAxios = () =>
  axios.create({
    baseURL: "https://yellow-rooms.herokuapp.com/api/v1/",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

export const setToken = (newToken) => {
  console.log(newToken);
  token = newToken;
  localStorage.setItem("token", token);
};
export const DestroyToken = (token) => {
  token = "";
  localStorage.removeItem("token");
};
// custom is to alternate the endpoint
export async function sendGet(custom = "") {
  return myAxios()
    .get(custom)
    .then((response) => response.data);
}

// Custom route must be provided with ID for destroy to find the room
export async function sendDelete(custom) {
  return myAxios()
    .delete(baseUrl + custom)
    .then((response) => response.status);
}

export async function sendPost(custom, data) {
  return myAxios().post(baseUrl + custom, data, {
    headers: { "Content-Type": "application/json" },
  });
}
