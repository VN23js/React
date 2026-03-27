import { Grid } from '@mui/joy';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllSessionFetch } from '../redux/caseSlice';

export default function LeftPanel() {
  const session = useSelector((state) => state.case.session);
  console.log(session);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSessionFetch());
    console.log(session);
  }, []);

  return (
    <div>
      {session?.map((item, i) => (
        <div
          key={`${item._id}-${i}`}
          className='items-case !max-w-[154px] group !h-[165px] mb-5 flex-col flex justify-center'
          style={{
            background: item.winItem.color,
            '--glow-color': item.winItem.glowColor,
            '--glow-rgb': item.winItem.glowRgb,
          }}
        >
          <img
            src={item.winItem.linkImg}
            className='m-auto w-[120px]   h-[120px]  object-contain'
            alt='ak-47'
          />
          <div className='item_title group-hover:hidden truncate text-[13px]'>
            {item.winItem.nameWeapon}
          </div>
          <div className='item_title hidden group-hover:block truncate text-[13px]'>
            {item.caseId}
          </div>

          <div className='text-white truncate text-[13px] truncate'>
            {item.winItem.nameSkin}
          </div>
          <div className='item-component-line-pink'></div>
        </div>
      ))}
    </div>
  );
}
