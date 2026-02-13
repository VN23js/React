import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import { animate, motion } from 'framer-motion';
import { styled } from '@mui/joy/styles';
import { text, title } from 'framer-motion/client';
import Texblock from '../components/showtext';
import { clear, getTodo, postTodo } from '../redux/todoSlice';
import { toast } from 'react-toastify';
const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor: '#efeff1',

  textAlign: 'center',
  borderRadius: 10,
}));

export default function Todos() {
  const dispatch = useDispatch();
  const { todos, message, status, error } = useSelector((state) => state.todo);
  const didFetchRef = useRef(false);
  useEffect(() => {
    dispatch(clear());
    if (status === 'succeeded') {
      toast.success(message);
      dispatch(clear());
    } else if (status === 'failed') {
      toast.error(error);
      dispatch(clear());
    }
  }, [status, dispatch]);
  const [form, setform] = useState(() => {
    const saved = localStorage.getItem('postForm');
    return saved ? JSON.parse(saved) : { title: '', text: '' };
  });
  const { isAuth, isLoding } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!didFetchRef.current) {
      dispatch(getTodo());
      didFetchRef.current = true;
    }
  }, [dispatch]);
  useEffect(() => {
    localStorage.setItem('postForm', JSON.stringify(form));
  }, [form]);
  const HandleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const Handleclick = () => {
    dispatch(postTodo(form));
    setform({ title: '', text: '' });
  };
  if (isLoding) {
    return (
      <div className='h-screen flex items-center justify-center'>
        <span>Загрузка...</span>
      </div>
    );
  }

  if (!isAuth) {
    return (
      <div className='container'>
        <div className=' flex mx-auto h-screen justify-center items-center h-screen'>
          <div className=''>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h1 className='text-[3.2em] max-[500px]:text-[2.5em]'>
                Вы не вошли в аккаунт !!
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='container'>
      <div className=' flex justify-center items-center min-h-[50vh]'>
        <form
          autoComplete='on'
          onSubmit={(e) => e.preventDefault()}
          type='submit'
          style={{ width: '100%', maxWidth: '500px' }}
          action=''
        >
          {' '}
          <Grid container direction='column' spacing={3}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h1 className='text-[3.2em] max-[500px]:text-[2.5em] font-bold text-[var(--h1-color)] p-5'>
                Создать запись
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Grid item xs={12}>
                <input
                  value={form.title}
                  onChange={(e) => HandleChange(e)}
                  style={{
                    width: '100%',
                  }}
                  placeholder='Название'
                  name='title'
                ></input>
              </Grid>
              <Grid item xs={12}>
                <textarea
                  onChange={(e) => HandleChange(e)}
                  value={form.text}
                  rows={5}
                  style={{
                    width: '100%',
                  }}
                  placeholder='Текст'
                  name='text'
                ></textarea>
              </Grid>
            </motion.div>
            <Grid item xs={12}>
              <button onClick={Handleclick} className='p-5 w-full '>
                Добавить
              </button>
            </Grid>
          </Grid>
        </form>
      </div>
      <div className=' flex justify-center items-center min-h-[50vh]'>
        <Grid
          style={{ width: '100%', maxWidth: '700px' }}
          justifyContent={'center'}
          container
          spacing={2}
        >
          <h1 className='text-[3.0em] max-[500px]:text-[2.5em] font-bold text-[var(--h1-color)] p-5'>
            Мои задачи
          </h1>
          {todos?.map((todo) => (
            <Grid
              style={{
                width: '100%',
              }}
              sx={{ p: 1 }}
              items
              xs={12}
              sm={6}
              md={6}
              key={todo._id}
            >
              <Texblock
                completed={todo.completed}
                status={status}
                id={todo._id}
                title={todo.title}
                text={todo.text}
              ></Texblock>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
