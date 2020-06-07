import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://awesome-party-wall.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
