import axios from 'axios';

const api = axios.create({
  baseURL: 'http://46.173.16.30:3000/api',
  withCredentials: true,
});

export default api;
