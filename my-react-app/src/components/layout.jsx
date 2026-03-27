import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import MobilePanel from './MobilePanel';
import LeftPanel from './LeftPanel';
import { socket } from '../api/socket';
import { useDispatch } from 'react-redux';
import { addNewItemLenta } from '../redux/caseSlice';

export default function Layout() {
  const dispatch = useDispatch();
  useEffect(() => {
    socket.on('new_drop', (DataWinIndex) => {
      dispatch(addNewItemLenta(DataWinIndex));
    });
    return () => {
      socket.off('new_drop');
    };
  }, []);
  return (
    <React.Fragment>
      <Navbar />

      <div className='pt-[100px] pb-[60px] min-h-screen  '>
        <div className='hidden min-[1500px]:block w-[190px]  left-1 top-12   ml-2 '>
          <div className='bg-[#171512] overflow-hidden  top-[120px] fixed  rounded-[24px]  h-[calc(99vh-130px)]  p-4 custom-scroll'>
            <LeftPanel></LeftPanel>
          </div>
        </div>
        <div className='w-full max-w-[1500px] mx-auto min-[1500px]:pl-[200px] '>
          <Outlet />
        </div>
      </div>
      <div className='w-full max-w-[1500px]  mx-auto min-[1500px]:pl-[200px] '>
        <footer className='bg-amber-9s00 w-full  px-2.5 h-[100px]'>
          <div className='lg:pb-0.5 pb-20 justify-center flex-col mx-auto flex '>
            <div className='grid grid-cols-1 min-[1500px]:grid-cols-2 gap-6 w-full'>
              <div className='before-loop'>
                <div className='text-content flex h-[160px] items-center overflow-hidden  bg-[#2d2720] rounded-3xl p-3 px-[24px]'>
                  <div className='flex-1 seo-bg'>
                    <h1 className='mb-1.5 text-h z-20 relative  font-geo text-[#ffc23d]'>
                      Ищешь лучшие кейсы CS2?
                    </h1>
                    <p className='text-[14px] relative z-20 font-geo seo-text'>
                      Кейсы кс 2 от Petuh’a - твой идеальный вариант!
                      Проверенный дроп, честность и самый высокий во вселенной
                      шанс поймать редчайшие кс2 скины!
                    </p>
                  </div>
                </div>
              </div>
              <div className='before-loop2'>
                <div className='text-content flex h-[160px] items-center overflow-hidden  bg-[#2d2720] rounded-3xl p-3 px-[24px]'>
                  <div className='flex-1 seo-bg'>
                    <h1 className='mb-1.5 text-h z-20 relative  font-geo text-[#ffc23d]'>
                      Кейсы CS2 от Petuh’a это:
                    </h1>
                    <div className='z-20 text-[14px] relative z-20 font-geo seo-text'>
                      <p>Быстрое пополнение без комиссий!</p>
                      <p>Гарантия лучших шансов на дроп!</p>
                      <p>Быстрый вывод в Steam без задержек!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <MobilePanel />
    </React.Fragment>
  );
}
