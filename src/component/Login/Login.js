import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-2/3  border-2 border-green-800 rounded-md mx-auto my-2'>
           <h1 className='text-3xl font-bold mb-4'>Login</h1>

          <form>

          <div className="input-group">
               <label className='block text-xl' htmlFor="email">Email</label>
               <input className='w-3/4 h-12 border border-black mb-4 rounded-md' required type="email" name='email' />
               </div>


               <div className="input-group">
               <label className='block text-xl' htmlFor="password">Password</label>
               <input className='w-3/4 h-12 border border-black mb-4 rounded-md' required type="password" name='password' />
               </div>

            <input className='w-32 h-12 bg-green-400 rounded-md mb-4 font-bold hover:bg-lime-500 cursor-pointer' type="submit" value="Login" />


          </form>

         
         
          <p className='mb-4 text-xl'>
              Don't have any account? <Link className='text-green-400 hover:text-lime-500' to="/signup"> Create an account</Link>
          </p>
          <div className='flex justify-between'>
              <p className='block w-1/3 h-0.5 ml-20 mt-2  bg-black'>
                  <hr />
              </p>
              <p className='mr-5 ml-5 mb-4'>
                  Or
              </p>
              <p className='block w-1/3 h-0.5 mr-20 mt-2 bg-black'>
                  <hr />
              </p>
          </div>

          <button>Sign</button>


           
        </div>
    );
};

export default Login;