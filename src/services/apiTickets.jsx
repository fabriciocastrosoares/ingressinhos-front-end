import axios from "axios";
import createConfig from "./createConfig";

const API_URL = import.meta.env.VITE_API_URL;

function buy(body, token) {
  return axios.post(`${API_URL}/tickets/buy`, body, createConfig(token));
}

function getMyTickets(token) {
  return axios.get(`${API_URL}/tickets/my`, createConfig(token));
}

function getByCode(code, token) {
  return axios.get(`${API_URL}/tickets/${code}`, createConfig(token));
}

function validate(body, token) {
  return axios.post(`${API_URL}/tickets/validate`, body, createConfig(token));
}

function getPublicTicket(shareToken) {
  return axios.get(`${API_URL}/tickets/public/${shareToken}`);
}

const apiTickets = {
  buy,
  getMyTickets,
  getByCode,
  validate,
  getPublicTicket,
};

export default apiTickets;
