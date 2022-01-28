import './style.css';
import React,{useState} from 'react';
import Image from './components/Image';
import Intro from './components/Intro';
import Buttons from './components/Buttons';
import About from './components/About';
import Socials from './components/Socials';

function App() {

  const [displayLightMode,setDisplayLightMode] = useState(false);

  const modeHandler = () =>{
      setDisplayLightMode((x) => !x);
  }

  return (
    <div className={!displayLightMode?"App lgt-txt":"App drk-txt"}>
      <Image modeHandler={modeHandler} displayLightMode={displayLightMode}/>
      <Intro displayLightMode={displayLightMode}/>
      <Buttons displayLightMode={displayLightMode}/>
      <About displayLightMode={displayLightMode}/>
      <Socials/>
    </div>
  );
}

export default App;
