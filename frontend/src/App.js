import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Lobby from './components/lobby.jsx'
import Room from './components/room.jsx'
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
				<Route path="lobby" element={<Lobby />}/>
				<Route path="room" element={<Room />}/>
			</Routes>
    </BrowserRouter>
  );
}
/*
<!--<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>-->
*/
/*
*/
export default App;
