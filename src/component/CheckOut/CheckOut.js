import React from 'react';

const CheckOut = () => {
    const handleCreateUser = event => {
        event.preventDefault();
    }
    return (
        <div>
         <form onSubmit={handleCreateUser}>

<div className="input-group">
     <label className='block text-xl' htmlFor="email">Your Name</label>
     <input className='w-3/4 h-12 border border-black mb-4 rounded-md' required  type="text" name='name' />
     </div>


     <div className="input-group">
     <label className='block text-xl' htmlFor="password">Address</label>
     <input  className='w-3/4 h-12 border border-black mb-4 rounded-md' required type="text" name='address' />
     </div>


     <div className="input-group">
     <label className='block text-xl' htmlFor="confirm-password"> Contact</label>
     <input  className='w-3/4 h-12 border border-black mb-4 rounded-md' required  type="text" name='contact' />
     </div>
   

  <input className='w-32 h-12 bg-green-400 rounded-md mb-4 font-bold hover:bg-lime-500 cursor-pointer' type="submit" value="Submit" />


</form>
        </div>
    );
};

export default CheckOut;