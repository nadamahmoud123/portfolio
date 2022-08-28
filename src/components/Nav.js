import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import profilepic3 from '../img/flower.png';


const Nav = () => {
    return(
       
    <nav className="nav-links">
        <h3 className="logo">portfolio  <img src={profilepic3} alt="ProfilePic" className="profilepic3"></img></h3>
   
            <NavLink to ="/"><li>Home</li></NavLink>
            <NavLink to ="/About"><li>About</li></NavLink>
            <NavLink to ="/Contact"><li>Contact</li></NavLink>
            <NavLink to ="/Education"><li>Education</li></NavLink>
            <NavLink to ="/Skills"><li>Skills</li></NavLink>
    
    </nav>
 
    )
}

export default Nav