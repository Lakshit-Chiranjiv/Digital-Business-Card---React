import React from 'react';

const Intro = ({displayLightMode}) => {
    return (
        <div className="intro">
          <h2 className={!displayLightMode?"lgt-txt":"drk-txt"}>Lakshit Chiranjiv Sagar</h2>
          <h4>Full Stack Developer</h4>
          <a href="#" className={!displayLightMode?"lgt-txt":"drk-txt"}>My Website</a>
        </div>
      );
};

export default Intro;
