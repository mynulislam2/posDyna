import React from 'react';
import {  Routes,Route } from 'react-router-dom';
import MainDashBoard from '../MainDashBoard/MainDashBoard';
import SignIn from '../Pages/SignIn/SignIn';
import pathname from '../Routes/Index';

const AllRotes = () => {
    return (
        <Routes>
          <Route path='/' element={<MainDashBoard></MainDashBoard>}>
          </Route>
          <Route path={pathname.singIn} element={<SignIn />}/>
        </Routes>
    );
};

export default AllRotes;