import { Grid } from '@mui/joy';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCase, getcaseItemsFetch } from '../../../redux/caseSlice';
import { useParams } from 'react-router-dom';
import SkeletonItemsCase from '../Skeleton/SkeletonItemsCase';

export default function Caseitem() {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const { caseItems, getcaseItems } = useSelector((state) => state.case);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getcaseItemsFetch(id));
    return () => {
      dispatch(clearCase());
    };
  }, []);

  return (
    <>
      <div className=' mx-auto px-2 sm:px-4'>
        <h1 className='mb-5'>Содержимое кейса</h1>
        {getcaseItems.status === 'loading' ? (
          <>
            {' '}
            <SkeletonItemsCase></SkeletonItemsCase>{' '}
          </>
        ) : (
          <Grid container spacing={1}>
            {caseItems?.map((items, i) => (
              <Grid key={items._id} item xs={6} sm={3} md={2}>
                <div
                  className='items-case flex-col flex justify-center'
                  style={{
                    background: items.color,
                    '--glow-color': items.glowColor,
                    '--glow-rgb': items.glowRgb,
                  }}
                >
                  <img
                    src={items.linkImg}
                    className='m-auto w-[120px]  h-[120px]  object-contain'
                    alt='ak-47'
                  />
                  <div className='item_title max-[1000px]:text-[14px]'>
                    {items.nameWeapon}
                  </div>
                  <div className='text-white text-[14px] truncate'>
                    {items.nameSkin}
                  </div>
                  <div className='item-component-line-pink'></div>
                </div>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </>
  );
}
