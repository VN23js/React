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
import Login from './pages/Login';
import Todos from './pages/Todos';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './components/navbar';
import Register from './pages/Register';
import Layout from './components/layout';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, getMe } from './redux/authSlice';
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearError());
    dispatch(getMe());
  }, []);
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/todos' element={<Todos />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <ToastContainer position='bottom-right' />
    </>
  );
}
