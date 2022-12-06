import React from 'react';
import { Link } from 'react-router-dom';
import signIn from '../../assets/images/signin.png';
import './SignIn.css';

const SignIn = () => {
   return (
      <div className='singIn'>
         <div className='block lg:flex items-center justify-between w-[90%] lg:w-[60%] border border-gray min-h-[50%] lg:min-h-[75%] rounded-2xl p-5 lg:p-11'>
            <div className='w-[100%] lg:w-[50%]'>
               <h1 className="text-2xl lg:text-3xl font-bold mb-5 lg:mb-7">Sign In</h1>
               <p className='text-sm lg:text-lg text-gray mt-3 mb-5'>Login to stay connected.</p>
               <form action="">
               <div className='mb-6 lg:mb-8 text-center'>
                  <input type="email" placeholder="Email" className="input input-bordered w-full" />
               </div>
               <div className='mb-6 lg:mb-8 text-center'>
                  <input type="password" placeholder="Password" className="input input-bordered w-full" />
               </div>
               <div className='mb-6 lg:mb-8 flex items-center justify-between'>
                  <div className='flex items-center gap-1 lg:gap-3'>
                     <input type="radio" name="radio-4" className="radio radio-accent" />
                     <p className='text-sm lg:text-lg'>Remember Me</p>
                  </div>
                  <div>
                     <p className='text-xs lg:text-lg text-accent'>Forget Password?</p>
                  </div>
               </div>
               <div className='mb-5'>
                  <button className="btn btn-accent text-[#fff]">Sign In</button>
               </div>
               <div>
                  <p className='text-base lg:text-lg'>
                     Create an Account
                    <Link to='/signUp'><span className='text-accent ml-2' >Sign Up</span></Link> 
                  </p>
               </div>
               </form>
            </div>
            <div className='lg:w-[40%] hidden lg:block'>
               <img className='w-full' src={signIn} alt="login" />
            </div>
         </div>
      </div>
   );
};

export default SignIn;