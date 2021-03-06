import React from 'react';
import img3 from '../../images/banner/banner (3).png';


const Banner = () => {
    
    return (
        <div className='w-full select-none relative aspect-w-16 aspect-h-9'>
          <img src={img3} alt="" />
          <div className='absolute w-full top-1/2 transform translate-y-1/2 px-3'>
            <p className='text-white text-xl font-bold mb-5'>AGRO-ADVISOR is an individual site where you can find the solution of your agricultural problems through me!</p>
            <button className='w-32 h-12 bg-green-600 rounded-md font-bold hover:bg-green-800'>Keep Exploring</button>
          </div>
        </div>
    );
};

export default Banner;