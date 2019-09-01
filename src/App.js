import React from 'react';
import Navbar from './navbar.js';
import Header from './header.js';
import About from './about.js';
import Experience from './experience.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Experience/>
    </div>
  );
}

export default App;
