import React from 'react';
import Navbar from '../shared/Navbar';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const MainLayout = () => {
  return (
    <div>
      
      <div className='flex h-screen w-full bg-gray-400'>
        <div className='bg-slate-200 w-1/8'>
            <Sidebar></Sidebar>
        </div>
        <div className='flex-1'>
            <Header></Header>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
      </div>
    
    </div>
  );
};

export default MainLayout;