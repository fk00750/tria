import React from 'react';
import './index.css';
import { IoEllipsisVertical } from 'react-icons/io5';

function Dashboard() {

  return (
    <section className='section p-3'>
      <div className='row'>
        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
          <div className='card custom-shadow bg-white p-3 border-0'>
            <div className='d-flex align-items-center justify-content-between'>
              <h6 className='mb-0'>
                Total<br /><span className='h5'>Classroom Courses</span>
              </h6>
              <h4 className='fw-bold mb-0'>
                100
              </h4>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
          <div className='card custom-shadow bg-white p-3 border-0'>
            <div className='d-flex align-items-center justify-content-between'>
              <h6 className='mb-0'>
                Total<br /><span className='h5'>Online Courses</span>
              </h6>
              <h4 className='fw-bold mb-0'>
                100
              </h4>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
          <div className='card custom-shadow bg-white p-3 border-0'>
            <div className='d-flex align-items-center justify-content-between'>
              <h6 className='mb-0'>
                Total<br /><span className='h5'>Local Pages</span>
              </h6>
              <h4 className='fw-bold mb-0'>
                100
              </h4>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
          <div className='card custom-shadow bg-white p-3 border-0'>
            <div className='d-flex align-items-center justify-content-between'>
              <h6 className='mb-0'>
                Total<br /><span className='h5'>Books</span>
              </h6>
              <h4 className='fw-bold mb-0'>
                100
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-lg-8 col-md-6 col-sm-12 col-12'>
          <div className='card'>
            <h6 className='text-uppercase p-3 mb-0'>Recent Course Added</h6>
            <hr className='m-0' />
            <div className='p-3'>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Course Name</th>
                      <th>Category</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10, Jun 2023</td>
                      <td>SSB Interview</td>
                      <td>Classroom</td>
                      <td> <IoEllipsisVertical size={20} /> </td>
                    </tr>
                    <tr>
                      <td>10, Jun 2023</td>
                      <td>SSB Interview</td>
                      <td>Online</td>
                      <td> <IoEllipsisVertical size={20} /> </td>
                    </tr>
                    <tr>
                      <td>10, Jun 2023</td>
                      <td>SSB Interview</td>
                      <td>Local Pages</td>
                      <td> <IoEllipsisVertical size={20} /> </td>
                    </tr>
                    <tr>
                      <td>10, Jun 2023</td>
                      <td>SSB Interview</td>
                      <td>Classroom</td>
                      <td> <IoEllipsisVertical size={20} /> </td>
                    </tr>
                    <tr>
                      <td>10, Jun 2023</td>
                      <td>SSB Interview</td>
                      <td>Online</td>
                      <td> <IoEllipsisVertical size={20} /> </td>
                    </tr>
                    <tr>
                      <td>10, Jun 2023</td>
                      <td>SSB Interview</td>
                      <td>Local Pages</td>
                      <td> <IoEllipsisVertical size={20} /> </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
          <div className='card'>
            <h6 className='text-uppercase p-3 mb-0'>Recent Book Added</h6>
            <hr className='m-0' />
            <div className='p-3'>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Book Name</th>
                      <th>Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10, Jun 2023</td>
                      <td>SSB Interview All Book</td>
                      <td>₹2100</td>
                      <td> <IoEllipsisVertical size={20} /> </td>
                    </tr>
                    <tr>
                      <td>10, Jun 2023</td>
                      <td>SSB Interview All Book</td>
                      <td>₹2100</td>
                      <td> <IoEllipsisVertical size={20} /> </td>
                    </tr>
                    <tr>
                      <td>10, Jun 2023</td>
                      <td>SSB Interview All Book</td>
                      <td>₹2100</td>
                      <td> <IoEllipsisVertical size={20} /> </td>
                    </tr>
                    <tr>
                      <td>10, Jun 2023</td>
                      <td>SSB Interview All Book</td>
                      <td>₹2100</td>
                      <td> <IoEllipsisVertical size={20} /> </td>
                    </tr>
                    <tr>
                      <td>10, Jun 2023</td>
                      <td>SSB Interview All Book</td>
                      <td>₹2100</td>
                      <td> <IoEllipsisVertical size={20} /> </td>
                    </tr>
                    <tr>
                      <td>10, Jun 2023</td>
                      <td>SSB Interview All Book</td>
                      <td>₹2100</td>
                      <td> <IoEllipsisVertical size={20} /> </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
