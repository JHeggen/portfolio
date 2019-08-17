import React from 'react';
import logo from './logo.svg';
import Navbar from './navbar.js';
import Header from './header.js';
//import $ from 'jquery'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <div className="App-header">
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
      </div>
    </div>
  );
}

export default App;
