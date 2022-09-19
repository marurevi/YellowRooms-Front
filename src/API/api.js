import axios from "axios";
export const baseUrl = "http://localhost:3001/";

// custom is to alternate the endpoint
export const sendGet = async (custom = "") => {
  console.log(baseUrl + custom);
  return axios.get(baseUrl + custom).then((response) => response.data);
};

// TODO: send delete,
export const sendDelete = async ({ url = baseUrl, id = "" } = {}) => {
  return axios.delete(url + id).then((response) => {
    console.log(response.status);
  });
};
