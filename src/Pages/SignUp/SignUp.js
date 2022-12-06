import React from 'react';
import { Link } from 'react-router-dom';
import signIn from '../../assets/images/signin.png';

const SignUp = () => {
   return (
      <div className='singIn'>
         <div className='block lg:flex items-center justify-between w-[90%] lg:w-[60%] border border-gray min-h-[60%] lg:min-h-[75%] rounded-2xl p-5 lg:p-11'>
            <div className='w-[100%] lg:w-[50%]'>
               <h1 className="text-2xl lg:text-3xl font-bold mb-5 lg:mb-7">Sign Up</h1>
               <p className='text-sm lg:text-lg text-gray mt-3 mb-5'>Create your POSDash account.</p>
               <form action="">
               <div className='mb-4 text-center lg:flex lg:gap-2'>
                  <input type="text" placeholder="First Name" className="input input-bordered w-full mb-4 lg:mb-0" />
                  <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
               </div>
               <div className='mb-4 text-center lg:flex lg:gap-2'>
                  <input type="email" placeholder="Email" className="input input-bordered w-full mb-4 lg:mb-0" />
                  <input type="text" placeholder="Phone No." className="input input-bordered w-full" />
               </div>
               <div className='mb-4 text-center lg:flex lg:gap-2'>
                  <input type="password" placeholder="Password" className="input input-bordered w-full mb-4 lg:mb-0" />
                  <input type="password" placeholder="Confirm Password" className="input input-bordered w-full" />
               </div>
               <div className='mb-4'>
                  <div className='flex items-center gap-3'>
                     <input type="radio" name="radio-4" className="radio radio-accent" />
                     <p className='text-sm lg:text-lg'>I agree with the terms of use</p>
                  </div>
               </div>
               <div className='mb-5'>
                  <button className="btn btn-accent text-[#fff]">Sign Up</button>
               </div>
               <div>
                  <p className='text-sm lg:text-lg'>
                     Already have an Account
                    <Link to='/signIn'><span className='text-accent ml-2'>Sign In</span></Link> 
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

export default SignUp;