import axios from "axios";
import apiURL from "./ApiUrl";

export const login = async (username: string, password: string) => {
  if (username.length < 3 || password.length < 5) {
    return;
  }
  await axios
    .post(`${apiURL}/user/login`, { username, password })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
    });
};

export const register = async (username: string, password: string) => {
  if (username.length < 3 || password.length < 5) {
    return;
  }
  await axios
    .post(`${apiURL}/user/register`, { username, password })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
    });
};

export const getUserFromToken = async () => {
  const token = localStorage.getItem("token");
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
