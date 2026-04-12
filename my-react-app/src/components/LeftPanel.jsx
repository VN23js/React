import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate, } from 'react-router-dom';
import { getAllSessionFetch } from '../redux/caseSlice';

export default function LeftPanel() {
  const session = useSelector((state) => state.case.session, shallowEqual);

  const navigate = useNavigate();
  console.log(session);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSessionFetch());
    console.log(session, 'TEST useEffect');
  }, []);

  return (
    <div>
      {session?.map((item, i) => (
        <div
          key={`${item._id}-${i}`}
          className='items-case !max-w-[154px] cursor-pointer group !h-[165px] mb-5 flex-col flex justify-center'
          style={{
            background: item.winItem.color,
            '--glow-color': item.winItem.glowColor,
            '--glow-rgb': item.winItem.glowRgb,
          }}
        >
          <div className='item_title relative  w-[120px]  h-[125px]  truncate text-[13px]'>
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
              className='absolute inset-0 transition-all duration-300 ease-out
               opacity-100 translate-y-0
               group-hover:opacity-0 group-hover:-translate-y-2'
            >
              <div className='truncate font-geo text-[13px]'>
                {item.winItem.nameWeapon}
              </div>
              <div className='truncate font-geo text-[13px]'>
                {item.winItem.nameSkin}
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
