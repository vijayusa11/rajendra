import React from 'react';
import web from '../src/Images/raj.jpg';
import { NavLink } from 'react-router-dom';
import Sdata from './Sdata';

const Card = (props) =>{
    return (
    <>  
                    
                        <div className='col-md-3 col-10 mx-auto'>
                            <div className="card" style={{width: '15rem', height: '5rem'}}>
                                <img src={props.imgsrc} style={{height: '10rem'}} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{props.title}</h5>
                                    <p className="card-text">{props.details}</p>
                                    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
                                </div>
                            </div>
                        </div>
                   
    </>
    );
}

export default Card;