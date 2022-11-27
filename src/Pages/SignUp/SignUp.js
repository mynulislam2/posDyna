import React from 'react';
import { Link } from 'react-router-dom';
import signIn from '../../assets/images/signin.png';

const SignUp = () => {
   return (
      <div className='singIn'>
         <div className='flex items-center justify-between w-[55%] border border-gray h-[80%] rounded-2xl p-11'>
            <div className='w-[50%]'>
               <h1 className="text-4xl font-bold mb-7">Sign Up</h1>
               <p className='text-lg text-gray mt-3 mb-5'>Create your POSDash account.</p>
               <form action="">
               <div className='mb-4 flex gap-2'>
                  <input type="text" placeholder="First Name" className="input input-bordered w-full" />
                  <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
               </div>
               <div className='mb-4 flex gap-2'>
                  <input type="email" placeholder="Email" className="input input-bordered w-full" />
                  <input type="text" placeholder="Phone No." className="input input-bordered w-full" />
               </div>
               <div className='mb-4 flex gap-2'>
                  <input type="password" placeholder="Password" className="input input-bordered w-full" />
                  <input type="password" placeholder="Confirm Password" className="input input-bordered w-full" />
               </div>
               <div className='mb-4'>
                  <div className='flex items-center gap-3'>
                     <input type="radio" name="radio-4" className="radio radio-accent" />
                     <p className='text-lg'>I agree with the terms of use</p>
                  </div>
               </div>
               <div className='mb-5'>
                  <button className="btn btn-accent text-[#fff]">Sign Up</button>
               </div>
               <div>
                  <p className='text-lg'>
                     Already have an Account
                    <Link to='/signIn'><span className='text-accent ml-2'>Sign In</span></Link> 
                  </p>
               </div>
               </form>
            </div>
            <div className='w-[40%]'>
               <img className='w-full' src={signIn} alt="login" />
            </div>
         </div>
      </div>
   );
};

export default SignUp;