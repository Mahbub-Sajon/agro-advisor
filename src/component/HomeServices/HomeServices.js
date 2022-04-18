import React from 'react';

const HomeServices = (props) => {
    const {name, img, price, description} = props.service;
    return (
        <div className='border-2 border-lime-800 rounded-lg p-2'>
        <img className='w-full h-80 rounded-lg' src={img} alt="" />
        <h1> <span className='font-bold text-lime-800'>Name:</span>  {name}</h1>
        <h4> <span className='font-bold text-lime-800'>Service Cost:</span> BDT {price}</h4>
        <p><span className='font-bold text-lime-800'>Description:</span> {description}</p>
    </div>
    );
};

export default HomeServices;