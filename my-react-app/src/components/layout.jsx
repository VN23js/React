import React, { useEffect } from 'react';
import Navbar from './navbar';
import { Outlet } from 'react-router-dom';
import MobilePanel from './MobilePanel';
import LeftPanel from './LeftPanel';
import { useDispatch, useSelector } from 'react-redux';
import { addNewItemLenta } from '../redux/caseSlice';
import FooterPetuh from './Footer';
import OnlineUsers from './OnlineUsers';
import { initSocketListeners } from '../hooks/socketListeners';
import { socketTs } from '../api/socketTs';

export default function Layout() {
  const usersOnaline = useSelector((state) => state.caseTestTs.usersOnline);
  const dispatch = useDispatch();
  useEffect(() => {
    initSocketListeners(dispatch);
    socketTs.on('new_drop', (DataWinIndex) => {
      dispatch(addNewItemLenta(DataWinIndex));
    });

    return () => {
      socketTs.off('new_drop');
    };
  }, []);
  return (
    <React.Fragment>
      <Navbar />

      <div className='pt-[100px] pb-[60px] min-h-screen  '>
        <div className='hidden min-[1500px]:block w-[190px]  left-1 top-12   ml-2 '>
          <div
            className='bg-[#171512] overflow-hidden
           top-[110px] fixed  rounded-[24px]  h-[calc(99vh-125px)]   p-4 custom-scroll'
          >
            <OnlineUsers></OnlineUsers>
            <LeftPanel></LeftPanel>
          </div>
        </div>
        <div className='w-full max-w-[1500px] mx-auto min-[1500px]:pl-[200px] '>
          <Outlet />
        </div>
      </div>
      <FooterPetuh></FooterPetuh>
      <MobilePanel />
    </React.Fragment>
  );
}
