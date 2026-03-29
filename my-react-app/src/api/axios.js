import axios from 'axios';

const api = axios.create({
  baseURL: 'https://petuhcase.duckdns.org/api',
  withCredentials: true,
});

export default api;
