import React from 'react';
import { AiOutlineEye, AiFillEdit, AiFillDelete } from 'react-icons/ai';

const SaleTable = () => {
   return (
      <div className="overflow-x-auto w-full border rounded-lg border-gray-light mb-5">
         <table className="table w-full">
            <thead>
               <tr>
               <th>
                  <label>
                     <input type="checkbox" className="checkbox" />
                  </label>
               </th>
               <th>Date</th>
               <th>Customer</th>
               <th>Total</th>
               <th>Paid</th>
               <th>Status</th>
               <th>Biller</th>
               <th>Tax</th>
               <th>Action</th>
               </tr>
            </thead>
            <tbody>
               <tr>
               <th>
                  <label>
                     <input type="checkbox" className="checkbox" />
                  </label>
               </th>
               <td>01 jan 2020</td>
               <td>Bill Yerds</td>
               <td>38.50</td>
               <td>38.50</td>
               <td><p className='bg-green opacity-75 text-[#fff] w-14 rounded-2xl text-center'>Paid</p></td>
               <td>Yerds</td>
               <td>1.3</td>
               <th>
                  <div className='flex items-center gap-2'>
                     <button className="bg-info outline-none p-2 rounded-lg text-[#fff]"><AiOutlineEye size={'20px'} /></button>
                     <button className="bg-success outline-none p-2 rounded-lg text-[#fff]"><AiFillEdit size={'20px'} /></button>
                     <button className="bg-error outline-none p-2 rounded-lg text-[#fff]"><AiFillDelete size={'20px'} /></button>
                  </div>
               </th>
               </tr>
               <tr>
               <th>
                  <label>
                     <input type="checkbox" className="checkbox" />
                  </label>
               </th>
               <td>01 jan 2020</td>
               <td>Bill Yerds</td>
               <td>38.50</td>
               <td>38.50</td>
               <td><p className='bg-green opacity-75 text-[#fff] w-14 rounded-2xl text-center'>Paid</p></td>
               <td>Yerds</td>
               <td>1.3</td>
               <th>
                  <div className='flex items-center gap-2'>
                     <button className="bg-info outline-none p-2 rounded-lg text-[#fff]"><AiOutlineEye size={'20px'} /></button>
                     <button className="bg-success outline-none p-2 rounded-lg text-[#fff]"><AiFillEdit size={'20px'} /></button>
                     <button className="bg-error outline-none p-2 rounded-lg text-[#fff]"><AiFillDelete size={'20px'} /></button>
                  </div>
               </th>
               </tr>
               <tr>
               <th>
                  <label>
                     <input type="checkbox" className="checkbox" />
                  </label>
               </th>
               <td>01 jan 2020</td>
               <td>Bill Yerds</td>
               <td>38.50</td>
               <td>38.50</td>
               <td><p className='bg-green opacity-75 text-[#fff] w-14 rounded-2xl text-center'>Paid</p></td>
               <td>Yerds</td>
               <td>1.3</td>
               <th>
                  <div className='flex items-center gap-2'>
                     <button className="bg-info outline-none p-2 rounded-lg text-[#fff]"><AiOutlineEye size={'20px'} /></button>
                     <button className="bg-success outline-none p-2 rounded-lg text-[#fff]"><AiFillEdit size={'20px'} /></button>
                     <button className="bg-error outline-none p-2 rounded-lg text-[#fff]"><AiFillDelete size={'20px'} /></button>
                  </div>
               </th>
               </tr>
               <tr>
               <th>
                  <label>
                     <input type="checkbox" className="checkbox" />
                  </label>
               </th>
               <td>01 jan 2020</td>
               <td>Bill Yerds</td>
               <td>38.50</td>
               <td>38.50</td>
               <td><p className='bg-green opacity-75 text-[#fff] w-14 rounded-2xl text-center'>Paid</p></td>
               <td>Yerds</td>
               <td>1.3</td>
               <th>
                  <div className='flex items-center gap-2'>
                     <button className="bg-info outline-none p-2 rounded-lg text-[#fff]"><AiOutlineEye size={'20px'} /></button>
                     <button className="bg-success outline-none p-2 rounded-lg text-[#fff]"><AiFillEdit size={'20px'} /></button>
                     <button className="bg-error outline-none p-2 rounded-lg text-[#fff]"><AiFillDelete size={'20px'} /></button>
                  </div>
               </th>
               </tr>
               <tr>
               <th>
                  <label>
                     <input type="checkbox" className="checkbox" />
                  </label>
               </th>
               <td>01 jan 2020</td>
               <td>Bill Yerds</td>
               <td>38.50</td>
               <td>38.50</td>
               <td><p className='bg-green opacity-75 text-[#fff] w-14 rounded-2xl text-center'>Paid</p></td>
               <td>Yerds</td>
               <td>1.3</td>
               <th>
                  <div className='flex items-center gap-2'>
                     <button className="bg-info outline-none p-2 rounded-lg text-[#fff]"><AiOutlineEye size={'20px'} /></button>
                     <button className="bg-success outline-none p-2 rounded-lg text-[#fff]"><AiFillEdit size={'20px'} /></button>
                     <button className="bg-error outline-none p-2 rounded-lg text-[#fff]"><AiFillDelete size={'20px'} /></button>
                  </div>
               </th>
               </tr>
               <tr>
               <th>
                  <label>
                     <input type="checkbox" className="checkbox" />
                  </label>
               </th>
               <td>01 jan 2020</td>
               <td>Bill Yerds</td>
               <td>38.50</td>
               <td>38.50</td>
               <td><p className='bg-green opacity-75 text-[#fff] w-14 rounded-2xl text-center'>Paid</p></td>
               <td>Yerds</td>
               <td>1.3</td>
               <th>
                  <div className='flex items-center gap-2'>
                     <button className="bg-info outline-none p-2 rounded-lg text-[#fff]"><AiOutlineEye size={'20px'} /></button>
                     <button className="bg-success outline-none p-2 rounded-lg text-[#fff]"><AiFillEdit size={'20px'} /></button>
                     <button className="bg-error outline-none p-2 rounded-lg text-[#fff]"><AiFillDelete size={'20px'} /></button>
                  </div>
               </th>
               </tr>
               <tr>
               <th>
                  <label>
                     <input type="checkbox" className="checkbox" />
                  </label>
               </th>
               <td>01 jan 2020</td>
               <td>Bill Yerds</td>
               <td>38.50</td>
               <td>38.50</td>
               <td><p className='bg-green opacity-75 text-[#fff] w-14 rounded-2xl text-center'>Paid</p></td>
               <td>Yerds</td>
               <td>1.3</td>
               <th>
                  <div className='flex items-center gap-2'>
                     <button className="bg-info outline-none p-2 rounded-lg text-[#fff]"><AiOutlineEye size={'20px'} /></button>
                     <button className="bg-success outline-none p-2 rounded-lg text-[#fff]"><AiFillEdit size={'20px'} /></button>
                     <button className="bg-error outline-none p-2 rounded-lg text-[#fff]"><AiFillDelete size={'20px'} /></button>
                  </div>
               </th>
               </tr>
               <tr>
               <th>
                  <label>
                     <input type="checkbox" className="checkbox" />
                  </label>
               </th>
               <td>01 jan 2020</td>
               <td>Bill Yerds</td>
               <td>38.50</td>
               <td>38.50</td>
               <td><p className='bg-green opacity-75 text-[#fff] w-14 rounded-2xl text-center'>Paid</p></td>
               <td>Yerds</td>
               <td>1.3</td>
               <th>
                  <div className='flex items-center gap-2'>
                     <button className="bg-info outline-none p-2 rounded-lg text-[#fff]"><AiOutlineEye size={'20px'} /></button>
                     <button className="bg-success outline-none p-2 rounded-lg text-[#fff]"><AiFillEdit size={'20px'} /></button>
                     <button className="bg-error outline-none p-2 rounded-lg text-[#fff]"><AiFillDelete size={'20px'} /></button>
                  </div>
               </th>
               </tr>
               <tr>
               <th>
                  <label>
                     <input type="checkbox" className="checkbox" />
                  </label>
               </th>
               <td>01 jan 2020</td>
               <td>Bill Yerds</td>
               <td>38.50</td>
               <td>38.50</td>
               <td><p className='bg-green opacity-75 text-[#fff] w-14 rounded-2xl text-center'>Paid</p></td>
               <td>Yerds</td>
               <td>1.3</td>
               <th>
                  <div className='flex items-center gap-2'>
                     <button className="bg-info outline-none p-2 rounded-lg text-[#fff]"><AiOutlineEye size={'20px'} /></button>
                     <button className="bg-success outline-none p-2 rounded-lg text-[#fff]"><AiFillEdit size={'20px'} /></button>
                     <button className="bg-error outline-none p-2 rounded-lg text-[#fff]"><AiFillDelete size={'20px'} /></button>
                  </div>
               </th>
               </tr>
            </tbody>
         </table>
      </div>
   );
};

export default SaleTable;