import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
  from 'mdb-react-ui-kit';
import './UserLoginPage.css'
import TopBar from '../Components/TopBar/TopBar';
import Footer from '../Components/Footer/Footer';

const UserLoginPage = () => {
  useEffect(() => {
    // Retrieve user details from localStorage
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      navigate('/userDashboard'); 
    }
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Make a POST request to your server's user verification endpoint
    fetch('http://localhost:5050/api/verify-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.verified) {
        // If user is verified, set loggedInUser in sessionStorage
        const user = { email };
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
        navigate('/userDashboard');
      } else {
        // If user is not verified, show alert
        alert('Incorrect email or password');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error occurred while logging in');
    });
  };
  

  return (
    <div className='gradient_background'>
      <TopBar pg="loginpg" />
      <MDBContainer fluid className='my-2' style={{ maxWidth: '80%' }}>

        <MDBRow className='g-0 align-items-start'>
          <MDBCol col='6'>

            <img src="backloginimg.png" style={{ height: '70%', width: '100%', objectFit: 'cover'}} className="w-100 rounded-4 shadow-4" alt="" />

          </MDBCol>
          <MDBCol col='6'>

            <MDBCard className='my-5 cascading-right' style={{ background: 'hsla(0, 0%, 95%, 0.55)', backdropFilter: 'blur(30px)' }}>
              <MDBCardBody className='p-3 shadow-5 text-center'>
                <h4 className="mt-1 mb-0 pb-1">User Login</h4>
                <div className="text-center">
                  <img src="backk.png"
                    style={{ width: '8rem' }} alt="logo" className='rounded-4' />
                  <h5 className="mt-0 mb-2 pb-1">Modern Solutions, Innovative Results</h5>
                </div>

                <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <MDBInput wrapperClass='mb-4 position-relative' label='Password' id='form2' type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)}>
                  <MDBBtn className='position-absolute end-0 translate-middle-y' style={{ top: '50%', transform: 'translateY(-50%)' }} onClick={togglePasswordVisibility}>
                    {showPassword ? 'Hide' : 'View'}
                  </MDBBtn>
                </MDBInput>
                <div className="d-flex justify-content-between mx-4 mb-4">
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                  <a href="!#">Forgot password?</a>
                </div>

                <MDBBtn className='w-100 mb-4' size='md' onClick={handleLogin}>Login</MDBBtn>

                <div className="text-center">

                  <p>or Login with:</p>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='facebook-f' size="sm" />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='twitter' size="sm" />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='google' size="sm" />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='github' size="sm" />
                  </MDBBtn>

                </div>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>



        </MDBRow>

      </MDBContainer>
      <Footer />
    </div>
  )
}

export default UserLoginPage
