import React, { useState } from 'react';

export default function Card({ userService }) {
  const { name = 'Не указано ', id = 'Не указано', mail } = userService || {};
  const [value, setValue] = useState('');
  return (
    <div>
      <h1>Имя {name}</h1>
      <p>Ид {id}</p>
      <p>Mail {mail}</p>
      <input
        placeholder='Напиши что-то'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </div>
  );
}
