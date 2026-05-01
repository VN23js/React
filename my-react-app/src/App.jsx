import { useEffect, useRef, useState } from 'react';
import './App.css';
import Login from './pages/Login.js';
import Case from './pages/CasePage/CasePage';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Register from './pages/Register.js';
import Layout from './components/Layout.jsx';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getMe } from './redux/authSlice.ts';
import Todos from './pages/TodoPage/Todos';
import Inventory from './pages/CasePage/Invetory';
import FormsTsx from './TS/Forms.tsx';
import { lazy, Suspense } from 'react';
import Error from './pages/CasePage/components/ui/shared/Error';
import LoadingCard from './pages/CasePage/components/ui/shared/Loading.tsx';
const UsersProfilePage = lazy(
  () => import('./pages/CasePage/UsersProfilePage')
);
const AdminPage = lazy(() => import('./pages/CasePage/AdminPage.tsx'));
export default function App() {
  const didFetchRef = useRef(false);
  const dispatch = useDispatch();
  useEffect(() => {
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
          <Route path='/formstsx' element={<FormsTsx />} />
          <Route path='/todos' element={<Todos />} />
          <Route path='/case/:id' element={<Case />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='*' element={<Error />} />
          <Route
            path='/profile/:id'
            element={
              <Suspense fallback={<div></div>}>
                <UsersProfilePage />{' '}
              </Suspense>
            }
          />
          <Route
            path='/adminpage'
            element={
              <Suspense fallback={<LoadingCard></LoadingCard>}>
                <AdminPage></AdminPage>
              </Suspense>
            }
          />
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
