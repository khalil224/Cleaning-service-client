import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../../components/DashboardSidebar';


const Dashboard = () => {
    return (
        <DashboardSidebar>
            <h1 className='text-2xl text-center text-primary'>Welcome to dashboard</h1>
            <Outlet></Outlet>
        </DashboardSidebar>
    )
};

export default Dashboard;