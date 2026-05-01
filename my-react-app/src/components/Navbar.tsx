import ButtonCase from '../pages/CasePage/components/ui/shared/Button.js';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../redux/authSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import apiTs from '../api/axiosTs.js';
import { toast } from 'react-toastify';
import { CirclePlus, LogOutIcon, Trophy, UserKey } from 'lucide-react';
import NavigationLinkHomeDesktop from './LinkNavigation/NavigationLinkHomeDesktop.js';
import NavigationLinkInventoryDesktop from './LinkNavigation/NavigationLinkInventoryDesktop.js';
import { useEffect } from 'react';
import type { AppDispatch, RootState } from '../redux/store.js';

export default function Navbar() {
  const user = useSelector((state: RootState) => state.auth.user);
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const handleLogout = async () => {
    try {
      const response = await apiTs.post('/auth/logout');
      console.log('Ответ от сервера', response.data);
      dispatch(logout());

      toast.success('Вы вышли из аккаунта.');
    } catch (error) {
      toast.error('Ошибка выхода.');
      console.error('Ошибка выхода', error);
    }
  };

  useEffect(() => {
    console.log(user);
  }, []);
  console.log('TEST NAVBAR RENDER =  navigate ');
  return (
    <div className='sticky top-0 left-0 right-0 z-999 bg-[#1b1a19]'>
      <div className=' bg-[linear-gradient(180deg,rgba(77,64,39,0.2),rgba(78,66,40,0.7))] w-full'>
        <div className='w-full  mx-auto px-3 pb-1 pt-2'>
          <nav className='navbar flex justify-between gap-6  items-center'>
            <div className='header-left flex'>
              <Link className='flex' to={'/'}>
                <div className='header-logo'></div>
              </Link>
            </div>

            <div className='header-group max-[900px]:hidden w-full flex '>
              <ul className='flex tracking-wide  font-geo text-[#ac9b85] gap-2'>
                <li className=' flex items-center transition-all duration-[0.3s] gap-3 hover:text-white cursor-pointer'>
                  <NavigationLinkHomeDesktop></NavigationLinkHomeDesktop>
                </li>

                <li className='flex items-center  gap-3 hover:text-white cursor-pointer transition-all duration-300'>
                  <NavigationLinkInventoryDesktop></NavigationLinkInventoryDesktop>
                </li>

                <li className=' flex items-center transition-all duration-[0.3s] gap-3 hover:text-white cursor-pointer'>
                  <Trophy className='w-5 h-5' />
                  Выигрыши
                </li>
              </ul>
            </div>

            <div className='flex gap-3 justify-center items-center text-sm'>
              {isAuth && user && (
                <div className=' hidden min-[900px]:block h-[50px] w-[50px] shrink-0 rounded-[50px] cursor-pointer overflow-hidden '>
                  <img
                    onClick={() => navigate(`/profile/${user.id}`)}
                    className=' w-full h-full object-cover'
                    src='https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg'
                  />
                </div>
              )}
              {isAuth ? (
                <>
                  {' '}
                  <div className='flex items-center hidden min-[900px]:flex cursor-pointer h-[38px] px-3 gap-2 rounded-xl  font-geo  bg-[linear-gradient(307deg,#d26928_3.2%,#ffd014_99.71%)]'>
                    <div
                      className='text-[16px] font-geo font-bold flex  items-center'
                      style={{ textShadow: '0 2px 1px rgba(137, 65, 14, .34)' }}
                    >
                      <span>0</span>
                      <span>₽</span>
                    </div>
                    <CirclePlus className='w-5 h-5 ' />
                  </div>
                  <button
                    onClick={handleLogout}
                    className='flex items-center h-fit [text-shadow:0_1px_2px_rgba(0,0,0,0.5)] gap-2 !font-bold !bg-[linear-gradient(307deg,#d26928_3.2%,#ffd014_99.71%)]'
                  >
                    Выйти
                    <LogOutIcon className='w-5 h-5' />
                  </button>
                </>
              ) : (
                <Link to='/login'>
                  <ButtonCase className='[text-shadow:0_1px_2px_rgba(0,0,0,0.5)]'>
                    Войти
                    <UserKey className='w-5 h-5 ' />
                  </ButtonCase>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
