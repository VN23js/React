import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { AppDispatch, RootState } from '../redux/store.js';
import { getAllSessionFetch } from '../redux/ProfileSlice.js';

export default function LeftPanel() {
  const DataWinIndex = useSelector(
    (state: RootState) => state.caseTestTs.DataWinIndex,
    shallowEqual
  );

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getAllSessionFetch());
  }, []);
  return (
    <div>
      {DataWinIndex.map((item, i) => (
        <div
          key={`${item._id}-${i}`}
          className='items-case !max-w-[154px] cursor-pointer group !h-[165px] mb-5 flex-col flex justify-center'
          style={
            {
              background: item.winItem.color,
              '--glow-color': item.winItem.glowColor,
              '--glow-rgb': item.winItem.glowRgb,
            } as React.CSSProperties
          }
        >
          <div className='item_title relative  w-[120px]  h-[125px]  truncate text-[13px]'>
            <div
              className=' w-full h-full bg-no-repeat bg-center  opacity-100 group-hover:opacity-0
  -translate-y-2 group-hover:translate-y-0
  transition-all duration-300 ease-out bg-contain'
              style={{
                backgroundImage: `url('/icon-${item.winItem.rarity}.png')`,
                backgroundSize: '70%',
              }}
            ></div>
            <img
              src={item.winItem.linkImg}
              className='absolute inset-0 w-full h-full object-contain
  opacity-100 group-hover:opacity-0
  -translate-y-2 group-hover:translate-y-0
  transition-all duration-300 ease-out'
              alt='ak-47'
            />

            <img
              onClick={() => navigate(`/profile/${item.userId}`)}
              src={item.casesData.image}
              className='absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100
               -translate-y-2 group-hover:translate-y-0
              transition-all duration-300 ease-out'
              alt='case'
            />
          </div>
          <div className='relative h-[42px]  overflow-hidden'>
            <div
              className='absolute inset-0 transition-all justify-center  duration-300 ease-out
               opacity-100 translate-y-0
               group-hover:opacity-0 group-hover:-translate-y-2'
            >
              <div className='truncate justify-center flex text-[#e2b738] font-bold font-geo text-[14px]'>
                {item.winItem.price} ₽
              </div>
              <div className='truncate justify-center flex font-geo text-[13px]'>
                {item.winItem.nameWeapon}
              </div>
            </div>

            <div
              className='absolute flex justify-center inset-0 transition-all mt-1.5 duration-300 ease-out
               opacity-0 translate-y-2
                group-hover:opacity-100 group-hover:translate-y-0'
            >
              <div className='truncate font-geo text-[13px]'>
                {item.casesData.name}
              </div>
            </div>
          </div>
          <div className='item-component-line-pink'></div>
        </div>
      ))}
    </div>
  );
}
