import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, image, description, price } = service;
    return (
        <div id='services' className='service'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>price:{price}</p>
            <p>{description}</p>
            <button className='check-btn'>
                <Link to='/checkout'>CheckOut</Link>
            </button>
        </div>
    );
};

export default Service;