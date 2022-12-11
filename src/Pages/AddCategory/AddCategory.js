import React from 'react';

const AddCategory = () => {
    return (
        <div>
            <div>
                <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
            </div>
            <div>
                <input type="text" placeholder="Type here" className="input w-full max-w-xs" />

            </div>
            <div>
                <select className="select w-full max-w-xs">
                    <option disabled selected>Pick your favorite Simpson</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select>
            </div>
            <div>
                <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
            </div>

        </div>
    );
};

export default AddCategory;