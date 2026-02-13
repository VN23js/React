import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import SimpleParallax from 'simple-parallax-js';
import { animate, motion } from 'framer-motion';
import Card from './components/card';
import Item from './components/item';
import Adduser from './components/carditem';
import { pre } from 'framer-motion/client';

function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [users, setUsers] = useState([
    { id: 1, name: 'Piero', mail: 'vdgg@gmail.com', age: 20 },
    { id: 2, name: 'Anna', mail: 'anna@gmail.com', age: 25 },
    { id: 3, name: 'John', mail: 'john@gmail.com', age: 22 },
    { id: 4, name: 'Jo', mail: 'jo@gmail.com', age: 45 },
  ]);
  const [form, setForm] = useState(() => {
    const savedForm = localStorage.getItem('userForm');
    return savedForm
      ? JSON.parse(savedForm)
      : { id: '', name: '', mail: '', age: '' };
  });

  useEffect(() => {
    console.log('form:', form);
  }, [form]);

  useEffect(() => {
    localStorage.setItem('userForm', JSON.stringify(form));
  }, [form]);

  function useLocalSrorageForm(key, initValue) {
    const [value, setValue] = useState(() => {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initValue;
    });
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

  const HandleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const adduserINcard = () => {
    setUsers(
      (prevUsers) => [...prevUsers, { ...form, id: prevUsers.length + 1 }],
      setForm((prev) => ({
        ...prev,
        id: '',
        name: '',
        mail: '',
        age: '',
      }))
    );
  };

  useEffect(() => {
    console.log(users);
  }, [users]);
  const oncreaseAge = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, age: user.age + 1 } : user
      )
    );
  };
  const HandleChanngeName = (id, e) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, [e.target.name]: e.target.value } : user
      )
    );
  };

  const removeFirst = () => {
    setUsers(users.slice(1));
  };

  return (
    <>
      <div className='container'>
        <div className=''>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className='card'>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className='read-the-docs'>
              Click on the Vite and React logos to learn more
            </p>
            <h1>Vite + React</h1>
          </motion.div>
        </div>
      </div>
      <div className='container'>
        <section className='hero'>
          <div className='main-container'>
            <div className='fonbox'>
              <div className='cards'>
                <div className='card'>
                  <SimpleParallax>
                    <img src='/hero.webp' />
                  </SimpleParallax>
                </div>

                <div className='card'>
                  <SimpleParallax>
                    <img src='/hero.webp' />
                  </SimpleParallax>
                </div>
                <div className='card'>
                  <SimpleParallax>
                    <img src='/hero.webp' />
                  </SimpleParallax>
                </div>
                <div className='card'>
                  <SimpleParallax>
                    <img src='/hero.webp' />
                  </SimpleParallax>
                </div>
                <div className='card'>
                  <SimpleParallax>
                    <img src='/hero.webp' />
                  </SimpleParallax>
                </div>
                <div className='card'>
                  <SimpleParallax>
                    <img src='/hero.webp' />
                  </SimpleParallax>
                </div>
              </div>
            </div>
          </div>
        </section>
        <motion.div
          initial={{ opacity: 0, y: 20 }} // начальное состояние
          whileInView={{ opacity: 1, y: 0 }} // когда элемент появляется в viewport
          viewport={{ once: true, amount: 0.3 }} // анимация срабатывает один раз, когда 30% видны
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className='read-the-docs'>
            Click on the Vite and React logos to learn more Click on the Vite
            and React logos to learn more Click on the Vite and React logos to
            learn more
          </p>
        </motion.div>
        <div>
          <button onClick={removeFirst}>Удалить первого</button>
          {users.map((user) => (
            <Card
              key={user.id}
              increaseAge={oncreaseAge}
              userService={user}
              HandleChanng={HandleChanngeName}
            ></Card>
          ))}
          <button
            onClick={() =>
              setUsers((prevUsers) =>
                prevUsers.map((user) => ({
                  ...user,
                  age: user.age + 1,
                }))
              )
            }
          >
            Увеличить возрост всем{' '}
          </button>
        </div>
        <Item user={{ name: 'jhon', age: 20 }}></Item>
        <h1>Счетчик {count}</h1>
        <button onClick={() => setCount(count + 1)}> Увеличить</button>
      </div>
      <div>
        <div className='p-1 flex flex-col justify-center items-center'>
          {' '}
          <input
            className='border
             color-white'
            onChange={(e) => setName(e.target.value)}
            value={name}
            type='text'
          />
          <p>{name}</p>
        </div>

        <div className='container'>
          <div className='p-2 flex flex-col justify-center items-center'>
            <button onClick={adduserINcard}> Добавить пользователя</button>
            <div className=' form-inputs w-full  flex justify-center gap-3 pt-2'>
              <input
                name='name'
                value={form.name}
                onChange={(e) => HandleChange(e)}
                placeholder='Имя'
                className='min-max-[200px]   text-white mt-1 rounded-lg border border-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              ></input>
              <input
                onChange={(e) => HandleChange(e)}
                name='mail'
                value={form.mail}
                placeholder='Почта'
                className='min-max-[200px]  text-white mt-1 rounded-lg border border-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              ></input>
              <input
                value={form.age}
                onChange={(e) => HandleChange(e)}
                name='age'
                placeholder='Возраст'
                className='min-max-[200px]  text-white mt-1 rounded-lg border border-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              ></input>
            </div>
          </div>
          <div className='cards'>
            {users.map((user) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <Adduser
                  key={user.id}
                  addusers={user}
                  HandleChanng={HandleChanngeName}
                ></Adduser>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
