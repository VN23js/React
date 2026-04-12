import { useEffect } from 'react';
import { initSocketListeners } from '../hooks/socketListeners.js';
import type { AppDispatch, RootState } from '../redux/store.js';
import { socketTs } from '../api/socketTs.js';
import { useDispatch, useSelector } from 'react-redux';
export default function OnlineUsers() {
  const usersOnaline = useSelector(
    (state: RootState) => state.caseTestTs.usersOnline
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    initSocketListeners(dispatch);
    return () => {
      socketTs.off('users_online');
    };
  }, []);
  return (
    <div className='w-full mb-1  flex '>
      <div className='bg-[#2c2a24] min-w-35 rounded-t-[14px] rounded-b-lg flex  items-center gap-1 col w-full p-3'>
        <span className=' relative flex items-center justify-center h-2.5 w-2.5'>
          <span className='bg-green-400 opacity-75 w-full animate-ping absolute inline-flex rounded-full h-full'></span>
          <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
        </span>
        <div className='text-[12px] text-[#c3ff55] font-semibold leading-2.5 font-geo'>
          {usersOnaline ?? 0}
        </div>
        <span className='text-[10px] text-[#c3ff55b3] font-geo leading-2.5 max-w-12.5'>
          Петухов онлайн
        </span>
      </div>
    </div>
  );
}
