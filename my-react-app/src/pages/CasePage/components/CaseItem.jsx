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
                  <div className='relative'>
                    <div
                      className='order_image relative    mx-auto '
                      style={{
                        '--before-bg': `rgba(${items.glowRgb}, 0.15)`,
                        '--before-shadow': `inset 0 1px 1px 0 rgba(${items.glowRgb}, 0.4), 0 1.811px 10.868px 0 rgba(13, 13, 12, 0.22)`,
                      }}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 64 64'
                        className='w-[64px] h-[64px] -z-1 mx-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  absolute opacity-25'
                      >
                        <path
                          fill='#ac9b85'
                          d='M37.485 6.4c-8.617 0-15.961 9.09-18.824 19.345-.488 1.75 1.172 3.236 2.916 2.727a1.828 1.828 0 0 1 2.29 1.32 6.638 6.638 0 0 0 8.31 4.799 1.829 1.829 0 0 1 2.29 1.322l.452 1.855a4.81 4.81 0 0 0 6.021 3.476 1.829 1.829 0 0 1 2.216 2.422 30.046 30.046 0 0 1-1.944 4.068 24.248 24.248 0 0 1-4.703 5.95c-1.479 1.364-1.036 3.916.976 3.916 11.109 0 20.115-9.621 20.115-22.857C57.6 21.507 48.594 6.4 37.485 6.4Z'
                        ></path>
                        <path
                          fill='#ac9b85'
                          d='M33.74 40.647a4.232 4.232 0 0 0-5.3-3.059 4.234 4.234 0 0 1-5.299-3.06 4.235 4.235 0 0 0-5.3-3.06l-1.977.577a2.264 2.264 0 0 1-2.835-1.635l-.082-.337c-.412-1.686-2.535-2.127-3.407-.627-5.79 10.03-3.264 21.21 5.045 26.007 8.308 4.797 19.253 1.395 25.044-8.634.862-1.503-.58-3.117-2.242-2.631l-.33.096a2.258 2.258 0 0 1-2.828-1.632l-.49-2.005Z'
                        ></path>
                      </svg>
                      <img
                        className='z-4 drop-shadow-[0_14px_10px_rgba(0,0,0,0.5)] w-[140px] h-[100px] mx-auto object-contain transition-transform duration-300 hover:scale-105'
                        src={items.linkImg}
                        alt={items.nameWeapon}
                      />
                    </div>

                    <di
                      v
                      className='item_title flex items-center justify-center text-[13px]'
                    >
                      {items.nameWeapon}
                    </di>
                    <p className='text-[13px] truncate items-center !font-geo'>
                      {items.nameSkin}
                    </p>
                    <p
                      className='text-[13px] font-bold !font-geo mx-auto text-[#ffc23d] rounded-md px-1.5 py-0.5 mt-1 w-fit'
                      style={{
                        background: `rgba(${items.glowRgb}, 0.15)`,
                      }}
                    >
                      {items.price} ₽
                    </p>
                    <div className='item-component-line-pink'></div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </>
  );
}
