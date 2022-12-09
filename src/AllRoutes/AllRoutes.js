import React from 'react';
import {  Routes,Route } from 'react-router-dom';
import MainDashBoard from '../MainDashBoard/MainDashBoard';
import Dashboards from '../Pages/Dashboards/Dashboards';
import ListCategory from '../Pages/ListCategory/ListCategory';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp';
import pathname from '../Routes/Index';

const AllRotes = () => {
    return (
        <Routes>
          <Route path='/' element={<MainDashBoard></MainDashBoard>}>
            <Route path='/' element={<Dashboards />}/>
            <Route path='list-category' element={<ListCategory />}/>
          </Route>
          <Route path={pathname.singIn} element={<SignIn />}/>
          <Route path={pathname.singUp} element={<SignUp />}/>
        </Routes>
    );
};

export default AllRotes;