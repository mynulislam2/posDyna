import React from 'react';
import signIn from '../../assets/images/signin.png';
import './SignIn.css';

const SignIn = () => {
   return (
      <div className='singIn'>
         <div className='flex items-center justify-between w-[60%] border border-gray h-[70%] rounded-2xl p-11'>
            <div className='w-[50%]'>
               <h1 className="text-4xl font-bold mb-7">Sign In</h1>
               <p className='text-lg text-gray mt-3 mb-5'>Login to stay connected.</p>
               <form action="">
               <div className='mb-8'>
                  <input type="email" placeholder="Email" className="input input-bordered w-full" />
               </div>
               <div className='mb-8'>
                  <input type="password" placeholder="Password" className="input input-bordered w-full" />
               </div>
               <div className='mb-8 flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                     <input type="radio" name="radio-4" className="radio radio-accent" />
                     <p className='text-lg'>Remember Me</p>
                  </div>
                  <div>
                     <p className='text-lg text-accent'>Forget Password?</p>
                  </div>
               </div>
               <div className='mb-5'>
                  <button className="btn btn-accent text-[#fff]">Sign In</button>
               </div>
               <div>
                  <p className='text-lg'>
                     Create an Account
                     <span className='text-accent ml-2'>Sign Up</span>
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

export default SignIn;