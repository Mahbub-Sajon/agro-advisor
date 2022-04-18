import React from 'react';
import useServices from '../../hooks/useServices';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    const [services, setServices] = useServices();
    return (
        <div>
            <div className='max-w-screen-xl m-auto mb-20'>
                <Banner></Banner>
            </div>
            <h1 className='text-lime-800 text-3xl font-bold pb-4'>My Services</h1>
           <div className='grid md:grid-cols-3 mb-10 gap-6'>
               {
                  services.map(service => <HomeServices
                  key={service.id}
                  service = {service}
                  ></HomeServices>) 
               }
           </div>
        </div>
    );
};

export default Home;
