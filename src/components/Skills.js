import React from 'react'
import Social from './Social';

import SkillBar from 'react-skillbars';
import ski from '../img/li.png';
function Skills() {
    
  const skills = [
    {type: "HTML", level: 99},
    {type: "CSS", level: 98},
    {type: "JavaScript", level: 87},
   
    {type: "BootStrap", level: 90},

  
    {type: "GitHub", level: 85, },
    {type: "React.js", level: 70, },
    {type: "React redux", level: 70, },
    {type: "redux toolkit", level: 50, },
  ];
  const colors = {
    bar: " #808080",
    title: {
      text: "#000",
      background: "#faebd7"
    }
  };
  return (
    <div>
    <div className='skilld'>
      <div className='bcskill'></div>
      <img src={ski} alt="ProfilePic" className="ski"></img>
      <p className='skillp'>
      Senior front-end developer with 1+ years of experience designing and building responsive web design and mobile apps in the financial industry.
       Proficient with CSS and JS Frameworks , with extensive knowledge of react .
        Notable achievements include boosting the conversion rate of an existing website by 80% with improved code and design.
      </p>
    <div className='skilldiv'>




<SkillBar skills={skills} colors={colors}/>



    </div>
   
    </div>
    <div className='skillsocial'>  < Social /></div>
  
    </div>
  )
}

export default Skills