import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Splash from './components/Splash/Splash';
import Rooms from './components/Rooms/Rooms';
import AddRoom from './components/AddRoom/AddRoom';
import DeleteRoom from './components/DeleteRoom/DeleteRoom';
import Reservations from './components/Reservations/Reservations';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1>Yellow Room</h1>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/AddRoom" element={<AddRoom />} />
          <Route path="/DeleteRoom" element={<DeleteRoom />} />
          <Route path="/Reservations" element={<Reservations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
