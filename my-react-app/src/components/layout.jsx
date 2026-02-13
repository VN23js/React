import React from 'react';
import Navbar from './navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <React.Fragment>
      <div>
        <Navbar />
        <Outlet/>
      </div>
    </React.Fragment>
  );
}
