import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardFooter
} from 'mdb-react-ui-kit';

const MaintenanceCard = (props) => {
    console.log("MaintenanceCard!!!", props.typo);

    if (props.typo === "maintenance") {
      let { maintenanceLogNumber, details, date, remarks } = props.data;
      if (!remarks) {
        remarks = "The remark is yet to be given!";
      }
  
      return (
        <MDBCard className='h-100'>
          <MDBCardBody>
            <MDBCardText>
              <strong>Maintenance Log Number:</strong> {maintenanceLogNumber}<br />
              <strong>Details:</strong> {details}<br />
              <strong>Date:</strong> {date}<br />
              <strong>Remarks:</strong> {remarks}
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            {/* Add any additional footer content here */}
          </MDBCardFooter>
        </MDBCard>
      );
    } 
    else if (props.typo === "release") {
      let { propertyName, type, requestedDate, status, remarks } = props.data;
      if (!remarks) {
        remarks = "No remarks provided.";
      }
  
      return (
        <MDBCard className='h-100'>
          <MDBCardBody>
            <MDBCardText>
              <strong>Property Name:</strong> {propertyName}<br />
              <strong>Type:</strong> {type}<br />
              <strong>Requested Date:</strong> {requestedDate}<br />
              <strong>Status:</strong> {status}<br />
              <strong>Remarks:</strong> {remarks}
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            {/* Add any additional footer content here */}
          </MDBCardFooter>
        </MDBCard>
      );
    } 
    else if (props.typo === "request") {
        let { requestId, propertyName, type, requestedDate, status, remarks } = props.data;
        if (!remarks) {
          remarks = "No remarks provided.";
        }
    
        return (
          <MDBCard className='h-100'>
            <MDBCardBody>
              <MDBCardText>
                <strong>Request ID:</strong> {requestId}<br />
                <strong>Property Name:</strong> {propertyName}<br />
                <strong>Type:</strong> {type}<br />
                <strong>Requested Date:</strong> {requestedDate}<br />
                <strong>Status:</strong> {status}<br />
                <strong>Remarks:</strong> {remarks}
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              {/* Add any additional footer content here */}
            </MDBCardFooter>
          </MDBCard>
        );
      }

      else if (props.typo === "enquiry") {
        console.log("glad you reached enquiry maintainance card!");
        let { queryTopic, querylognumber, dateTime, details, otherRemarks, appFeedback } = props.data;
        if (!otherRemarks) {
          otherRemarks = "No additional remarks provided.";
        }
      return (
        <MDBCard className='h-100'>
          <MDBCardBody>
            <MDBCardText>
              <strong>Query Topic:</strong> {queryTopic}<br />
              <strong>Query Log Number:</strong> {querylognumber}<br />
              <strong>Date:</strong> {dateTime}<br />
              <strong>Details:</strong> {details}<br />
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            {/* Add any additional footer content here */}
          </MDBCardFooter>
        </MDBCard>
      );
    } else {
      return <p>Invalid props.typo value</p>;
    }
  }
  
  export default MaintenanceCard;