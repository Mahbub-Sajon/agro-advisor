import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    
    const [
        signInWithEmailAndPassword,
        user,
        error
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


      const navigate = useNavigate();

      const location = useLocation();
      const from = location.state?.from?.pathname || '/'


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    if(user){
        navigate(from, {replace:true});
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }

    const resetPassword = async() => {
        await sendPasswordResetEmail(email);
        alert('Please Check Your Mail To Reset Password');
    }


    return (
        <div className='w-2/3  border-2 border-green-800 rounded-md mx-auto my-2'>
           <h1 className='text-3xl font-bold mb-4'>Login</h1>

          <form onSubmit={handleUserSignIn}>

          <div className="input-group">
               <label className='block text-xl' htmlFor="email">Email</label>
               <input onBlur={handleEmailBlur} className='w-3/4 h-12 border border-black mb-4 rounded-md' required type="email" name='email' />
               </div>


               <div className="input-group">
               <label className='block text-xl' htmlFor="password">Password</label>
               <input onBlur={handlePasswordBlur} className='w-3/4 h-12 border border-black mb-4 rounded-md' required type="password" name='password' />
               </div>
               <p className='text-red-800'>{error?.message}</p>

            <input className='w-32 h-12 bg-green-400 rounded-md mb-4 font-bold hover:bg-green-600 cursor-pointer' type="submit" value="Login" />


          </form>

         
         
          <p className='mb-4 text-xl'>
              Don't have any account? <Link className='text-green-400 hover:text-green-600' to="/signup"> Create an account</Link>
          </p>


          <p className='mb-4 text-xl'>
              Forgot Password? <Link className='text-green-400 hover:text-green-600' to="/signup" onClick={resetPassword}> Reset Password</Link>
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

          <div>
              <SocialLogin></SocialLogin>
          </div>


           
        </div>
    );
};

export default Login;