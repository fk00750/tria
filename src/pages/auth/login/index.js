import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuth } from './../../../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const { login } = useAuth();

  async function handleExpress(tokenId, googleData, param) {
    await axios.post('https://auth.majorkalshiclasses.com/google/add', { tokenId, googleData, param })
      .then(function (response) {
        localStorage.setItem('authExpress', JSON.stringify(response.data));
        toast.success('Successfully Signed In!', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeButton: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      }).catch(function (error) {
        toast.error(error.message, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeButton: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      });
  }

  async function handleGoogleLogin() {
    try {
      const res = await login();
      const tokenId = res.user.accessToken;
      const googleData = res._tokenResponse;
      const param = { userType: 1 };

      await handleExpress(tokenId, googleData, param);
    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        toast.error(error.code, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeButton: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  }

  return (
    <div className='container'>
      <div className='row align-items-center justify-content-around'>
        <div className='col-md-5 col-lg-4 py-5 my-5'>
          <div className='bg-white border-0 mb-0 card custom-shadow'>
            <div className='p-3'>
              <h4 className="text-center mt-3">Login</h4>
            </div>
            <div className='p-md-4 m-md-1 p-3 pb-5'>
              <div className='d-flex align-item-center justify-content-center'>
                <Button variant="primary" className='w-100' onClick={handleGoogleLogin}>
                  Login
                </Button>
              </div>
            </div>
            <hr className='border-info m-0' />
            <div className='p-4'>
              <div className='text-center mb-3'>
                <p>Powered By <a href="https://majorkalshiclasses.com">Major Kalshi Classes</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;