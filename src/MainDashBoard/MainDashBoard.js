import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Header from '../Component/Header/Headers';
import brandlogo from '../assets/images/brandLogo.png'
import { Link, Outlet } from 'react-router-dom';
import pathname from '../Routes/Index';
import { BiCube, BiPurchaseTag } from "react-icons/bi";
import { AiOutlineShopping, AiOutlinePieChart } from "react-icons/ai";
import { GrCatalogOption } from "react-icons/gr";
import { TbMessageReport } from "react-icons/tb";
import { AiOutlineMinus } from "react-icons/ai";

import {
  BsArrowsAngleContract,
  BsPeople,
  BsReverseLayoutTextSidebarReverse,
} from "react-icons/bs";
import './MainDash.css'

const MainDashBoard = ({ props }) => {
  return (
    <ProSidebarProvider >

      <div style={{ display: 'flex', justifyContent: "space-between", height: '100%', width: "100%" }}>

        <Sidebar style={{
          boxShadow: "rgb(0 0 0 / 7%) 0px 16px 15px 0px",
          overflow: "hidden !important",
          height: "100vh",
          position: "sticky",
          width: "19%",
          top: 0
        }}>
          <div className='d-flex align-items-center justify-content-center '>
            <img width="200px" src={brandlogo} className="py-4 img-fluid mx-auto" alt="logo" />
          </div>
          {/* <Menu className='fixed' style={{width:"249px"}} > */}
          <Menu  >

            <MenuItem routerLink={<Link to={pathname.home} />} icon={<BiCube />}> Dashboards</MenuItem>
            <SubMenu icon={<AiOutlineShopping />} label="Products">
              <MenuItem icon={<AiOutlineMinus />}> Google maps</MenuItem>
              <MenuItem icon={<AiOutlineMinus />}> Open street maps</MenuItem>
            </SubMenu>
            <SubMenu icon={<GrCatalogOption />} label="Categories">
              <MenuItem icon={<AiOutlineMinus />} routerLink={<Link to={pathname.listCategory} />}>List Category</MenuItem>
              <MenuItem icon={<AiOutlineMinus />} routerLink={<Link to={pathname.addcategory} />}>Add Categories</MenuItem>
            </SubMenu>
            <SubMenu icon={<AiOutlinePieChart />} label="Sale">
              <MenuItem routerLink={<Link to={pathname.saleList} />} icon={<AiOutlineMinus />}> List Sale</MenuItem>
              <MenuItem icon={<AiOutlineMinus />} routerLink={<Link to={pathname.AddSale} />}> Add Sale </MenuItem>
            </SubMenu>
            <SubMenu icon={<BsReverseLayoutTextSidebarReverse />} label="Purchases">
              <MenuItem icon={<AiOutlineMinus />}> Google maps</MenuItem>
              <MenuItem icon={<AiOutlineMinus />}> Open street maps</MenuItem>
            </SubMenu>
            <SubMenu icon={<BsArrowsAngleContract />} label="Returns">
              <MenuItem icon={<AiOutlineMinus />}> Dark</MenuItem>
              <MenuItem icon={<AiOutlineMinus />}> Light</MenuItem>
            </SubMenu>
            <SubMenu icon={<BiPurchaseTag />} label="People">
              <MenuItem icon={<AiOutlineMinus />}> Pie charts</MenuItem>
              <MenuItem icon={<AiOutlineMinus />}> Line charts</MenuItem>
              <MenuItem icon={<AiOutlineMinus />}> Bar charts</MenuItem>
            </SubMenu>
            <SubMenu icon={<TbMessageReport />} label="Reports">
              <MenuItem icon={<AiOutlineMinus />}> Google maps</MenuItem>
              <MenuItem icon={<AiOutlineMinus />}> Open street maps</MenuItem>
            </SubMenu>
            <SubMenu icon={<BsPeople />} label="Other Page">
              <MenuItem icon={<AiOutlineMinus />}> Dark</MenuItem>
              <MenuItem icon={<AiOutlineMinus />}> Light</MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
        <main style={{ width: "81%" }}>
          <Header />
          <div className="p-5">


            {/* rendering dasboard components */}
            <Outlet />


          </div>
        </main>

      </div>
    </ProSidebarProvider >
  );
};

export default MainDashBoard;
