import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './index.css';

function Landing() {

  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    return () => {
      if (user) {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      } else {
        setIsLoading(false);
      }
    };
  }, []);

  return (
    <div className='landing-wrapper'>
      {
        isLoading ?
          <div>
            Loading
          </div>
          :
          <div className='text-center'>
            <h4 className='text-uppercase'>Welcome To</h4>
            <h1 className='mb-5 fw-bold text-uppercase'>Major Kalshi Classes Krypton</h1>
            <div className='card'>
              {
                user ?
                  <NavLink className='btn btn-primary' to="/admin/dashboard">Dashboard</NavLink>
                  :
                  <NavLink className='btn btn-dark' to="/login">Login</NavLink>
              }
            </div>
          </div>
      }
    </div>
  );
}

export default Landing;
