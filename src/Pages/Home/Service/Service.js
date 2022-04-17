import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, image, description, price } = service;
    return (
        <div className='service'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>price:{price}</p>
            <p>{description}</p>
            <button className='check-btn'>
                <p>CheckOut</p>
            </button>
        </div>
    );
};

export default Service;