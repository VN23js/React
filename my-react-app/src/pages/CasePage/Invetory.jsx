import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearInventory, getAllInventoryFetch } from '../../redux/caseSlice';
import { useEffect } from 'react';
import LoadingCard from './components/ui/shared/Loading';

export default function Inventory() {
  const { inventory, getAllInventory } = useSelector((state) => state.case);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllInventoryFetch());
    return () => {
      dispatch(clearInventory());
    };
  }, []);

  if (getAllInventory.status === 'loading') {
    return <LoadingCard></LoadingCard>;
  }

  return (
    <>
      <div className=' max-w-[1086px] justify-center flex-col mx-auto flex p-4'>
        <h1 className='category_title font-geo justify-center mb-4 flex'>
          Инветарь
        </h1>
        <div className='flex justify-center bg-[#151515] rounded-[24px] p-4 w-full '>
          <div className='flex  flex flex-col justify-center w-full   col'>
            {inventory.length === 0 && (
              <>
                <div className='w-full flex flex-col gap-2  items-center justify-center '>
                  {' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 64 64'
                    className='w-[64px] h-[64px] opacity-25'
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
                  <h1>Нет предметов</h1>
                  <p className='text-[#ac9b85] text-[12px]'>
                    Начните открывать кейсы
                  </p>
                  <Link to={'/'}>
                    <button className='!font-bold !bg-[linear-gradient(307deg,#d26928_3.2%,#ffd014_99.71%)]'>
                      Открыть
                    </button>
                  </Link>{' '}
                </div>
              </>
            )}
            {inventory.length > 0 && (
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3'>
                {inventory.map((item) => (
                  <div
                    key={item.id}
                    className='items-case !w-full !h-full  relative p-2 flex flex-col'
                    style={{
                      background: item.color,
                      '--glow-color': item.glowColor,
                      '--glow-rgb': item.glowRgb,
                    }}
                  >
                    {' '}
                    <div className='relative'>
                      <div
                        className='order_image relative    mx-auto '
                        style={{
                          '--before-bg': `rgba(${item.glowRgb}, 0.15)`,
                          '--before-shadow': `inset 0 1px 1px 0 rgba(${item.glowRgb}, 0.4), 0 1.811px 10.868px 0 rgba(13, 13, 12, 0.22)`,
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
                          src={item.linkImg}
                          alt={item.nameWeapon}
                        />
                      </div>

                      <div className='item_title flex text-[13px]'>
                        {item.nameWeapon}
                      </div>
                      <p className='text-[13px] truncate !font-geo'>
                        {item.nameSkin}
                      </p>
                      <p
                        className='text-[13px] font-bold !font-geo text-[#ffc23d] rounded-md px-1.5 py-0.5 mt-1 w-fit'
                        style={{
                          background: `rgba(${item.glowRgb}, 0.15)`,
                        }}
                      >
                        {item.price} ₽
                      </p>
                      <div className='item-component-line-pink'></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
