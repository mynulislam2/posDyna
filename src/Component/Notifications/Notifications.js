import React from 'react';

const Notifications = ({display, title,right,top}) => {
    return (
        <div style={{right:right,top:top}} id="Notifications"  className={`${display?'block ':' hidden'}  card w-80 bg-base-100 border border-gray-light top-20 absolute text-primary-content`}>
            <div class="card-body text-gray-dark">
                <div className='flex justify-between items-center w-full border-b border-gray-light pb-4'>
                    <h2 class="card-title">{title}</h2>
                    <div class="badge badge-primary badge-outline">1</div>

                </div>
                <div class="flex  items-center justify-between py-3 border-b border-gray-light pb-4">
                    <div class="w-10 rounded-full">
                        <img className='rounded-full'  src="https://templates.iqonic.design/posdash/html/assets/images/user/01.jpg" alt="01" />
                    </div>
                    <div >
                        <div class="flex items-center gap-1 justify-between">
                            <h6 class="mb-0">Emma Watson</h6>
                            <small className=''><b>12 : 47 pm</b></small>
                        </div>
                        <small class="mb-0">Lorem ipsum dolor sit amet</small>
                    </div>
                </div>
                <div class="flex  items-center justify-between py-3  pb-4">
                    <div class="w-10 rounded-full">
                        <img className='rounded-full' src="https://templates.iqonic.design/posdash/html/assets/images/user/02.jpg" alt="01" />
                    </div>
                    <div >
                        <div class="flex items-center justify-between">
                            <h6 class="mb-0">Emma Watson</h6>
                            <small className=''><b>12 : 47 pm</b></small>
                        </div>
                        <small class="mb-0">Lorem ipsum dolor sit amet</small>
                    </div>
                </div>

                <div class="card-actions justify-end">
                    <button class="btn w-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Notifications;