import React, {useState, useEffect} from 'react'
import {
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import MaintenanceCard from '../Cards/MaintainanceCard'; 

const ReleaseRequest = (props) => {
    const [ReleaseData, setReleaseData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await Promise.all(
              props.user.releaseId.map(async (ReleaseNumber) => {
                const response = await fetch(`http://localhost:5050/api/releaserequest/release-data/${ReleaseNumber}`);
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
      }, [props.user.releaseId]);
      
      return (
        <React.Fragment>
          {ReleaseData && ReleaseData.length > 0 ? (
            <MDBRow className='row-cols-1 row-cols-md-3 g-4 ms-auto' style={{ paddingTop: "20px" }}>
              {ReleaseData.map((data, index) => (
                <MDBCol key={index}>
                  <MaintenanceCard data={data} typo={"release"}/>
                </MDBCol>
              ))}
            </MDBRow>
          ) : (
            <center><h4>No request access found</h4></center>
          )}
        </React.Fragment>
      );
      
}

export default ReleaseRequest
