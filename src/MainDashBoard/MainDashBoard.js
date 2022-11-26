import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Header from '../Component/Header/Headers';
const MainDashBoard = () => {
    return (
        <ProSidebarProvider>
            <div style={{ width: "100%", display: 'flex', height: '100%', minHeight: '100vh' }}>
                <Sidebar style={{ width: "300px" ,boxShadow: "4px 4px 16px rgba(0, 0, 0, 0.25)" }}>
                    {/* <div className='d-flex align-items-center justify-content-center'>
                        <img width="200px" src={brandLogo} className="py-4 img-fluid mx-auto" alt="" />
                    </div> */}
                    <Menu className='py-2'>
                        <MenuItem routerLink={<Link to="/DashBoard" />}> Dashboard</MenuItem>
                        <MenuItem routerLink={<Link to="/myprofile" />}> My profile</MenuItem>
                        <MenuItem routerLink={<Link to="/myorders" />}>My orders</MenuItem>
                        <MenuItem routerLink={<Link to="/ledger" />}> Ledger</MenuItem>
                        <MenuItem routerLink={<Link to="/required-medicine" />}> Required Medicines</MenuItem>
                        <MenuItem routerLink={<Link to="/contact-us" />}> Contact Us</MenuItem>
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