import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../redux/store.js';

export default function UpLenta() {
  const DataWinIndex = useSelector(
    (state: RootState) => state.caseTestTs.DataWinIndex
  );

  const navigate = useNavigate();

  return (
    <div className=' shadow-cust rounded-3xl  mx-auto hidden max-[1500px]:flex z-999 sticky left-0 right-0 gap-1 overflow-hidden p-2 h-[130px]'>
      {DataWinIndex.map((item, i) => (
        <div
          key={`${item._id}-${i}`}
          className='cursor-pointer group rounded-2xl h-full flex flex-col items-center justify-end w-[100px] shrink-0'
          style={
            {
              background: item.winItem.color,
              '--glow-color': item.winItem.glowColor,
              '--glow-rgb': item.winItem.glowRgb,
            } as React.CSSProperties
          }
        >
          {/* картинки */}
          <div className='relative w-full h-[70px]'>
            <div
              className='absolute inset-0 bg-no-repeat bg-center opacity-100 group-hover:opacity-0
              transition-all duration-300 ease-out'
              style={{
                backgroundImage: `url('/icon-${item.winItem.rarity}.png')`,
                backgroundSize: '55%',
              }}
            />
            <img
              src={item.winItem.linkImg}
              className='absolute inset-0 m-auto w-[85%] h-[85%] object-contain
              opacity-100 group-hover:opacity-0 -translate-y-1 group-hover:translate-y-0
              transition-all duration-300 ease-out'
              alt='weapon'
            />
            <img
              onClick={() => navigate(`/profile/${item.userId}`)}
              src={item.casesData.image}
              className='absolute inset-0 m-auto w-[90%] h-[90%] object-contain opacity-0 group-hover:opacity-100
              -translate-y-1 group-hover:translate-y-0 transition-all duration-300 ease-out cursor-pointer'
              alt='case'
            />
          </div>

          {/* текст */}
          <div className='relative w-full h-[40px] overflow-hidden'>
            <div
              className='absolute inset-0 flex flex-col items-center justify-center transition-all duration-300
            opacity-100 group-hover:opacity-0 group-hover:-translate-y-2'
            >
              <div className='truncate w-full text-center font-geo text-[11px] px-1'>
                {item.winItem.nameSkin}
              </div>
              <div className='text-[#e2b738] font-bold font-geo text-[13px]'>
                {item.winItem.price} ₽
              </div>
            </div>
            <div
              className='absolute inset-0 flex items-center justify-center transition-all duration-300
            opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
            >
              <div className='truncate font-geo text-[12px] px-1'>
                {item.casesData.name}
              </div>
            </div>
          </div>

          <div className='item-component-line-pink w-full'></div>
        </div>
      ))}
    </div>
  );
}
