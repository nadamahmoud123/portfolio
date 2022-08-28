import React from "react";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Skills from './components/Skills';


const App = () =>{
  return(
  <div>
       <Router>
   <Nav />


     <Routes>
       <Route exact  path="/" element ={<Home />} />
       <Route exact path="/about" element ={<About />}  />
       <Route exact path="/contact" element ={<Contact />} />
       <Route exact path="/education" element ={<Education />} />
       <Route exact path="/skills" element ={<Skills />} />
       </Routes>
       
   </Router>
   </div>
  )
}

export default App
