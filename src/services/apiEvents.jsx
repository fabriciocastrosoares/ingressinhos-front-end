import axios from "axios";
import createConfig from "./createConfig";

const API_URL = import.meta.env.VITE_API_URL;

function getEvents() {
  return axios.get(`${API_URL}/events`);
}

function getEventById(id) {
  return axios.get(`${API_URL}/events/${id}`);
}

function getMyEvents(token) {
  return axios.get(`${API_URL}/events/my`, createConfig(token));
}

function createEvent(body, token) {
  return axios.post(`${API_URL}/events`, body, createConfig(token));
}

function reserveEvent(id, body, token) {
  return axios.post(
    `${API_URL}/events/${id}/reserve`,
    body,
    createConfig(token),
  );
}

const apiEvents = {
  getEvents,
  getEventById,
  getMyEvents,
  createEvent,
  reserveEvent,
};

export default apiEvents;
