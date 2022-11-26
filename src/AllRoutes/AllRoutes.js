import React from 'react';
import {  Routes,Route } from 'react-router-dom';
import MainDashBoard from '../MainDashBoard/MainDashBoard';

const AllRotes = () => {
    return (
        <Routes>
          <Route path='/' element={<MainDashBoard></MainDashBoard>}>
          </Route>
        </Routes>
    );
};

export default AllRotes;