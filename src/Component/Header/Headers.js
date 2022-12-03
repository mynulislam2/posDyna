import React, { useState } from 'react';
import flag from '../../assets/images/flag-01.png';
import { HiOutlinePlus } from "react-icons/hi";
import Swal from 'sweetalert2';
import './Header.css'
import Notifications from '../Notifications/Notifications';
import { Link } from 'react-router-dom';
import SelectLanguage from '../SelectLanguage/SelectLanguage';

const Header = () => {
    const [islShowLanguage, setislShowLanguage] = useState(false)
    const [isShowNotifi, setisShowNotifi] = useState(false)
    const [islShowMessage, setislShowMessage] = useState(false)
    window.addEventListener('click', function (e) {
        if (document.getElementById('slectLang').contains(e.target)
            || document.getElementById('slectLangDiv').contains(e.target)
            || document.getElementById('message').contains(e.target)
            || document.getElementById('notifications').contains(e.target)
            || document.getElementById('Notifications').contains(e.target)
        ) {


        } else {
            setislShowLanguage(false)
            setislShowMessage(false)
            setisShowNotifi(false)
        }
    });
    const HandleMenu = () => {
        console.log("calling")
        if (islShowMessage) {
            setislShowMessage(false)

        }
        if (isShowNotifi) {
            setisShowNotifi(false)

        }
        if (islShowLanguage) {
            setislShowLanguage(false)

        }
    }
    const HandleAddNewOrder = () => {
        Swal.fire({
            title: 'New Order',
            input: 'email',
            inputLabel: 'Email',
            confirmButtonText: "Create",
            showCancelButton: true,
            inputPlaceholder: 'Enter your email address'
        })
    }

    return (
        <div className='flex items-center justify-between h-20 w-ful bg-[#fff] shadow-md px-10 sticky top-0 '>
            <input type="text" placeholder="Search here..." class="input input-bordered w-full max-w-xs" />
            <div className='flex items-center gap-8'>
                <button id="slectLang" onClick={() => {setislShowLanguage(!islShowLanguage);HandleMenu()}} className="relative flex items-center gap-3 h-10 text-lg border border-gray-light  py-2 px-2 rounded-xl text-gray-300">
                    <img src={flag} alt="flag" />
                    <p>En</p>
                </button>
                <SelectLanguage display={islShowLanguage} />
                <button onClick={() => HandleAddNewOrder()} className="flex items-center h-10 gap-1 text-lg  border-1 border border-gray-light py-2 px-2 rounded-xl text-gray-300">
                    <HiOutlinePlus />
                    <p>New Order</p>
                </button>
                <div>
                    <svg id="message" className="relative w-6 h-6"
                     onClick={() =>{setislShowMessage(!islShowMessage);HandleMenu()}
                    } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <Notifications display={islShowMessage} title='All Messages' right="10.64rem" top='5rem' />

                </div>

                <div className='flex content-between gap-1 relative'>
                    <svg id="notifications" className="w-6 h-6" 
                    onClick={() => {setisShowNotifi(!isShowNotifi);HandleMenu()}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                    <div class="badge badge-primary absolute -top-3 left-6">1</div>
                    <Notifications display={isShowNotifi} title='Notifications' right="0rem" top="3.2rem" />
                </div>

                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img className='' src='https://templates.iqonic.design/posdash/html/assets/images/user/1.png' alt="flag" />
                        </div>
                    </label>
                    <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a href='/' className="justify-between">
                                Profile
                            </a>
                        </li>
                        <li><a href='/'>Settings</a></li>
                        <li><Link to='/signIn'>Logout</Link></li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Header;