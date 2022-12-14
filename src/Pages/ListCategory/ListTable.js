import React from 'react';
import { AiOutlineEye, AiFillEdit, AiFillDelete } from 'react-icons/ai';

const ListTable = () => {
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
               <th>Image</th>
               <th>Code</th>
               <th>Category</th>
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
               <td>
                  <div className="flex items-center space-x-3">
                     <div className="avatar">
                     <div className="mask mask-squircle w-12 h-12">
                        <img src="https://templates.iqonic.design/posdash/html/assets/images/table/product/02.jpg" alt="Avatar Tailwind CSS Component" />
                     </div>
                     </div>
                     <div>
                     <div className="font-bold">Hart Hagerty</div>
                     <div className="text-sm opacity-50">United States</div>
                     </div>
                  </div>
               </td>
               <td>
                     Zemlak, Daniel and Leannon
               </td>
               <td>Purple</td>
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
               <td>
                  <div className="flex items-center space-x-3">
                     <div className="avatar">
                     <div className="mask mask-squircle w-12 h-12">
                        <img src="https://templates.iqonic.design/posdash/html/assets/images/table/product/02.jpg" alt="Avatar Tailwind CSS Component" />
                     </div>
                     </div>
                     <div>
                     <div className="font-bold">Brice Swyre</div>
                     <div className="text-sm opacity-50">China</div>
                     </div>
                  </div>
               </td>
               <td>
                  Carroll Group
               </td>
               <td>Red</td>
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
               <td>
                  <div className="flex items-center space-x-3">
                     <div className="avatar">
                     <div className="mask mask-squircle w-12 h-12">
                        <img src="https://templates.iqonic.design/posdash/html/assets/images/table/product/02.jpg" alt="Avatar Tailwind CSS Component" />
                     </div>
                     </div>
                     <div>
                     <div className="font-bold">Marjy Ferencz</div>
                     <div className="text-sm opacity-50">Russia</div>
                     </div>
                  </div>
               </td>
               <td>
                  Rowe-Schoen
               </td>
               <td>Crimson</td>
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
               <td>
                  <div className="flex items-center space-x-3">
                     <div className="avatar">
                     <div className="mask mask-squircle w-12 h-12">
                        <img src="https://templates.iqonic.design/posdash/html/assets/images/table/product/02.jpg" alt="Avatar Tailwind CSS Component" />
                     </div>
                     </div>
                     <div>
                     <div className="font-bold">Yancy Tear</div>
                     <div className="text-sm opacity-50">Brazil</div>
                     </div>
                  </div>
               </td>
               <td>
                  Wyman-Ledner
               </td>
               <td>Indigo</td>
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
               <td>
                  <div className="flex items-center space-x-3">
                     <div className="avatar">
                     <div className="mask mask-squircle w-12 h-12">
                        <img src="https://templates.iqonic.design/posdash/html/assets/images/table/product/02.jpg" alt="Avatar Tailwind CSS Component" />
                     </div>
                     </div>
                     <div>
                     <div className="font-bold">Yancy Tear</div>
                     <div className="text-sm opacity-50">Brazil</div>
                     </div>
                  </div>
               </td>
               <td>
                  Wyman-Ledner
               </td>
               <td>Indigo</td>
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
               <td>
                  <div className="flex items-center space-x-3">
                     <div className="avatar">
                     <div className="mask mask-squircle w-12 h-12">
                        <img src="https://templates.iqonic.design/posdash/html/assets/images/table/product/02.jpg" alt="Avatar Tailwind CSS Component" />
                     </div>
                     </div>
                     <div>
                     <div className="font-bold">Yancy Tear</div>
                     <div className="text-sm opacity-50">Brazil</div>
                     </div>
                  </div>
               </td>
               <td>
                  Wyman-Ledner
               </td>
               <td>Indigo</td>
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
               <td>
                  <div className="flex items-center space-x-3">
                     <div className="avatar">
                     <div className="mask mask-squircle w-12 h-12">
                        <img src="https://templates.iqonic.design/posdash/html/assets/images/table/product/02.jpg" alt="Avatar Tailwind CSS Component" />
                     </div>
                     </div>
                     <div>
                     <div className="font-bold">Yancy Tear</div>
                     <div className="text-sm opacity-50">Brazil</div>
                     </div>
                  </div>
               </td>
               <td>
                  Wyman-Ledner
               </td>
               <td>Indigo</td>
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
               <td>
                  <div className="flex items-center space-x-3">
                     <div className="avatar">
                     <div className="mask mask-squircle w-12 h-12">
                        <img src="https://templates.iqonic.design/posdash/html/assets/images/table/product/02.jpg" alt="Avatar Tailwind CSS Component" />
                     </div>
                     </div>
                     <div>
                     <div className="font-bold">Yancy Tear</div>
                     <div className="text-sm opacity-50">Brazil</div>
                     </div>
                  </div>
               </td>
               <td>
                  Wyman-Ledner
               </td>
               <td>Indigo</td>
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

export default ListTable;