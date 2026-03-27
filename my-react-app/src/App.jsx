import { useEffect, useRef, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Case from './pages/CasePage/CasePage';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Register from './pages/Register';
import Layout from './components/layout.jsx';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, getMe } from './redux/authSlice';
import Todos from './pages/TodoPage/Todos';
import Inventory from './pages/CasePage/Invetory';

export default function App() {
  const didFetchRef = useRef(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearError());
    if (!didFetchRef.current) {
      dispatch(getMe());
      didFetchRef.current = true;
    }
  }, []);
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/todos' element={<Todos />} />
          <Route path='/case/:id' element={<Case />} />
          <Route path='/inventory' element={<Inventory />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <ToastContainer
        position='bottom-right'
        className='pb-2
        '
      />
    </>
  );
}
