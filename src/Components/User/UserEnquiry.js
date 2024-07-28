import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBCheckbox,
    MDBIcon,
    MDBRange
}
    from 'mdb-react-ui-kit';
import "./UserEnquiry.css"

const UserEnquiry = () => {
    return (
        <MDBContainer fluid>

            <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>

            <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
            <center><h3 className="fw-bold mb-0">Employee Enquiry</h3></center>
                <MDBCardBody className='p-2 text-center'>
                
                    <h2 className="fw-bold mb-5">Let us know!</h2>

                    <MDBRow>
                        <MDBCol col='6'>
                            <MDBInput wrapperClass='mb-4' label='Query topic' id='form1' type='text' />
                        </MDBCol>

                        <MDBCol col='6'>
                            <MDBInput wrapperClass='mb-4' label='Query Start date/time' id='form1' type='text' />
                        </MDBCol>
                    </MDBRow>
                    <div className='ContainerText'>
                        <div className="resizable-textarea">
                            <textarea className="form-control" rows="5" placeholder="Query Details"></textarea>
                        </div>
                        <div className="resizable-textarea">
                            <textarea className="form-control" rows="5" placeholder="Other remarks"></textarea>
                        </div>
                    </div>

                    <MDBRange
                        defaultValue={2.5}
                        min='0'
                        max='5'
                        step='0.5'
                        id='customRange3'
                        label={<span>How Satisfied are you with our services? <br /> 😄 Rating out of 0 (Lowest) - 5 (Highest)</span>}
                    />

                    <MDBBtn className='w-100 mb-4' size='md'>Submit Query</MDBBtn>



                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    )
}

export default UserEnquiry
