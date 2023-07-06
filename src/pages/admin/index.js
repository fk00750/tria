import React, { useState, useRef } from 'react';
import { Outlet } from 'react-router';
import './index.css';
import SideBar from './../../components/common/admin-sidebar';
import Header from './../../components/common/admin-header';
import Footer from './../../components/common/admin-footer';
import OutletHead from './../../components/common/outlet-head';

function Admin() {

  const sidebarRef = useRef();
  const [sidenavCollapsed, setSidenavCollapsed] = useState(false);

  return (
    <div className='admin-wrapper'>
      <div ref={sidebarRef} className={sidenavCollapsed ? 'sidenav sidenav-collapsed' : 'sidenav'}>
        <SideBar sidenavCollapsed={sidenavCollapsed} setSidenavCollapsed={setSidenavCollapsed} />
      </div>
      <div className={sidenavCollapsed ? 'main-content main-content-collapsed' : 'main-content'}>
        <Header sidenavCollapsed={sidenavCollapsed} />
        <div className='outlet-wrapper'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Admin;
