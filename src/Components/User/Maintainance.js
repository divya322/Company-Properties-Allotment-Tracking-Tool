import React, { useState, useEffect } from 'react';
import {
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import MaintenanceCard from '../Cards/MaintainanceCard'; 
import PlusBox from '../Cards/PlusBox';

const Maintenance = (props) => {
    const [maintenanceData, setMaintenanceData] = useState([]);
    const [maintStatus, setmaintStatusData] = useState(true);
    console.log("user in maintainance: ", props);
    useEffect(() => {
        const fetchData = async () => {
            const data = await Promise.all(
                props.user.maintenanceLogNumbers.map(async (maintenanceLogNumber) => {
                    let response;
                    try {
                        response = await fetch(`http://localhost:5050/api/maintain/maintainance-data/${maintenanceLogNumber}`);
                        if (!response.ok) {
                            throw new Error('Data not found');
                        }
                    } catch (error) {
                        console.log(error);
                        // If data is not found, try fetching from the second API endpoint
                        response = await fetch(`http://localhost:5050/api/schdmaintain/schd-maintainance-data/${maintenanceLogNumber}`);
                        setmaintStatusData(false)
                    }
                    return response.json();
                })
            );
            setMaintenanceData(data);
        };

        fetchData();
    });

    return (
        <MDBRow className='row-cols-1 row-cols-md-3 g-4 ms-auto' style={{ paddingTop: "20px" }}>
            {maintenanceData.map((data, index) => (
                <MDBCol key={index}>
                    <MaintenanceCard data={data} remark={maintStatus} typo={"maintenance"} />
                </MDBCol>
            ))}
            <PlusBox name={"Add Maintainance request"}/>
        </MDBRow>
    );
}

export default Maintenance;
