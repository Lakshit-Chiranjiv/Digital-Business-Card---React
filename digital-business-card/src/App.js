import './style.css';
import React from 'react';
import Image from './components/Image';
import Intro from './components/Intro';
import Buttons from './components/Buttons';
import About from './components/About';
import Socials from './components/Socials';

function App() {

  return (
    <div className="App">
      <Image/>
      <Intro/>
      <Buttons/>
      <About/>
      <Socials/>
    </div>
  );
}

export default App;
