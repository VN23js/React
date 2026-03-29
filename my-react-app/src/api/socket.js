import { io } from 'socket.io-client';
export const socket = io('http://46.173.16.30:3000', {
  withCredentials: true,
});
