import axios from 'axios';

const apiTs = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
});

export default apiTs;
