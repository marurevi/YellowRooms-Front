import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Detail from '../Detail/Detail';

const Rooms = () => {
  const value = `/Rooms/id=${1}`;
  return (
    <>
      <h2>Rooms</h2>
      <NavLink className="link" to={value}>Detail</NavLink>
      <Routes>
        <Route path=":id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default Rooms;
