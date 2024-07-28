import React, { useState, useEffect } from 'react';
import {
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import MaintenanceCard from '../Cards/MaintainanceCard'; 

const PreviousEnquiry = (props) => {
    const [ReleaseData, setReleaseData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await Promise.all(
              props.user.queryLogNumbers.map(async (queryLogNumbers) => {
                const response = await fetch(`http://localhost:5050/api/enquiry/enquiry-data/${queryLogNumbers}`);
                if (!response.ok) {
                  throw new Error('Request failed');
                }
                return response.json();
              })
            );
            setReleaseData(data);
          } catch (error) {
            console.error(error);
            // Handle error state
          }
        };
      
        fetchData();
      }, [props.user.queryLogNumbers]);
      console.log("this is releasedata: ", ReleaseData);
      return (
        <React.Fragment>
          {ReleaseData && ReleaseData.length > 0 ? (
            <MDBRow className='row-cols-1 row-cols-md-3 g-4 ms-auto' style={{ paddingTop: "20px" }}>
              {ReleaseData.map((data, index) => (
                <MDBCol key={index}>
                  <MaintenanceCard data={data} typo={"enquiry"}/>
                </MDBCol>
              ))}
            </MDBRow>
          ) : (
            <center><h4>No request access found</h4></center>
          )}
        </React.Fragment>
      );
      
}


export default PreviousEnquiry;
