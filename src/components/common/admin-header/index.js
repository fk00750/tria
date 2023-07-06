import React from 'react';
import { useLocation } from 'react-router-dom';
import { IoAlbumsOutline, IoNotifications, IoSearch } from 'react-icons/io5';
import './index.css';
import { useAuth } from '../../../context/AuthContext';
import OutletHead from '../outlet-head';

function Header() {

  const location = useLocation();
  const { user, logout } = useAuth();

  let breadcrumArray = null;

  if (location && location.pathname) {
    breadcrumArray = location.pathname.split('/');
  }

  let pageTitle = breadcrumArray[breadcrumArray.length - 1];
  if (pageTitle.includes('-')) {
    pageTitle = breadcrumArray[breadcrumArray.length - 1].split('-')[0] + ' ' + breadcrumArray[breadcrumArray.length - 1].split('-')[1];
  }

  return (
    <header>
      <div className='container-fluid'>
        <div className='header-wrapper'>
          <div className='header-left'>
            <h4 className='text-capitalize mb-0' >{pageTitle}</h4>
          </div>
          <div className='header-right'>
            <div className='notification-icon'>
              <a href="#">
                <IoNotifications size={20} />
              </a>
            </div>
            <div className='widget-icon'>
              <a href="#">
                <IoAlbumsOutline size={20} />
              </a>
            </div>
            <div className='user-head-info'>
              <a href="#">
                <div className='user-img'>
                  <img src={user && user.photoURL} className='img-fluid' alt='...' />
                </div>
              </a>
              <div className='user-info-dropdown'>
                <div className='user-info'>
                  <div className='user-drop-img'>
                    <img src={user && user.photoURL} className='img-fluid' alt='...' />
                  </div>
                  <h6 className='mb-0 text-center'>{user && user.displayName}</h6>
                  <p className='text-center'>{user && user.email}</p>
                </div>
                <div className='user-drop-menu'>
                  <button onClick={logout}>Logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
