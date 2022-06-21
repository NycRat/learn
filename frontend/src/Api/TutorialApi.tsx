import axios from "axios";
import apiURL from "./ApiUrl";

export const getTutorialByName = async (name: string) => {
  return axios
    .get(`${apiURL}/tutorial/name/${name}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return null;
    });
};

export const getTutorialById = async (id: string) => {
  return axios
    .get(`${apiURL}/tutorial/id/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return null;
    });
};

export const getTutorials = async () => {
  return axios
    .get(`${apiURL}/tutorial`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return null;
    });
};
