import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Lobby from './components/lobby.jsx'
import Room from './components/room.jsx'
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
				<Route path="/" element={<Lobby />}/>
				<Route path="room" element={<Room />}/>
			</Routes>
    </BrowserRouter>
  );
}
export default App;
