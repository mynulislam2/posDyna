import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between h-10'>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <img className='h-auto' src='https://templates.iqonic.design/posdash/html/assets/images/user/1.png' alt=""/>
        </div>
    );
};

export default Header;