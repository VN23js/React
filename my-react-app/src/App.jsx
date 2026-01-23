import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import SimpleParallax from 'simple-parallax-js';
import { animate, motion } from 'framer-motion';
import Card from './components/card';
import Item from './components/item';
import Adduser from './components/carditem';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [users, setUsers] = useState([
    { id: 1, name: 'Piero', mail: 'vdgg@gmail.com', age: 20 },
    { id: 2, name: 'Anna', mail: 'anna@gmail.com', age: 25 },
    { id: 3, name: 'John', mail: 'john@gmail.com', age: 22 },
    { id: 4, name: 'Jo', mail: 'jo@gmail.com', age: 45 },
  ]);
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
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const removeFirst = () => {
    setUsers(users.slice(1));
  };
  const HandleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };
  return (
    <>
      <div className='container'>
        <div>
          <a href='https://vite.dev' target='_blank'>
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </a>
          <a href='https://react.dev' target='_blank'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </div>
        <h1>Vite + React</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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
        <button className='button-primary'>Just exemple </button>
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
          <input name='email' onChange={HandleChange} />
          <input name='password' onChange={HandleChange} />
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

        {users.map((user) => (
          <Adduser
            key={user.id}
            addusers={user}
            HandleChanng={HandleChanngeName}
          ></Adduser>
        ))}
      </div>
    </>
  );
}

export default App;
