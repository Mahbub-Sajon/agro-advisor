import React from 'react';
import img from '../../images/pp/pp.jpg'

const About = () => {
    return (
        <div>
            <img className='mx-auto w-64 h-64 rounded-sm my-3' src={img} alt="" />
            <p className='font-bold text-xl'>About Me!</p>
            <p>My Name is Mahbub Sajon! Currently I am learning web development! Right now I am working with React JS. Basically React JS is making it easier for us to code! My current goal is to get a job or an intern within 2 or 3 months. To get that I am ready to learn anything doesn't matter how hard that thing is! I believe hard work always pays off!  </p>
        </div>
    );
};

export default About;