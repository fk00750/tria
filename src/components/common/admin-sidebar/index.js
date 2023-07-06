import React from 'react';
import { IoGridOutline, IoCalendarOutline, IoMenuOutline, IoMapOutline, IoPeopleOutline, IoLocationOutline, IoCardOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import './index.css';
import logo from '../../../assets/logo/next2estate-black.png';

function SideBar({ sidenavCollapsed, setSidenavCollapsed }) {

  const handleSidenav = () => {
    setSidenavCollapsed(!sidenavCollapsed);
  }

  return (
    <div className='sidebar'>
      <div className='sidebar-head'>
        <div className={sidenavCollapsed ? 'collapsed-side-hide' : 'sidebar-logo'}>
          <img src={logo} alt="next2estate-logo" />
          <div className='brand-name'>
            Krypton
          </div>
        </div>
        <div className='toggle-btn'>
          <button onClick={handleSidenav}>
            <IoMenuOutline size={24} color={`var(--text)`} />
          </button>
        </div>
      </div>
      <ul>
        <li>
          <NavLink to="/admin/dashboard" >
            <div className='link-icon'><IoGridOutline color={`var(--primary)`} size={19} /></div>
            <div className={sidenavCollapsed ? 'collapsed-side-hide' : 'link-label'}>Dashboard</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/Banners">
            <div className='link-icon'><IoCalendarOutline color={`var(--bs-orange)`} size={20} /></div>
            <div className={sidenavCollapsed ? 'collapsed-side-hide' : 'link-label'}>Banners</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/classroom-courses">
            <div className='link-icon'><IoMapOutline color={`var(--bs-orange)`} size={20} /></div>
            <div className={sidenavCollapsed ? 'collapsed-side-hide' : 'link-label'}>Classroom Courses</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/online-courses">
            <div className='link-icon'><IoPeopleOutline color={`var(--bs-blue)`} size={20} /></div>
            <div className={sidenavCollapsed ? 'collapsed-side-hide' : 'link-label'}>Online Courses</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/local-pages">
            <div className='link-icon'><IoCardOutline color={`var(--bs-info)`} size={20} /></div>
            <div className={sidenavCollapsed ? 'collapsed-side-hide' : 'link-label'}>Local Pages</div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
