import axios from "axios";
import apiURL from "./ApiUrl";

export const login = async (username: string, password: string) => {
  if (username.length < 3 || password.length < 5) {
    return;
  }
  return axios.post(`${apiURL}/user/login`, { username, password });
};

export const register = async (username: string, password: string) => {
  if (username.length < 3 || password.length < 5) {
    return;
  }
  return axios.post(`${apiURL}/user/register`, { username, password });
};

export const getUserFromToken = async (token: string | null) => {
  if (!token) {
    return null;
  }
  let user: any;
  await axios
    .get(`${apiURL}/user/getUserFromToken`, {
      headers: { Authorization: `${token}` },
    })
    .then((res) => {
      user = res.data;
    });
  return user;
};
