import { io } from 'socket.io-client';
export const socket = io('https://nmmwl94l-3000.euw.devtunnels.ms', {
  withCredentials: true,
});
