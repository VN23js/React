import React, { useState } from 'react';

export default function Card({ userService, increaseAge, HandleChanng }) {
  const {
    name = 'Не указано ',
    id = 'Не указано',
    mail,
    age,
  } = userService || {};

  return (
    <div>
      <input
        className='border
             color-white'
        name='name'
        onChange={(e) => HandleChanng(id, e)}
        value={name}
        type='text'
      />
      <h1>Имя {name}</h1>
      <p>Ид {id}</p>
      <p>Mail {mail}</p>
      <p>Возрост{age}</p>
      <button onClick={() => increaseAge(id)}>Увеличить возрост </button>
    </div>
  );
}
