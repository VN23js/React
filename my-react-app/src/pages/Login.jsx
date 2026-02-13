import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import { Button, Input, Typography } from '@mui/joy';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, loginUser } from '../redux/authSlice';
import { toast } from 'react-toastify';

export default function Login() {
  const dispatch = useDispatch();
  const { user, status, message, error, isAuth } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem('useFormsLogin');
    return saved ? JSON.parse(saved) : { username: '', password: '' };
  });
  useEffect(() => {
    dispatch(clearError());
    if (status === 'succeeded') {
      toast.success(message);
    } else if (status === 'failed') {
      toast.error(error);
    }
    if (isAuth) navigate('/');
  }, [status, , message, error, dispatch]);
  useEffect(() => {
    console.log('form:', form);
  }, [form]);

  const HandleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    localStorage.setItem('useFormsLogin', JSON.stringify(form));
  }, [form]);

  const handleClick = () => {
    dispatch(loginUser(form));
    setForm({ username: '', password: '' });
  };
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
          Вход
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
              variant='solid'
              onClick={handleClick}
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
                <Link className='flex' to='/register'>
                  <Typography level='body-sm' sx={{ color: '#a78bfa' }}>
                    Регистрация
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
}
