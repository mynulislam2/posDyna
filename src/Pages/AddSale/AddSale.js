import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const AddSale = () => {
    const [value, setValue] = useState('');
    console.log(value)
    return (
        <div className=' border border-gray-light rounded-2xl py-10'>
            <div className='px-10'>
                <h4>Add Sale</h4>
            </div>
            <div className="divider"></div>

            <div className='px-10'>

                <div className='flex content-between gap-x-3'>
                    <div className='py-3 w-full'>
                        <p className='mb-2'>Date *</p>
                        <input type="text" placeholder="Date *" class="input input-bordered w-full " />

                    </div>
                    <div className='py-3 w-full'>
                        <p className='mb-2'>Reference No *</p>
                        <input type="text" placeholder="Reference No " class="input input-bordered w-full " />

                    </div>
                </div>
                <div className='flex content-between gap-x-3'>
                    <div className='py-3 w-full'>
                        <p className='mb-2'>Biller *  </p>
                        <select className="select select-bordered w-full ">
                            <option disabled selected>Test Biller</option>

                        </select>
                    </div>
                    <div className='py-3 w-full'>
                        <p className='mb-2'>Customer</p>
                        <input type="text" placeholder="Enter Customer Name" class="input input-bordered w-full " />

                    </div>
                </div>
                <div className='flex content-between gap-x-3'>
                    <div className='py-3 w-full'>
                        <p className='mb-2'>Order Tax *  </p>
                        <select className="select select-bordered w-full ">
                            <option disabled selected>No Text</option>

                        </select>
                    </div>
                    <div className='py-3 w-full'>
                        <p className='mb-2'>Order Discount</p>
                        <input type="text" placeholder="Shipping" class="input input-bordered w-full " />

                    </div>
                </div>
                <div className='py-3'>
                    <p className='mb-2'>Shipping</p>
                    <input type="text" placeholder="Shipping" class="input input-bordered w-full " />

                </div>
                <div className='py-3'>
                    <p className='mb-2'>Attach Document</p>
                    <input type="file" className="file-input file-input-bordered w-full " />
                </div>

                <div className='flex content-between gap-x-3'>
                    <div className='py-3 w-full'>
                        <p className='mb-2'>Sale Status * </p>
                        <select className="select select-bordered w-full ">
                            <option disabled selected>Complete</option>

                        </select>
                    </div>
                    <div className='py-3 w-full'>
                        <p className='mb-2'>Payment Status * </p>
                        <select className="select select-bordered w-full ">
                            <option disabled selected>Pending</option>

                        </select>
                    </div>
                </div>
                <div className='py-3'>
                    <p className='mb-2'> Sale Note *</p>
                    <ReactQuill theme="snow" value={value} onChange={setValue} />
                </div>

                <div className='mt-3'>
                    <button type="reset" class="btn btn-danger">Reset</button>
                    <button type="submit" class="btn btn-primary ml-5 ">Add category</button>
                </div>
            </div>
        </div>
    );
};

export default AddSale;