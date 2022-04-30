import axios from "axios";
export const local = "http://localhost:3001";
export const deploy = "https://recoleta-api.herokuapp.com";

const api = axios.create({
  baseURL: deploy,
});

export default api;
