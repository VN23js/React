import { useEffect, useMemo, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import SimpleParallax from 'simple-parallax-js';
import { animate, motion } from 'framer-motion';
import Card from './components/card';
import Item from './components/item';
import Adduser from './components/carditem';
import { pre } from 'framer-motion/client';
import { retry } from '@reduxjs/toolkit/query';
import { Grid } from '@mui/joy';
import HomeCaseItems from './pages/CasePage/components/HomeCaseItems';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCaseFetch } from './redux/caseSlice';
import LeftPanel from './components/LeftPanel';

function Home() {
  {
    /*
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
           <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  justify-items-center '>
        </div>  const cases = Array(5).fill({});
      </div>
    </> console.log(window.innerWidth, 'Экран ');

  );




 <Grid container spacing={0} justifyContent='center'>
        {cases.map((item, i) => (
          <Grid key={item._id} item xs={6} sm={4} md={3} lg={2.2}>
            <div
              onClick={() => navigate(`/case/${item._id}`)}
              className='cursor-pointer p-[2px]  transition-transform duration-300 hover:text-[#fac26f] flex flex-col items-center'
            >
              <img
                draggable='false'
                className='case-img max-w-[310px] w-full object-contain transition-transform duration-300 hover:scale-105'
                alt='Гавайский Павлин'
                src={item.image}
              />
              <span className='box_title mt-2 mb-2 text-center font-bold text-sm sm:text-base'>
                {item.name}
              </span>
              <span className='box-price px-2 font-bold h-[32px] font-geo items-center  align-center flex rounded-lg text-[#ffc23d]  bg-[linear-gradient(180deg,#5e4437,#3e2c23)]'>
                {item.price} ₽
              </span>
            </div>
          </Grid>
        ))}
      </Grid>









  <div className='flex justify-center'>
      {/* Боковая панель
      <div className='hidden min-[1500px]:block w-[200px] shrink-0 ml-4 '>
        <div className='bg-[#1a181d] rounded-lg p-4'>
          <p className='text-white'>Боковая панель</p>
        </div>
      </div>
  */
  }

  const cases = useSelector((state) => state.case.cases);
  console.log(cases);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCaseFetch());
  }, []);
  const TeploPoshlo = cases?.filter((c) => c.category === 'Teplo Poshlo');

  const CaseCS2 = cases?.filter((c) => c.category === 'Кейсы КС2');

  return (
    <div className='flex flex-col min-[1500px]:max-w-[1200px] mx-auto w-full pt-4 gap-5'>
      <HomeCaseItems
        nameCase='Teplo Poshlo'
        cases={TeploPoshlo}
      ></HomeCaseItems>
      <HomeCaseItems nameCase='Кейсы КС2' cases={CaseCS2}></HomeCaseItems>
      <HomeCaseItems
        nameCase='Teplo Poshlo'
        cases={TeploPoshlo}
      ></HomeCaseItems>
      <HomeCaseItems nameCase='Кейсы КС2' cases={CaseCS2}></HomeCaseItems>
    </div>
  );
}

export default Home;
