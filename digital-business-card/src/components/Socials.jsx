import React from 'react';
import { FaTwitterSquare,FaFacebookSquare,FaInstagramSquare,FaGithubSquare } from "react-icons/fa";

const Socials = () => {
    return (
        <div className="socials">
          <FaTwitterSquare className='icon'/>
          <FaFacebookSquare className='icon'/>
          <FaInstagramSquare className='icon'/>
          <FaGithubSquare className='icon'/>
        </div>
      );
};

export default Socials;
