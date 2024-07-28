import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import "./PersonalProfile.css"

export default function PersonalProfile(props) {
  console.log("the user in profile: ", props.user.gender);
  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-50">
          <MDBCol lg="10" className="mb-3 mb-lg-4">
            <MDBCard className="mb-7" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  {props.user.gender === 'male' ? (
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="Male Avatar"
                      className="my-5"
                      style={{ width: '80px' }}
                      fluid
                    />
                  ) : (
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Female Avatar"
                      className="my-5"
                      style={{ width: '80px' }}
                      fluid
                    />
                  )}
                  <MDBTypography tag="h5" style={{ color: 'black' }}>{props.user.name}</MDBTypography>
                  <MDBCardText style={{ color: 'black' }}>Employee ID: {props.user.employeeNumber}</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Personal Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{props.user.email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">{props.user.phnumber}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Statistical Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Property assigned</MDBTypography>
                        <MDBCardText className="text-muted">{props.user.propertyNumber && props.user.propertyNumber.length > 0 ? (
                          <ul>
                            {props.user.propertyNumber.map((requestId, index) => (
                              <li key={index}>{requestId}</li>
                            ))}
                          </ul>
                        ) : 'No Assets Assigned'}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Maintainance Requests</MDBTypography>
                        <MDBCardText className="text-muted">{(props.user.maintenanceLogNumbers)}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Asset Release Requests</MDBTypography>
                        <MDBCardText className="text-muted">{props.user.releaseId && props.user.releaseId.length > 0 ? (
                          <ul>
                            {props.user.releaseId.map((requestId, index) => (
                              <li key={index}>{requestId}</li>
                            ))}
                          </ul>
                        ) : 'No release request'}
                        </MDBCardText>
                      </MDBCol>

                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Asset Requests</MDBTypography>
                        <MDBCardText className="text-muted">
                          {props.user.requestId && props.user.requestId.length > 0 ? (
                            <ul>
                              {props.user.requestId.map((requestId, index) => (
                                <li key={index}>{requestId}</li>
                              ))}
                            </ul>
                          ) : 'No Asset requests'}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>


                    <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}