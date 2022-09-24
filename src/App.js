import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Splash from './components/Splash/Splash';
import Rooms from './components/Rooms/Rooms';
import AddRoom from './components/AddRoom/AddRoom';
import DeleteRoom from './components/DeleteRoom/DeleteRoom';
import Reservations from './components/Reservations/Reservations';
import Reserve from './components/Reserve/Reserve';
import Detail from './components/Detail/Detail';
import SignUp from './components/SignUp/SignUp';
import AllReserves from './components/partials/AllReserves';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <div className="container">
        <section className="sidebar">
          <Navbar />
        </section>
        <section className="main-container">
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Rooms/*" element={<Rooms />} />
            <Route path="/Rooms/:id" element={<Detail />} />
            <Route path="/AddRoom" element={<AddRoom />} />
            <Route path="/DeleteRoom" element={<DeleteRoom />} />
            <Route path="/Reservations" element={<Reservations />} />
            <Route path="/Reserve/:room_id" element={<Reserve />} />
            <Route path="/Reserve" element={<AllReserves />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
