import React from 'react';
import { FaTwitterSquare,FaFacebookSquare,FaInstagramSquare,FaGithubSquare } from "react-icons/fa";

const Socials = () => {
    return (
        <div className="socials">
          <a href="#"><FaTwitterSquare className='icon'/></a>
          <a href="#"><FaFacebookSquare className='icon'/></a>
          <a href="#"><FaInstagramSquare className='icon'/></a>
          <a href="#"><FaGithubSquare className='icon'/></a>
        </div>
      );
};

export default Socials;
