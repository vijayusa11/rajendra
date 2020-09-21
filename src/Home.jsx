import React from 'react';
import web from '../src/Images/rajnew.jpg';
import { NavLink } from 'react-router-dom';
import Common from './Common';

const Home = () =>{
    return(
        <>
            <Common name='Grow your business skills with' imgsrc={web} visit='/service' btname='Get Started' lname='Loco Language' />
        </>
    );
}

export default Home;