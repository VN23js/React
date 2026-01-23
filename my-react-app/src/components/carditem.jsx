import React, { useState } from 'react';
export default function Adduser({ addusers, HandleChanng }) {
  const [open, setOpen] = useState(false);
  const addEdit = () => {
    setOpen((prevopen) => !prevopen);
  };
  const { name, age, id, mail } = addusers;
  return (
    <div className='container mx-auto px-4'>
      <div className='flex justify-center'>
        <div className='w-full max-w-[320px] bg-white rounded-2xl shadow-lg border p-5'>
          <h2 className='text-lg font-semibold text-center mb-4'>
            Профиль пользователя
          </h2>

          {/* Имя */}
          <div className='mb-3'>
            <p className='text-sm text-gray-500'>Имя</p>
            {!open ? (
              <p className='font-medium text-black'>{name}</p>
            ) : (
              <input
                name='name'
                value={name}
                onChange={(e) => HandleChanng(id, e)}
                className='w-full text-black mt-1 rounded-lg border border-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            )}
          </div>

          {/* ID */}
          <div className='mb-3'>
            <p className='text-sm text-gray-500'>ID</p>
            {!open ? (
              <p className='font-medium text-black'>{id}</p>
            ) : (
              <input
                name='id'
                value={id}
                onChange={(e) => HandleChanng(id, e)}
                className='w-full text-black mt-1 rounded-lg border border-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            )}
          </div>

          {/* Возраст */}
          <div className='mb-3'>
            <p className='text-sm text-gray-500'>Возраст</p>
            {!open ? (
              <p className='font-medium text-black'>{age}</p>
            ) : (
              <input
                name='age'
                value={age}
                onChange={(e) => HandleChanng(id, e)}
                className='w-full mt-1 text-black rounded-lg border border-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            )}
          </div>

          {/* Почта */}
          <div className='mb-4'>
            <p className='text-sm text-gray-500'>Почта</p>
            {!open ? (
              <p className='font-medium text-black break-all'>{mail}</p>
            ) : (
              <input
                name='mail'
                value={mail}
                onChange={(e) => HandleChanng(id, e)}
                className='w-full text-black mt-1 rounded-lg border border-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            )}
          </div>

          <button
            onClick={addEdit}
            className={`w-full rounded-xl py-2 font-medium transition
          ${
            open
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
          >
            {open ? 'Сохранить' : 'Редактировать'}
          </button>
        </div>
      </div>
    </div>
  );
}
