import React from 'react';
import { IoHome } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './index.css';

function OutletHead({ path, right }) {

  let breadcrumArray = null;

  if (path) {
    breadcrumArray = path.split('/');
  }

  let title = breadcrumArray[breadcrumArray.length - 1];
  if (title.includes('-')) {
    title = breadcrumArray[breadcrumArray.length - 1].split('-')[0] + ' ' + breadcrumArray[breadcrumArray.length - 1].split('-')[1];
  }

  return (
    <div className='outlet-head'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-12'>
            <div className='breadcrums h-100'>
              <h5 className='mb-0 text-capitalize'>{title}</h5>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-12'>
            <div className='right-block'>
              {
                right && right
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutletHead;
