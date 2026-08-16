import axios from "axios";
import createConfig from "./createConfig";

const API_URL = import.meta.env.VITE_API_URL;

function getAll() {
  return axios.get(`${API_URL}/events`);
}

function getById(id) {
  return axios.get(`${API_URL}/events/${id}`);
}

function create(body, token) {
  return axios.post(`${API_URL}/events`, body, createConfig(token));
}

function reserve(id, body, token) {
  return axios.post(
    `${API_URL}/events/${id}/reserve`,
    body,
    createConfig(token),
  );
}

const apiEvents = {
  getAll,
  getById,
  create,
  reserve,
};

export default apiEvents;
