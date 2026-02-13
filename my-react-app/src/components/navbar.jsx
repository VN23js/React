import { Button } from '@mui/joy';
import { NavLink } from 'react-router-dom';
import { logout } from '../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import api from '../api/axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function Navbar() {
  const { user, status, error, message, isAuth } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const response = await api.post('/auth/logout');
      console.log('Ответ от сервера', response.data);
      dispatch(logout());
      toast.success('Вы вышли из аккаунта.');
    } catch (error) {
      console.error('Ошибка выхода', error);
    }
  };
  console.log(user);
  const activeClass = 'active';
  const inactiveClass = 'inactive';

  useEffect(() => {
    console.log('isAuth изменился', isAuth);
  }, [isAuth]);
  return (
    <div className='container '>
      <nav className=' navbar flex justify-between  gap-5 items-center'>
        <div>
          <p>{user?.username}</p>
        </div>
        <div className='flex gap-5 mx-aout'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `${isActive ? activeClass : inactiveClass}  hover:text-blue-500 transition-colors duration-300`
            }
          >
            Home
          </NavLink>
          {isAuth && (
            <NavLink
              to='/todos'
              className={({ isActive }) =>
                `${isActive ? activeClass : inactiveClass} hover:text-blue-500 transition-colors duration-300`
              }
            >
              Todos
            </NavLink>
          )}
        </div>
        <div>
          <div className=' flex justify-center items-center '>
            {isAuth ? (
              <Button onClick={handleLogout} className=''>
                Выйти
              </Button>
            ) : (
              <NavLink to='/login'>
                <Button>Войти</Button>
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
