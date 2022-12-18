import React from 'react';
import { BsPlusLg } from 'react-icons/bs';
import SaleTable from './SaleTable';

const SaleList = () => {
   return (
      <div>
      <h1 className='text-xl font-semibold'>Sale List</h1>
      <div className='flex py-5 justify-between'>
         <div className='text-sm'>
            <p className='mb-3'>Sales enables you to effectively control sales KPIs and monitor them in one central</p>
            <p>place while helping teams to reach sales goals.</p>
         </div>
         <div>
            <button className="btn btn-info text-[#fff] flex items-center gap-3">
               <BsPlusLg />
               Add Sale
            </button>
         </div>
      </div>
      <div className='flex items-center justify-between pt-3 pb-7'>
         <div className='flex items-center gap-3'>
            <p>Show</p>
            <select className='border' name="" id="">
               <option value="10">10</option>
               <option value="25">25</option>
               <option value="50">50</option>
               <option value="100">100</option>
            </select>
            <p>entries</p>
         </div>
         <div>
            <label htmlFor="search">Search:</label>
            <input className='rounded-lg px-2 border ml-2' type="text" />
         </div>
      </div>

      <SaleTable />

      <div className='flex items-center justify-between'>
         <p>Showing 1 to 9 of 9 entries</p>
         <div className='flex items-center gap-4'>
         <button className="bg-blue bg-opacity-80 rounded-lg px-2 text-[#fff]">Previous</button>
         <p>1</p>
         <button className="bg-blue bg-opacity-80 rounded-lg px-2 text-[#fff]">Next</button>
         </div>
      </div>

      <div className='w-full bg-gray-dark h-2 mt-3 rounded-lg'></div>
   </div>
   );
};

export default SaleList;