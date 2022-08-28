import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import edu from '../img/li.png';
import edu22 from '../img/edu2.png';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            
                <div className='bcedu'></div>
                <img src={edu22} alt="ProfilePic" className="edu22"></img>
                <img src={edu} alt="ProfilePic" className="edu"></img>
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Computer Science" where="Menofia University" from="July 2021" to="Present"/>
            <Widecard title="HSC" where="Higher Secondary School" from="2018" to="2021"/>
            </div>
            )
        }
    }
    
export default Education
    