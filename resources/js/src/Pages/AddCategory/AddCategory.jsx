import React from 'react';

const AddCategory = () => {
    return (
        <div className=' border border-gray-light rounded-2xl py-10'>
            <div className='px-10'>
                <div>
                    <h4>Add category</h4>
                </div>

                <div className='py-3'>
                    <p className='mb-2'>Image</p>
                    <input type="file" className="file-input file-input-bordered w-full " />
                </div>
                <div className='py-3'>
                    <p className='mb-2'>Product Name *</p>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />

                </div>
                <div className='py-3'>
                    <p className='mb-2'>Category * </p>
                    <select className="select select-bordered w-full ">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
                <div className='py-3'>
                    <p className='mb-2'>Code *</p>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                </div>
                <div >
                    <button type="reset" class="btn btn-danger">Reset</button>
                    <button type="submit" class="btn btn-primary ml-5 ">Add category</button>
                </div>
            </div>
        </div>
    );
};

export default AddCategory;