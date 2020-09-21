import React from 'react';
import web from '../src/Images/raj.jpg';
import { NavLink } from 'react-router-dom';
import Common from './Common';

const About = () =>{
    return(
        <>
            <Common name='Welcome to About page of' imgsrc={web} visit='/contact' btname='Contact Now' lname='Rajlaxmi Villa' />
        </>
    );
}

export default About;