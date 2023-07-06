import React from 'react';
import './index.css';

function Footer() {
  return (
    <footer className='px-3'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-5 col-md-5 col-12'>
            <div className='copyright'>
              © 2023-2024
            </div>
          </div>
          <div className='col-lg-7 col-md-7 col-12'>
            <div className='bottom-nav'>
              <ul>
                <li>
                  <a href="#">Next2Technologies</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
