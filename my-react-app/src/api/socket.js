import { io } from 'socket.io-client';
export const socket = io('https://petuhcase.duckdns.org', {
  withCredentials: true,
});
