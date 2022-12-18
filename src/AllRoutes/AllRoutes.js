import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainDashBoard from '../MainDashBoard/MainDashBoard';
import AddCategory from '../Pages/AddCategory/AddCategory';
import AddSale from '../Pages/AddSale/AddSale';
import Dashboards from '../Pages/Dashboards/Dashboards';
import ListCategory from '../Pages/ListCategory/ListCategory';
import SaleList from '../Pages/SaleList/SaleList';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp';
import pathname from '../Routes/Index';

const AllRotes = () => {
  return (
    <Routes>
      <Route path={pathname.home} element={<MainDashBoard></MainDashBoard>}>
        <Route path={pathname.home} element={<Dashboards />} />
        <Route path={pathname.listCategory} element={<ListCategory />} />
        <Route path={pathname.addcategory} element={<AddCategory />} />
        <Route path={pathname.saleList} element={<SaleList />} />
        <Route path={pathname.AddSale} element={<AddSale/>} />
      </Route>
      <Route path={pathname.singIn} element={<SignIn />} />
      <Route path={pathname.singUp} element={<SignUp />} />
    </Routes>
  );
};

export default AllRotes;