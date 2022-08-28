import React from "react";
import profilepic6 from '../img/a.png';
import "./Nav.css";
import profilepic8 from '../img/li.png';


const About = () => {
    return(
    
       <div>
           <div className="back">
           <img src={profilepic8} alt="ProfilePic" className="profilepic8"></img>

            <img src={profilepic6} alt="ProfilePic6" className="profilepic6"></img>
            </div>
            <div className="condiv">
        <h1 className="subtopic">About Me</h1>
        <h4>Hey there,</h4>
        <h1>I'm nada</h1>
        <h3>Frontend <u>Developer</u> </h3>
        <br></br>
        <p>I started my journey in the world of computers from an young age,
        now I’m 20 years old, Pursuing my Computer Science Degree in
         University.  Web development is my center of interest, i always
        love the idea of cross-platform development, 1-n one code base deploy into almost
        any platform, which web technology like Javascript enables me to do. I also like
        creating Interactive UI components for better UX  and share those desgin and codes
        to the world through Github and Instagram.
        </p>
        </div>
        </div>
    )
}

export default About