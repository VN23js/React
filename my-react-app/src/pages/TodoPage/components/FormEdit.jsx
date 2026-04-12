import { motion } from 'framer-motion';
import { useState } from 'react';
import ButtonDelete from './ui/ButtonDelete';
import Motion from './ui/animate';

export default function FormTodoEdit({
  text,
  id,
  title,
  handleClick,
  hadnleDelete,
  Click,
}) {
  const HandleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onClick = async () => {
    try {
      await handleClick(id, form);
      Click();
    } catch (error) {
      console.error('Ошибка удалении todo:', error);
    }
  };

  const onClickDelete = async () => {
    try {
      await hadnleDelete(id);
      Click();
    } catch (error) {
      console.error('Ошибка удалении todo:', error);
    }
  };
  const [form, setForm] = useState({ text, id, title });
  return (
    <div className='flex flex-col gap-5 w-full justify-center'>
      <Motion>
        <input
          onChange={(e) => HandleChange(e)}
          className='custom-input w-full'
          name='title'
          value={form.title}
          placeholder='Название'
        ></input>
      </Motion>

      <Motion>
        <textarea
          onChange={(e) => HandleChange(e)}
          className='custom-textarea w-full'
          name='text'
          value={form.text}
          rows={10}
          placeholder='Текст'
        ></textarea>
      </Motion>
      <div className='  flex justify-between '>
        <button onClick={onClick} className='!bg-green-600'>
          Изменить
        </button>{' '}
        <ButtonDelete onClick={onClickDelete}>Удалить</ButtonDelete>
      </div>
    </div>
  );
}
