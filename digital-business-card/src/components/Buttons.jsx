import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Buttons = ({displayLightMode}) => {
    return (
        <div className="buttons">
          <a href="#"><button className={!displayLightMode?"email-btn":"email-btn btnborder"}><MdEmail className='btn-icon'/> Email</button></a>
          <a href="#"><button className="linkedin-btn"><FaLinkedin className='btn-icon'/> Linked In</button></a>
        </div>
      );
};

export default Buttons;
