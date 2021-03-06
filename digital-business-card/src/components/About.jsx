import React from 'react';

const About = ({displayLightMode}) => {
    return (
        <div className="about">
          <div className="about-div">
            <h3 className={!displayLightMode?"lgt-txt":"drk-txt"}>About</h3>
            <p className={displayLightMode?'drk-p':''}>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
          </div>
          
          <div className="interest-div">
            <h3 className={!displayLightMode?"lgt-txt":"drk-txt"}>Interests</h3>
            <p className={displayLightMode?'drk-p':''}>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
          </div>
        </div>
      );
};

export default About;
