import React, { useState } from 'react'
import "./TopBar.css"
import { useNavigate } from 'react-router-dom';
import {
  MDBNavbar,
  MDBBtn,
  MDBContainer
} from 'mdb-react-ui-kit';

const TopBar = (props) => {
  let text_top = "";
  if (props.pg === 'userpg') {
    text_top = 'Home';
  } else if (props.pg === 'loginpg') {
    text_top = 'Login Page';
  } else if (props.pg === 'forgotpg') {
    text_top = 'Forgot Page';
  }

  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem('loggedInUser');
    navigate('/');
  };



  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#FAF9F6', boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.4)', paddingTop: '2px', paddingBottom: '2px', }} >
        <a className="navbar-brand" href="#">
          <img src="/backkk.jpg" width={'60rem'} height={'60rem'} style={{ borderRadius: '80%', marginLeft: '10px' }} className="d-inline-block align-top" alt />

        </a>

        <a className="navbar-brand" href="#">Property Allotment Tool</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="nav-item active">
          <a className="nav-link" href="#">{text_top} <span className="sr-only">(current)</span></a>
        </div>
        {props.userpg ? (

          <div className="profile-icon ms-auto" >
            <MDBContainer tag="form" fluid className='justify-content-end ms-auto'>
              <img src="woman1.png" alt="Profile" width={'60rem'} height={'60rem'} />
              <MDBBtn outline color="danger" size="sm" type='button' onClick={handleLogout}  style={{ marginBottom: '1rem' }}>
                LogOut
              </MDBBtn>
            </MDBContainer>
          </div>


        ) : null}
      </nav>

    </div>


  )
}

export default TopBar
