import ButtonCase from '../pages/CasePage/components/ui/shared/Button.js';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../redux/authSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import api from '../api/axios.js';
import { toast } from 'react-toastify';
import { LogOutIcon, Trophy, UserKey } from 'lucide-react';
import NavigationLinkHomeDesktop from './LinkNavigation/NavigationLinkHomeDesktop.jsx';
import NavigationLinkInventoryDesktop from './LinkNavigation/NavigationLinkInventoryDesktop.jsx';
import { useEffect } from 'react';
import { clearInventory } from '../redux/caseSlice.js';

export default function Navbar() {
  const { user, isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const response = await api.post('/auth/logout');
      console.log('Ответ от сервера', response.data);
      dispatch(logout());
      dispatch(clearInventory());
      toast.success('Вы вышли из аккаунта.');
    } catch (error) {
      toast.error('Ошибка выхода.');
      console.error('Ошибка выхода', error);
    }
  };

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div className='fixed top-0 left-0 right-0 z-999 bg-[#1b1a19]'>
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
              {isAuth && (
                <div className=' hidden min-[900px]:block h-[50px] w-[50px] shrink-0 rounded-[50px] cursor-pointer overflow-hidden '>
                  <img
                    onClick={() => navigate(`/profile/${user.id}`)}
                    className=' w-full h-full object-cover'
                    src='https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg'
                  />
                </div>
              )}
              {isAuth ? (
                <button
                  onClick={handleLogout}
                  className='flex items-center h-fit [text-shadow:0_1px_2px_rgba(0,0,0,0.5)] gap-2 !font-bold !bg-[linear-gradient(307deg,#d26928_3.2%,#ffd014_99.71%)]'
                >
                  Выйти
                  <LogOutIcon className='w-5 h-5' />
                </button>
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
