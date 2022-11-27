import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Header from '../Component/Header/Headers';
import brandlogo from '../assets/images/brandLogo.png'
import { FaDashcube,FaCartPlus,FaListAlt,FaChartPie } from "react-icons/fa";








const MainDashBoard = () => {
    return (
        <ProSidebarProvider>
            <div style={{ width: "100%", display: 'flex', height: '100%', minHeight: '100vh' }}>
                <Sidebar style={{ width: "300px" ,boxShadow: "0px 16px 15px 0px rgb(0 0 0 / 7%)" }}>
                    <div className='d-flex align-items-center justify-content-center'>
                        <img width="200px" src={brandlogo} className="py-4 img-fluid mx-auto" alt="" />
                    </div>
                    <Menu className='py-2'>
                        <MenuItem routerLink={<Link to="/DashBoard" />}> Dashboards</MenuItem>
                        <MenuItem routerLink={<Link to="/myprofile" />}> Products</MenuItem>
                        <MenuItem routerLink={<Link to="/myorders" />}>Categories</MenuItem>
                        <MenuItem routerLink={<Link to="/ledger" />}> Sale</MenuItem>
                        <MenuItem routerLink={<Link to="/required-medicine" />}>Purchases</MenuItem>
                        <MenuItem routerLink={<Link to="/contact-us" />}> Returns</MenuItem>
                        <MenuItem routerLink={<Link to="/contact-us" />}> People</MenuItem>
                        <MenuItem routerLink={<Link to="/contact-us" />}> Reports</MenuItem>
                        <MenuItem routerLink={<Link to="/contact-us" />}> Other Page</MenuItem>
                        <MenuItem > Language</MenuItem>
                        <MenuItem className='text-danger'> Sign Out</MenuItem>
                    </Menu>
                </Sidebar>
                <main style={{ width: "100%" }}>
                    <Header />
                </main>
            </div>
        </ProSidebarProvider>
    );
};

export default MainDashBoard;