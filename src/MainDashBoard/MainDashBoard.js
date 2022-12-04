import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Header from '../Component/Header/Headers';
import brandlogo from '../assets/images/brandLogo.png'
import { FaDashcube, FaCartPlus, FaListAlt, FaChartPie } from "react-icons/fa";
import './MainDash.css'







const MainDashBoard = () => {
    return (
        <ProSidebarProvider >


            <div className='flex '>
                <Sidebar style={{ boxShadow: "0px 16px 15px 0px rgb(0 0 0 / 7%)",overflow:'hidden', top: 0, position: "sticky", height: "100vh", width: "25%" }}>
                    <div className='d-flex align-items-center justify-content-center '>
                        <img width="200px" src={brandlogo} className="py-4 img-fluid mx-auto" alt="" />
                    </div>
                    {/* <Menu className='fixed' style={{width:"249px"}} > */}
                    <Menu  >

                        <SubMenu icon={<FaDashcube />} label="Dashboards">
                            <MenuItem> Pie charts</MenuItem>
                            <MenuItem> Line charts</MenuItem>
                            <MenuItem> Bar charts</MenuItem>
                        </SubMenu>
                        <SubMenu icon={<FaDashcube />} label="Products">
                            <MenuItem> Google maps</MenuItem>
                            <MenuItem> Open street maps</MenuItem>
                        </SubMenu>
                        <SubMenu icon={<FaDashcube />} label="Categories">
                            <MenuItem> Dark</MenuItem>
                            <MenuItem> Light</MenuItem>
                        </SubMenu>
                        <SubMenu icon={<FaDashcube />} label="Sale">
                            <MenuItem> Pie charts</MenuItem>
                            <MenuItem> Line charts</MenuItem>
                            <MenuItem> Bar charts</MenuItem>
                        </SubMenu>
                        <SubMenu icon={<FaDashcube />} label="Purchases">
                            <MenuItem> Google maps</MenuItem>
                            <MenuItem> Open street maps</MenuItem>
                        </SubMenu>
                        <SubMenu icon={<FaDashcube />} label="Returns">
                            <MenuItem> Dark</MenuItem>
                            <MenuItem> Light</MenuItem>
                        </SubMenu>
                        <SubMenu icon={<FaDashcube />} label="People">
                            <MenuItem> Pie charts</MenuItem>
                            <MenuItem> Line charts</MenuItem>
                            <MenuItem> Bar charts</MenuItem>
                        </SubMenu>
                        <SubMenu icon={<FaDashcube />} label="Reports">
                            <MenuItem> Google maps</MenuItem>
                            <MenuItem> Open street maps</MenuItem>
                        </SubMenu>
                        <SubMenu icon={<FaDashcube />} label="Other Page">
                            <MenuItem> Dark</MenuItem>
                            <MenuItem> Light</MenuItem>
                        </SubMenu>
                    </Menu>
                </Sidebar>
                <main style={{ width: "75%", overflowY: "none" }}>
                    <Header />
                    <div style={{ height: "120vh" }}>

                        sddjfjhdsf
                    </div>
                </main>
            </div>
        </ProSidebarProvider>
    );
};

export default MainDashBoard;