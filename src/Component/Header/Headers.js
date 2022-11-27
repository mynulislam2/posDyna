import React, { useState } from 'react';
import flag from '../../assets/images/flag-01.png';
import { HiOutlinePlus } from "react-icons/hi";
import Swal from 'sweetalert2';
import './Header.css'
import Notifications from '../Notifications/Notifications';

const Header = () => {
const [isShowNotifi,setisShowNotifi] =useState(false)
const [islShowMessage,setislShowMessage] =useState(false)
    const HandleAddNewOrder=()=> {
    Swal.fire({
        title: 'New Order',
        input: 'email',
        inputLabel: 'Email',
        confirmButtonText:"Create",
        showCancelButton: true,
        inputPlaceholder: 'Enter your email address'
    })
}

return (
    <div className='flex items-center justify-between h-20 w-ful shadow-md px-10'>
        <input type="text" placeholder="Search here..." class="input input-bordered w-full max-w-xs" />
        <div className='flex items-center gap-6'>
            <button className="flex items-center gap-3 h-10 text-lg border border-gray-light  py-2 px-2 rounded-xl text-gray-300">
                <img src={flag} alt="flag" />
                <p>En</p>
            </button>
            <button onClick={() => HandleAddNewOrder()} className="flex items-center h-10 gap-1 text-lg  border-1 border border-gray-light py-2 px-2 rounded-xl text-gray-300">
                <HiOutlinePlus />
                <p>New Order</p>
            </button>
            <svg className="relative" onClick={()=>setislShowMessage(!islShowMessage)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <Notifications display={islShowMessage}/>
            <svg className="relative" onClick={()=>setisShowNotifi(!isShowNotifi)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
            <Notifications display={isShowNotifi}/>
            <img className='h-14 rounded-xl' src='https://templates.iqonic.design/posdash/html/assets/images/user/1.png' alt="flag" />
        </div>


    </div>
);
};

export default Header;