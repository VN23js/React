import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/joy/Grid';
import { motion } from 'framer-motion';
import Texblock from './components/ShowText';
import { toast } from 'react-toastify';

import TodoFilters from './components/TodoFilter';
import Motion from '../../components/animate';
import {
  clear,
  completedTodo,
  deleteTodo,
  getTodo,
  getTodoMore,
  postTodo,
  updateTodo,
} from '../../redux/todoSlice';
import TodoForm from './components/Todofrom';
import OnMoreTask from './components/Handlemore';

export default function Todos() {
  const dispatch = useDispatch();
  const { isAuth, isLoding } = useSelector((state) => state.auth);
  const { todos, message, status, error, hasMore } = useSelector(
    (state) => state.todo
  );
  const [test, setTest] = useState(false);
  const didFetchRef = useRef(false);
  const [filter, setFilter] = useState('all');
  const filteredTodo = useMemo(() => {
    console.log('🔄 Фильтрация массива');
    return todos.filter((todo) => {
      if (filter === 'completed') return todo.completed;
      if (filter === 'active') return !todo.completed;
      return true;
    });
  }, [todos, filter]);
  console.log('📦 Рендер Todos');
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

  useEffect(() => {
    if (!didFetchRef.current) {
      dispatch(getTodo());
      didFetchRef.current = true;
    }
  }, [dispatch]);

  const handleUpdateTodo = useCallback(
    async (id, data) => {
      await dispatch(updateTodo({ id, ...data })).unwrap();
    },
    [dispatch]
  );
  const handleMoreTask = useCallback(
    async (nextPage) => {
      await dispatch(getTodoMore({ nextPage })).unwrap();
    },
    [dispatch]
  );

  const handleDeleteTodo = useCallback(
    async (id) => {
      await dispatch(deleteTodo(id)).unwrap();
    },
    [dispatch]
  );
  const handleCompleteTodo = async (id) => {
    await dispatch(completedTodo(id)).unwrap();
  };
  const handleClick = () => {
    setTest((prev) => !prev);
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
        <div className=' flex mx-auto h-screen justify-center items-center'>
          <div className=''>
            <Motion>
              {' '}
              <h1 className='text-[3.2em] max-[500px]:text-[2.5em]'>
                Вы не вошли в аккаунт !!
              </h1>
            </Motion>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='container'>
      <div className=' flex justify-center items-center '>
        <TodoForm postTodo={postTodo}></TodoForm>
      </div>
      <div className=' flex justify-center items-center'>
        <Grid
          style={{
            width: '100%',
            display: 'flex',
            maxWidth: '700px',
            margin: '0 auto',
          }}
          alignItems={'center'}
          justifyContent={'center'}
          direction={'column'}
          container
          spacing={2}
        >
          <TodoFilters filter={filter} setFilter={setFilter}></TodoFilters>
          {filteredTodo?.map((todo) => (
            <Grid
              style={{
                width: '100%',
                marginBottom: '10px',
              }}
              sx={{ p: 1 }}
              item
              xs={12}
              sm={6}
              md={6}
              key={todo._id}
            >
              <Texblock
                completed={todo.completed}
                id={todo._id}
                title={todo.title}
                text={todo.text}
                onClick={handleClick}
                onUpdate={handleUpdateTodo} // ← передаем функцию из родителя
                onDelete={handleDeleteTodo} // ← передаем функцию из родителя
                onComplete={handleCompleteTodo} // ← передаем функцию из родителя
              ></Texblock>
            </Grid>
          ))}
          <OnMoreTask
            hasMore={hasMore}
            onMoreTask={handleMoreTask}
          ></OnMoreTask>
        </Grid>
      </div>
    </div>
  );
}
