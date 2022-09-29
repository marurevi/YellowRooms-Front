import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Splash from './components/Splash/Splash';
import Rooms from './components/Rooms/Rooms';
import AddRoom from './components/AddRoom/AddRoom';
import DeleteRoom from './components/DeleteRoom/DeleteRoom';
import Reservations from './components/Reservations/Reservations';
import Reserve from './components/Reserve/Reserve';
import Detail from './components/Detail/Detail';
import AllReserves from './components/partials/AllReserves';
import ProtectedLayout from './components/ProtectedLayout/ProtectedLayout';
import { loadUser } from './Redux/Authenticate/authentication';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route element={<ProtectedLayout />}>
          <Route path="/Rooms/*" element={<Rooms />} />
          <Route path="/Rooms/:id" element={<Detail />} />
          <Route path="/AddRoom" element={<AddRoom />} />
          <Route path="/DeleteRoom" element={<DeleteRoom />} />
          <Route path="/Reservations" element={<Reservations />} />
          <Route path="/Reserve/:room_id" element={<Reserve />} />
          <Route path="/Reserve" element={<AllReserves />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
