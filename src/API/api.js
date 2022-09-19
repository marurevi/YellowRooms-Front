import axios from "axios";
export const baseUrl = "http://localhost:3001/";

// custom is to alternate the endpoint
export const sendGet = async (custom = "") => {
  console.log(baseUrl + custom);
  return axios.get(baseUrl + custom).then((response) => response.data);
};

// TODO: send delete,
export const sendDelete = async (custom) => {
  return axios.delete(baseUrl + custom).then((response) => {
    console.log(response.status);
    return response.status;
  });
};
