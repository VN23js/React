import { GiPistolGun } from 'react-icons/gi';
import { useSelector } from 'react-redux';

import type { RootState } from '../../../redux/store.js';

export default function UsersProfileCard() {
  const profileUser = useSelector(
    (state: RootState) => state.caseTestTs.profileUser
  );
  console.log(profileUser?.maxPriceItem?.nameSkin);
  return (
    <div className=' grid  grid-cols-1 lg:grid-cols-2 gap-1.5 '>
      <div className='w-full p-5 rounded-2xl bg-[linear-gradient(180deg,#2c2a24,#37342b)]'>
        <div className='flex gap-2'>
          <img
            className='h-19 w-19px'
            src='https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg'
          />
          <div className='flex flex-col font-geo font-bold justify-center  items-center'>
            Name:
            <span className='text-[13px] text-[#fff8dadb] bg-[#ffffff1f] p-0.5 px-1.5 rounded-2xl font-geo'>
              {profileUser?.UserName}
            </span>
          </div>
        </div>
      </div>
      {profileUser?.maxPriceItem ? (
        <div className='w-full p-5 rounded-2xl gap-1  relative bg-[linear-gradient(180deg,#2c2a24,#37342b)]'>
          <div className='flex flex-col pr-40 gap-1'>
            <div className='flex flex-col'>
              <p className='text-[#ffffff66] font-geo text-[12px]'>
                {' '}
                Лучший дроп
              </p>

              <span className=' font-bold  text-[14px] font-geo text-[#ffc23d]'>
                {profileUser.maxPriceItem.price} ₽
              </span>
              <span className=' font-bold font-geo text-[12px]'>
                {profileUser?.maxPriceItem?.nameWeapon}
              </span>
            </div>
            <div className='font-bold font-geo flex gap-1 items-center text-[#9c9689] text-[12px]'>
              <GiPistolGun className='w-6 h-6 flex-shrink-0 ' />{' '}
              {profileUser?.maxPriceItem?.nameSkin}
            </div>
          </div>
          <div className='bottom-0 top-0 flex justify-center items-center   right-2.5 w-35 absolute '>
            <img className='z-10' src={profileUser.maxPriceItem.linkImg} />

            <div className=' absolute'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 64 64'
                className='w-[100px] h-[100px] opacity-10'
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
            </div>
          </div>
        </div>
      ) : (
        <div className='w-full p-5 rounded-2xl gap-1  relative bg-[linear-gradient(180deg,#2c2a24,#37342b)]'>
          <div className='flex flex-col pr-25 gap-1'>
            <div className='flex flex-col'>
              <p className='text-[#ffffff66] font-geo text-[12px]'>
                {' '}
                Лучший дроп
              </p>

              <span className=' font-bold  text-[18px] font-geo'>
                Пока ничего нет
              </span>
            </div>
            <div className='font-bold font-geo flex gap-1 items-center text-[#9c9689] text-[12px]'>
              <GiPistolGun className='w-6 h-6 flex-shrink-0 ' /> Пока ничего нет
            </div>
          </div>
          <div className='bottom-0 top-0 flex justify-center items-center   right-0 w-35 absolute '>
            Пока ничего нет
            <div className=' absolute'>
              <img src='https://petuh.gg/static/media/empty-best-drop.5affadb16f18f3cb6f72.png' />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
