import axios from "axios";
export const baseUrl = "http://localhost:3001/rooms";
// get method, take url, if not use default baseURL
export const sendGet = async ({ url = baseUrl } = {}) => {
  return axios.get(url).then((response) => response.data);
};
