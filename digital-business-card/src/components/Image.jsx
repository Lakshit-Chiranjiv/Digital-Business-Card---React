import React from 'react';
import SelfImage from './../assets/self.jpeg';
// import { MdLightMode,MdNightlight } from "react-icons/md";

const Image = () => {
    return (
        <div className="image">
            {/* <span className='lightmode'><MdLightMode/></span>
            <span className="darkmode"><MdNightlight/></span> */}
            {/* <button>Light</button> */}
            <img src={SelfImage} alt="self-image" />
        </div>
      );
};

export default Image;
