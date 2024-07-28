import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter
} from 'mdb-react-ui-kit';
import "./Card.css";
import { useNavigate } from 'react-router-dom';

const PlusBox = (props) => {
    const PlusIcon = () => (
  <div
    style={{
      color: 'white',
      fontSize: '48px',
      lineHeight: '0.5',
      textAlign: 'center',
    }}
  >
    &#43;
  </div>
);
    const name = props.name;
    const navigate = useNavigate();
    const handleClick = () => {
        // Define the function logic here
        alert('You are being Redirected!');
        localStorage.setItem('currentComponent', "Add Maintainance");
    navigate("/userDashboard");
    console.log(`button pressed PlusButton Add Maintainance`);
      };
    return (
        <MDBCard className='h-100' style={{ background: 'hsla(120, 100%, 75%, 0.55)', backdropFilter: 'blur(30px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '20px' ,paddingTop: '50px'}}>
     <button
        onClick={handleClick}
        style={{ width: '100px', height: '100px', backgroundColor: '#5cb85c', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', border: 'none', cursor: 'pointer' }}
      >
       <PlusIcon />
      </button>
      <MDBCardBody>
        <MDBCardText style={{ fontSize: '18px', fontWeight: 'bold' }}>{name}</MDBCardText>
      </MDBCardBody>
    </MDBCard>
    )
}

export default PlusBox;
