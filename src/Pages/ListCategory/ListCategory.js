import React from 'react';
import { BsPlusLg } from 'react-icons/bs';
import ListTable from './ListTable';

const ListCategory = () => {
   return (
      <div>
         <h1 className='text-xl font-semibold'>Category List</h1>
         <div className='flex py-5 justify-between'>
            <div className='text-sm'>
               <p className='mb-3'>Use category list as to describe your overall core business from the provided list.</p>
               <p>Click the name of the category where you want to add a list item. .</p>
            </div>
            <div>
               <button className="btn btn-info text-[#fff] flex items-center gap-3">
                  <BsPlusLg />
                  Add Category
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
               <input className='rounded-lg px-2 py-1 border ml-2' type="text" />
            </div>
         </div>

         <ListTable />

      </div>
   );
};

export default ListCategory;