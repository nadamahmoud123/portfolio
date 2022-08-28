import React , { useState , useEffect } from "react";
import "./Nav.css";
import TypeWriter from 'react-typewriter';
import profilepic from '../img/pp.jpg';
import profilepic2 from '../img/o.jpg';
import profilepic3 from '../img/flower.png';
import profilepic4 from '../img/li.png';
import profilepic5 from '../img/li.png';

import Social from '../components/Social'
import Typewriter from 'typewriter-effect';



const Home = () => {
    
    
     

    return(
        <div className="bgimage">
         



                <Typewriter className="hero_title"
  options={{
    strings: ['I am nada ', 'I am a web developer'],
    autoStart: true,
    loop: true,
  }}
/>


<div className="con2">
<img src={profilepic} alt="ProfilePic" className="profilepic"></img>
<img src={profilepic5} alt="ProfilePic" className="profilepic5"></img>

<img src={profilepic2} alt="ProfilePic" className="profilepic2"></img>

</div>


        <Social />
        </div>
    )
}

export default Home