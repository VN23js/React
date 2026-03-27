import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import { Button, Input, Typography } from '@mui/joy';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUsers } from '../redux/authSlice.js';
import { toast } from 'react-toastify';
import { clearError } from '../redux/authSlice';
import { useForm } from 'react-hook-form';

export default function Register() {
  const { user, status, message, error, isAuth } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    reset,
  } = useForm();
  const username = watch('username');
  const password = watch('password');
  const saved = localStorage.getItem('useFormsRegister');
  const saveData = saved ? JSON.parse(saved) : {};

  useEffect(() => {
    if (saveData.username) {
      setValue('username', saveData.username);
    }
    if (saveData.password) {
      setValue('password', saveData.password);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(
      'useFormsRegister',
      JSON.stringify({ username, password })
    );
  }, [username, password]);
  useEffect(() => {
    dispatch(clearError());
    if (status === 'succeeded') {
      toast.success(message);
    } else if (status === 'failed') {
      toast.error(error);
    }
    if (isAuth) navigate('/');
  }, [status, message, error, dispatch]);

  const handleClick = () => {
    dispatch(registerUsers({ username, password }));
    reset();
  };
  /*
  const HandleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

 const [form, setForm] = useState(() => {
    const saved = localStorage.getItem('useFormsRegister');
    console.log(saved);
    return saved ? JSON.parse(saved) : { username: '', password: '' };
  });
  useEffect(() => {
    localStorage.setItem('useFormsRegister', JSON.stringify(form));
  }, [form]);
  return (
    <div className='min-h-screen  flex items-start justify-center  pt-20 px-4'>
      <Sheet
        sx={{
          width: { xs: '100%', sm: 400 },
          mx: 'auto',
          p: 4,
          borderRadius: 3,
          backgroundColor: 'rgb(30,30,30)', // тёмный фон формы
          boxShadow: '0 4px 20px rgba(0,0,0,0.6)', // тень для контраста
          color: 'white',
        }}
      >
        <h1 className='text-2xl font-semibold mb-4 text-center text-white'>
          Регистрация
        </h1>

        <Grid container spacing={2} direction='column'>
          <form autoComplete='on' onSubmit={(e) => e.preventDefault()}>
            <Grid item>
              <Input
                value={form.username}
                name='username'
                onChange={(e) => HandleChange(e)}
                placeholder='Имя'
                fullWidth
                sx={{
                  backgroundColor: 'rgb(50,50,50)',
                  color: 'white',
                  borderRadius: 2,
                  '& input::placeholder': { color: 'gray' },
                }}
              />
            </Grid>

            <Grid item>
              <Input
                value={form.password}
                name='password'
                onChange={(e) => HandleChange(e)}
                placeholder='Пароль'
                type='password'
                fullWidth
                sx={{
                  backgroundColor: 'rgb(50,50,50)',
                  color: 'white',
                  borderRadius: 2,
                  '& input::placeholder': { color: 'gray' },
                }}
              />
            </Grid>
          </form>
          <Grid item>
            <Button
              onClick={handleClick}
              variant='solid'
              type='submit'
              sx={{
                width: { xs: '100%', sm: 200 },
                backgroundColor: '#7c3aed',
                color: 'white',
                borderRadius: 2,
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#5b21b6',
                },
              }}
            >
              Войти
            </Button>

            <div
              className='mt-3 justify-center
             text-center'
            >
              <div className='flex items-center justify-between fixed-col'>
                <Link className='flex' to='/login'>
                  <Typography level='body-sm' sx={{ color: '#a78bfa' }}>
                    Уже есть аккаунт
                  </Typography>
                </Link>
                <Link className='flex' to='/'>
                  <Typography level='body-sm' sx={{ color: '#a78bfa' }}>
                    Главная страница
                  </Typography>
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </Sheet>
    </div>
  );
  */
  return (
    <>
      <div className='container  '>
        <div className='pt-20 flex items-center   mx-auto justify-center'>
          <div className='flex relative mx-auto shadow-md flex-col w-full mb-3 gap-3 bg-[#2a2621] pb-10 pt-9   rounded-[18px] p-4 max-w-[700px] '>
            <img
              src='/mascot.a725464d08e5fcf905b0.png'
              className='absolute right-0 bottom-0 h-[110px] w-[110px] opacity-50 pointer-events-none '
            />
            <form
              className='flex flex-col gap-3 p-5 mx-auto  z-1'
              onSubmit={handleSubmit(handleClick)}
            >
              <div className=' flex justify-center flex-col pb-6 '>
                <div className='flex items-center gap-2'>
                  <div className='header-logo'></div>
                  <h1 className='category_title'>Регистрация</h1>
                </div>
              </div>
              <input
                className='w-full bg-[#1a1814] border border-[#3d3529] rounded-xl px-4 py-3 text-white placeholder-[#6b5f4e] focus:outline-none focus:border-[#fbc04e] transition-colors duration-300'
                placeholder='Имя'
                {...register('username', {
                  required: 'Введите логин',
                  minLength: {
                    value: 3,
                    message: 'Минимум 3 символа',
                  },
                })}
              />
              {errors.username && (
                <p className='text-[#ff5c5c] text-[12px] pl-1'>
                  {errors.username.message}
                </p>
              )}
              <input
                className='w-full bg-[#1a1814] border border-[#3d3529] rounded-xl px-4 py-3 text-white placeholder-[#6b5f4e] focus:outline-none focus:border-[#fbc04e] transition-colors duration-300'
                placeholder='Пароль'
                type='password'
                {...register('password', {
                  required: 'Введите пароль',
                  minLength: {
                    value: 3,
                    message: 'Минимум 3 символа',
                  },
                })}
              />
              {errors.password && (
                <p className='text-[#ff5c5c] text-[12px] pl-1'>
                  {errors.password.message}
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
                  className='!font-bold transition-all duration-[0.3s] max-[400px]:text-[13px] hover:!text-[#fabd3b]'
                  to={'/login'}
                >
                  Уже есть аккаунт
                </Link>
                <Link
                  className='!font-bold transition-all duration-[0.3s]  max-[400px]:text-[13px] hover:!text-[#fabd3b]'
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
