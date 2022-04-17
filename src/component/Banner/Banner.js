import React from 'react';
import img1 from '../../images/banner/banner (1).png';
import img2 from '../../images/banner/banner (2).png';
import img3 from '../../images/banner/banner (3).png';
import img4 from '../../images/banner/banner (4).png';

const Banner = () => {
    
    return (
        <div className='w-full select-none relative aspect-w-16 aspect-h-9'>
          <img src={img3} alt="" />
          <div className='absolute w-full top-1/2 transform translate-y-1/2 px-3'>
            <p className='text-white'>Hello</p>
            <button>Go</button>
          </div>
        </div>
    );
};

export default Banner;