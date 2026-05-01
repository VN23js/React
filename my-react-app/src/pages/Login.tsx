import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import { Button, Input, Typography } from '@mui/joy';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearStatus, loginUser } from '../redux/authSlice.js';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import type { AppDispatch, RootState } from '../redux/store.js';

type LoginForm = {
  password: string;
  username: string;
};
export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    reset,
  } = useForm<LoginForm>();

  const password = watch('password');
  const username = watch('username');
  const dispatch = useDispatch<AppDispatch>();
  const { statusLogin, isAuth } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const saved = localStorage.getItem('useFormsLogin');
  const savedData = saved ? JSON.parse(saved) : {};

  useEffect(() => {
    if (savedData.username) {
      setValue('username', savedData.username);
    }
    if (savedData.password) {
      setValue('password', savedData.password);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'useFormsLogin',
      JSON.stringify({ username, password })
    );
  }, [username, password]);

  const handleClick = () => {
    dispatch(loginUser({ username, password }));
  };

  useEffect(() => {
    if (statusLogin.status === 'successed') {
      toast.success(statusLogin.message);
      reset();
    } else if (statusLogin.status === 'failed') {
      toast.error(statusLogin.error);
    }
    if (isAuth) {
      navigate('/');
    }
    return () => {
      dispatch(clearStatus());
    };
  }, [statusLogin.status, isAuth]);

  return (
    <>
      <div className='container  '>
        <div className='pt-20 flex items-center  mx-auto justify-center'>
          <div className='flex relative mx-auto shadow-md flex-col w-full mb-3 gap-3 bg-[#2a2621] pb-10 pt-9  rounded-[18px] p-4 max-w-[700px] '>
            <img
              src='/mascot.a725464d08e5fcf905b0.png'
              className='absolute right-0 bottom-0 h-[110px] w-[110px] opacity-50 pointer-events-none '
            />
            <form
              className='flex flex-col gap-3 p-5 mx-auto z-1'
              onSubmit={handleSubmit(handleClick)}
            >
              <div className=' flex justify-center flex-col pb-6 '>
                <div className='flex items-center gap-2'>
                  <div className='header-logo'></div>
                  <h1 className='category_title'>Авторизация</h1>
                </div>
              </div>
              <input
                className='w-full bg-[#1a1814] border border-[#3d3529] rounded-xl px-4 py-3 text-white placeholder-[#6b5f4e] focus:outline-none focus:border-[#fbc04e] transition-colors duration-300'
                placeholder='Имя'
                {...register('username', {
                  required: 'Введите логин',
                })}
              />
              {errors.username && (
                <p className='text-[#ff5c5c] text-[12px] pl-1'>
                  {errors.username.message as string}
                </p>
              )}
              <input
                className='w-full bg-[#1a1814] border border-[#3d3529] rounded-xl px-4 py-3 text-white placeholder-[#6b5f4e] focus:outline-none focus:border-[#fbc04e] transition-colors duration-300'
                placeholder='Пароль'
                type='password'
                {...register('password', {
                  required: 'Введите пароль',
                })}
              />
              {errors.password && (
                <p className='text-[#ff5c5c] text-[12px] pl-1'>
                  {errors.password.message as string}
                </p>
              )}

              <button
                className='!bg-[linear-gradient(307deg,#d26928_3.2%,#ffd014_99.71%)] shadow-lg !font-geo !font-bold'
                type='submit'
              >
                Войти
              </button>
              <div className='flex gap-3 justify-between'>
                <Link
                  className='!font-bold transition-all duration-[0.3s] hover:!text-[#fabd3b]'
                  to={'/register'}
                >
                  Регистрация
                </Link>
                <Link
                  className='!font-bold transition-all duration-[0.3s] hover:!text-[#fabd3b]'
                  to={'/'}
                >
                  Главная страница
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
