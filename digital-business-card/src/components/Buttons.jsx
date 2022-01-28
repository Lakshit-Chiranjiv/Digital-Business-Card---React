import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Buttons = () => {
    return (
        <div className="buttons">
          <button className="email-btn"><MdEmail className='btn-icon'/> Email</button>
          <button className="linkedin-btn"><FaLinkedin className='btn-icon'/> Linked In</button>
        </div>
      );
};

export default Buttons;
