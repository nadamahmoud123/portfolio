import React from "react";
import Social from "./Social";
import con1 from '../img/con1.png';
import con from '../img/li.png';


const Contact = () => {
    return(
        <div className="condiv">
              <div className="conbc"></div>
              <img src={con1} alt="ProfilePic" className="con1"></img>
              <img src={con} alt="ProfilePic" className="con"></img>

        <h1 className="subtopic">Contact Me</h1>
        <h3>Email  :   nm5364275@gmail.com</h3>
        <h3>Instagram   :   @nadaelawdy</h3>
        <Social />
       
        </div>
    )
}

export default Contact