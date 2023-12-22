import React from 'react';
import logo from './logo.svg';
import './App.css';
import useSound from 'use-sound';

import boopSfx from './boop.mp3';


function App() {
  const button = document.getElementById('btn');

  const [play] = useSound(boopSfx);
  button?.addEventListener('click', function handleClick(event) {
    console.log('button clicked');
    play();
      });


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        
          <button id="btn">Click</button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
