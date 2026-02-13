import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import { animate, motion } from 'framer-motion';
import { styled } from '@mui/joy/styles';
import { text, title } from 'framer-motion/client';

import {
  clear,
  completedTodo,
  deleteTodo,
  getTodo,
  postTodo,
  updateTodo,
} from '../redux/todoSlice';

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor: '#efeff1',

  textAlign: 'center',
  borderRadius: 10,
}));

export default function Texblock({ text, id, title, completed }) {
  const dispatch = useDispatch();
  const [expanded, setexpanded] = useState(false);
  const [edit, setEdit] = useState(null);
  const maxChar = 300;
  const isLong = text.length > maxChar; //true
  const [form, setForm] = useState({ text, id, title });
  const { status } = useSelector((state) => state.todo);
  const displayText =
    expanded || !isLong ? text : text.slice(0, maxChar) + '...';
  const Click = () => {
    setEdit(edit === id ? null : id);
  };

  const hadnleDelete = async () => {
    try {
      await dispatch(deleteTodo(id)).unwrap();

      Click();
    } catch (error) {
      console.error('Ошибка удалении todo:', error);
    }
  };
  const handleClick = async () => {
    try {
      await dispatch(updateTodo(form)).unwrap();

      Click();
    } catch (err) {
      console.error('Ошибка обновления todo:', err);
    }
  };
  const HandleCompleted = async () => {
    try {
      await dispatch(completedTodo(id)).unwrap();
    } catch (error) {
      console.error('Ошибка обновления todo:', error);
    }
  };
  const HandleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Item
        sx={{
          color: 'white',
          background: 'var(--color-libbg)',
          borderRadius: '20px',
          border: '1px solid rgba(147,115,234,0.15)',
          transition: '0.3s',
          '&:hover': {
            border: '1px solid rgba(147,115,234,0.4)',
          },
        }}
      >
        <div className='p-4 flex flex-col  text-left gap-2'>
          {edit === id ? (
            <div
              className='flex flex-col gap-5 w-full justify-center
            '
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <input
                  onChange={(e) => HandleChange(e)}
                  className='w-full'
                  name='title'
                  value={form.title}
                  placeholder='Название'
                ></input>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <textarea
                  onChange={(e) => HandleChange(e)}
                  className='w-full'
                  name='text'
                  value={form.text}
                  rows={10}
                  placeholder='Текст'
                ></textarea>
              </motion.div>
              <div className='  flex justify-between '>
                <button onClick={handleClick} className='!bg-green-600'>
                  Изменить
                </button>{' '}
                <button onClick={hadnleDelete} className='!bg-red-600'>
                  Удалить
                </button>{' '}
              </div>
            </div>
          ) : (
            <div>
              {' '}
              <Typography
                sx={{
                  fontWeight: 500,
                  wordWrap: 'break-word',
                  color: 'var(--color-text)',
                }}
                level='h3'
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  color: 'var(--color-text)',
                  maxWidth: '100%',
                  overflowWrap: 'break-word',
                  padding: '5px',
                }}
                level='h5'
              >
                {displayText}
                {isLong && (
                  <span
                    className='cursor-pointer
              text-sm
ml-2
              text-violet-600
              hover:undreline
              select-none
               inline
        whitespace-nowrap
              '
                    onClick={() => setexpanded(!expanded)}
                  >
                    {expanded ? ' скрыть ' : 'еще'}
                  </span>
                )}
              </Typography>
            </div>
          )}
        </div>
        <div className='mb-2'>
          <span
            onClick={Click}
            className='cursor-pointer
              text-sm
              text-violet-600
              hover:undreline
              select-none
               inline
               whitespace-nowrap
              '
          >
            {' '}
            {edit === id ? 'Назад' : 'Изменить'}
          </span>
        </div>
        <div className='flex justify-end pr-5 pb-5'>
          {edit === id ? (
            <div>b</div>
          ) : (
            <button
              className='w-9 h-9 cursor items-center flex justify-center !text-[1.5em]'
              type='checkbox'
              onClick={HandleCompleted}
              style={{
                background: completed ? '#00ff009e' : '#cb0000ee',
              }}
            >
              {completed ? '✓' : '✘'}
            </button>
          )}
        </div>
      </Item>{' '}
    </>
  );
}
