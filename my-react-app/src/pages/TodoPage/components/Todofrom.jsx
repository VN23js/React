import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/joy/Grid';
import Motion from '../../../components/animate';
import { postTodo } from '../../../redux/todoSlice';
import ButtonAdd from '../../../components/ButtonAdd';

export default function TodoForm() {
  const dispatch = useDispatch();
  const [form, setform] = useState(() => {
    const saved = localStorage.getItem('postForm');
    return saved ? JSON.parse(saved) : { title: '', text: '' };
  });

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
  return (
    <form
      autoComplete='on'
      onSubmit={(e) => e.preventDefault()}
      type='submit'
      style={{ width: '100%', maxWidth: '500px' }}
      action=''
    >
      {' '}
      <Grid container direction='column' spacing={3}>
        <Motion>
          <h1 className='text-[3.2em] max-[500px]:text-[2.5em] font-bold text-[var(--h1-color)] p-5'>
            Создать запись
          </h1>
        </Motion>
        <Motion>
          <Grid item xs={12}>
            <input
              className='custom-input'
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
              className='custom-textarea'
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
        </Motion>
        <Grid item xs={12}>
          <ButtonAdd Handleclick={Handleclick}></ButtonAdd>
        </Grid>
      </Grid>
    </form>
  );
}
