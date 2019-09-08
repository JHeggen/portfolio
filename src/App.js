import React from 'react';
import Navbar from './navbar.js';
import Header from './header.js';
import About from './about.js';
import Experience from './experience.js';
import Contact from './contact.js';
import Background from './background.js';
import Work from './work.js';

const links = [ 
  {name: 'linkedin', url: 'https://www.linkedin.com/in/jonathan-heggen-8b5637152/'},
  {name: 'github', url: 'https://github.com/JHeggen'}
  //{name: 'twitter', url: 'https://twitter.com/x'},
  //{name: 'medium', url: 'https://medium.com/@x'}
];

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header links={links}/>
      <About/>
      <Experience/>
      <Background />
      <Work/>
      <Contact links={links}/>
    </div>
  );
}

export default App;
