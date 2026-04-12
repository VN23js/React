import type { AppDispatch } from '../redux/store.js';
import { socketTs } from '../api/socketTs.js';
import { UsersOnline } from '../redux/testSlice.js';
export const initSocketListeners = (dispatch: AppDispatch) => {
  socketTs.off('users_online');
  socketTs.on('users_online', (usersOnline: number) => {
    console.log(usersOnline, 'Online Users');
    dispatch(UsersOnline(usersOnline));
  });
  socketTs.emit('get_users_online');
};
