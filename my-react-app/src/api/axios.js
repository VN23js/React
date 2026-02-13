import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nmmwl94l-3000.euw.devtunnels.ms/api',
  withCredentials: true,
});

export default api;
