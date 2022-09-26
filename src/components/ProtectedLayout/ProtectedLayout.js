import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const ProtectedLayout = () => {
  const token = useSelector((state) => state.user?.token);
  return (
    <>
      {token ? (
        <>
          <header className="sidebar">
            <Navbar />
          </header>
          <Outlet />
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default ProtectedLayout;
