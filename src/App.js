import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Splash from './components/Splash/Splash';
import Rooms from './components/Rooms/Rooms';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <header className="App-header">
            <h1>Yellow Room</h1>
            <Header />
          </header>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/Rooms" element={<Rooms />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
