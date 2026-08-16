import axios from "axios";
import createConfig from "./createConfig";

const API_URL = import.meta.env.VITE_API_URL;

function signin(body) {
  return axios.post(`${API_URL}/auth/sign-in`, body);
}

function signup(body) {
  return axios.post(`${API_URL}/auth/sign-up`, body);
}

function logout(token) {
  return axios.post(`${API_URL}/auth/logout`, {}, createConfig(token));
}

const apiAuth = {
  signin,
  signup,
  logout,
};

export default apiAuth;
