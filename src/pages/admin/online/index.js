import React from 'react';
import OutletHead from '../../../components/common/outlet-head';
import { Button } from 'react-bootstrap';

function Online() {
  return (
    <div className='section-wrapper bg-white'>
      <OutletHead
        path={'Courses List'}
        right={<Button variant='primary'>Add New Category</Button>} />
      <hr className='mt-0' />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Course Name</th>
                    <th>Page Url</th>
                    <th>View Sub Courses</th>
                    <th>Add Sub Courses</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>SSB Interview</td>
                    <td>ssb-interview</td>
                    <td>
                      <Button variant='warning' size="sm" className='px-3'>View</Button>
                    </td>
                    <td>
                      <Button variant='success' size="sm" className='px-3'>Add</Button>
                    </td>
                    <td>
                      <Button variant='primary' size="sm" className='px-3'>Edit</Button>
                    </td>
                    <td>
                      <Button variant='danger' size="sm" className='px-3'>Delete</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>SSB Interview</td>
                    <td>ssb-interview</td>
                    <td>
                      <Button variant='warning' size="sm" className='px-3'>View</Button>
                    </td>
                    <td>
                      <Button variant='success' size="sm" className='px-3'>Add</Button>
                    </td>
                    <td>
                      <Button variant='primary' size="sm" className='px-3'>Edit</Button>
                    </td>
                    <td>
                      <Button variant='danger' size="sm" className='px-3'>Delete</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>SSB Interview</td>
                    <td>ssb-interview</td>
                    <td>
                      <Button variant='warning' size="sm" className='px-3'>View</Button>
                    </td>
                    <td>
                      <Button variant='success' size="sm" className='px-3'>Add</Button>
                    </td>
                    <td>
                      <Button variant='primary' size="sm" className='px-3'>Edit</Button>
                    </td>
                    <td>
                      <Button variant='danger' size="sm" className='px-3'>Delete</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>SSB Interview</td>
                    <td>ssb-interview</td>
                    <td>
                      <Button variant='warning' size="sm" className='px-3'>View</Button>
                    </td>
                    <td>
                      <Button variant='success' size="sm" className='px-3'>Add</Button>
                    </td>
                    <td>
                      <Button variant='primary' size="sm" className='px-3'>Edit</Button>
                    </td>
                    <td>
                      <Button variant='danger' size="sm" className='px-3'>Delete</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>SSB Interview</td>
                    <td>ssb-interview</td>
                    <td>
                      <Button variant='warning' size="sm" className='px-3'>View</Button>
                    </td>
                    <td>
                      <Button variant='success' size="sm" className='px-3'>Add</Button>
                    </td>
                    <td>
                      <Button variant='primary' size="sm" className='px-3'>Edit</Button>
                    </td>
                    <td>
                      <Button variant='danger' size="sm" className='px-3'>Delete</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Online;
