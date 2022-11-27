import React from 'react';

const SelectLanguage = ({ display }) => {
    return (
        <div className={`${display ? 'block' : "hidden"} card w-80 bg-base-100 border border-gray-light top-20 absolute text-primary-content`}>
            <div class="card-body text-gray-dark">
                <div className='flex justify-between items-center w-full pb-4'>
                    <h2 class="card-title">Select Your Language</h2>
                    <div class="badge badge-primary badge-outline">1</div>

                </div>
                <div >
                    <a class="block py-2 w-full" href="#"><img src="https://templates.iqonic.design/posdash/html/assets/images/small/flag-02.png" alt="img-flag" class="max-w-full inline-block h-auto mr-2"/>French</a>
                    <a class="block py-2 w-full" href="#"><img src="https://templates.iqonic.design/posdash/html/assets/images/small/flag-03.png" alt="img-flag" class="max-w-full inline-block h-auto mr-2"/>Spanish</a>
                    <a class="block py-2 w-full" href="#"><img src="https://templates.iqonic.design/posdash/html/assets/images/small/flag-04.png" alt="img-flag" class="max-w-full inline-block h-auto mr-2"/>Italian</a>
                    <a class="block py-2 w-full" href="#"><img src="https://templates.iqonic.design/posdash/html/assets/images/small/flag-05.png" alt="img-flag" class="max-w-full inline-block h-auto mr-2"/>German</a>
                    <a class="block py-2 w-full" href="#"><img src="https://templates.iqonic.design/posdash/html/assets/images/small/flag-06.png" alt="img-flag" class="max-w-full inline-block h-auto mr-2"/>Japanese</a>
                </div>



            </div>
        </div>
    );
};

export default SelectLanguage;