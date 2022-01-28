import React from 'react';
import SelfImage from './../assets/self.jpeg';
import { MdLightMode,MdNightlight } from "react-icons/md";

const Image = ({displayLightMode,modeHandler}) => {



    return (
        <div className="image">
            <div className="modebg"></div>
            {!displayLightMode && <span className='lightmode'><MdLightMode onClick={modeHandler}/></span>}
            {displayLightMode && <span className="darkmode"><MdNightlight onClick={modeHandler}/></span>}
            {/* <button>Light</button> */}
            <img src={SelfImage} alt="self-image" />
        </div>
      );
};

export default Image;
