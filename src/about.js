import React from 'react';
import Intro from './about/intro.js';
import Coding from './about/coding.js';

function About() {
  return (
    <div id="about">
        <div className="container content-lg">
            <Intro/>
            <Coding/>
        </div>
    </div>
  );
}

export default About;
