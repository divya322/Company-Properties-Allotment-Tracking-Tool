import React, { useState, useEffect } from 'react';
import {
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import MaintenanceCard from '../Cards/MaintainanceCard'; 


const RequestAccess = (props) => {
    const [AccessData, setAccessData] = useState([]);
    console.log("user in Access: ", props);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await Promise.all(
              props.user.requestId.map(async (requestIdLogNumber) => {
                const response = await fetch(`http://localhost:5050/api/requestaccess/access-data/${requestIdLogNumber}`);
                if (!response.ok) {
                  throw new Error('Request failed');
                }
                return response.json();
              })
            );
            setAccessData(data);
          } catch (error) {
            console.error(error);
            // Handle error state
          }
        };
      
        fetchData();
      }, [props.user.requestId]);
      

    return (
        <React.Fragment>
          {AccessData && AccessData.length > 0 ? (
            <MDBRow className='row-cols-1 row-cols-md-3 g-4 ms-auto' style={{ paddingTop: "20px" }}>
              {AccessData.map((data, index) => (
                <MDBCol key={index}>
                  <MaintenanceCard data={data} />
                </MDBCol>
              ))}
            </MDBRow>
          ) : (
            <center><h4>No request access found</h4></center>
          )}
        </React.Fragment>
      );      
}

export default RequestAccess;
