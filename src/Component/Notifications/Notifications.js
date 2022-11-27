import React from 'react';

const Notifications = ({display}) => {
    return (
            <div className={`${display?'block':"hidden"} card w-80 bg-primary top-20 absolute text-primary-content`}>
                <div class="card-body">
                    <h2 class="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn">Buy Now</button>
                    </div>
                </div>
            </div>
    );
};

export default Notifications;