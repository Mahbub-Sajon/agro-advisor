import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import {MenuIcon, XIcon} from '@heroicons/react/solid'
import img from '../../images/agro.jpg'

const Navigation = () => {
    const [open, setOpen] = useState(false);
    return (
        <div  className='bg-lime-200 p-4'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
               { open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
           <div className='md:flex justify-center'>
            <img className=' rounded-md w-16 h-16' src={img} alt="" />
           <nav className={`md:flex justify-center bg-lime-200 w-full duration-500 ease-in absolute md:static ${open ? 'top-6' : 'top-[-120px]'}`}>
                <div className='mr-16'><CustomLink to="/">HOME</CustomLink></div>
               <div className='mr-16'> <CustomLink to="/blogs">BLOGS</CustomLink></div>
               <div className='mr-16'> <CustomLink to="/checkout">CHECK-OUT</CustomLink></div>
                <div className='mr-16'><CustomLink to="/signup">SIGNUP</CustomLink></div>
                <div className='mr-16'><CustomLink to="/login">LOGIN</CustomLink></div>
               <div className='mr-16'> <CustomLink to="/about">ABOUT</CustomLink></div>
            </nav>
           </div>
        </div>
    );
};

export default Navigation;