import React from 'react';

const Notifications = ({ display }) => {
    return (
        <div tabIndex='1' className={`${display ? 'block' : "hidden"} card w-80 bg-base-100 border border-gray-light top-20 absolute text-primary-content`}>
            <div class="card-body text-gray-dark">
                <div className='flex justify-between items-center w-full border-b border-gray-light pb-4'>
                    <h2 class="card-title">All Messages!</h2>
                    <div class="badge badge-primary badge-outline">1</div>

                </div>
                <div class="flex  items-center justify-between py-3 border-b border-gray-light pb-4">
                    <div class="">
                        <img class=" h-14 rounded-xl" src="https://templates.iqonic.design/posdash/html/assets/images/user/01.jpg" alt="01" />
                    </div>
                    <div >
                        <div class="flex items-center justify-between">
                            <h6 class="mb-0">Emma Watson</h6>
                            <small className='ml-4'><b>12 : 47 pm</b></small>
                        </div>
                        <small class="mb-0">Lorem ipsum dolor sit amet</small>
                    </div>
                </div>
                <div class="flex  items-center justify-between py-3  pb-4">
                    <div class="">
                        <img class=" h-14 rounded-xl" src="https://templates.iqonic.design/posdash/html/assets/images/user/02.jpg" alt="01" />
                    </div>
                    <div >
                        <div class="flex items-center justify-between">
                            <h6 class="mb-0">Emma Watson</h6>
                            <small className='ml-4'><b>12 : 47 pm</b></small>
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